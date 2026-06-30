import type { Word } from "@/types/word";
import { defineStore } from "pinia";
import { ref } from "vue/dist/vue.js";
import { wordApi } from "@/api/word.api";

export const useWordStore = defineStore('word', () => {
    const words = ref<Word[]>([]);
    const isLoading = ref(false);
    const error = ref<string | null>(null);

    async function fetchWords() {
        try {
            isLoading.value = true;
            error.value = null;

            const response = await wordApi.getWords();
            words.value = response;
        }
        catch (err) {
            error.value = 'Failed to fetch words';
        }
        finally {
            isLoading.value = false;
        }
    }

    async function addWord(data:{
        word: string;
        meaning: string;
        example: string;
        note?: string;
    }){
        try {
            isLoading.value = true;
            error.value = null;
            const response = await wordApi.createWord(data);
            words.value.push(response);
        }
        catch (err) {
            error.value = 'Failed to add word';
        }
        finally {
            isLoading.value = false;
        }
    }
    async function deleteWord(id: number) {
        try {
            isLoading.value = true; 
            error.value = null;
            await wordApi.deleteWord(id);
            words.value = words.value.filter(word => word.id !== id);
        }
        catch (err) {
            error.value = 'Failed to delete word';
        }
        finally {
            isLoading.value = false;
        }
    }
    async function updateWord(id: number, data: Partial<Omit<Word, 'id' | 'createdAt' | 'updatedAt'>>) {
        try {
            isLoading.value = true;
            error.value = null;
            const response = await wordApi.updateWord(id, data);
            const index = words.value.findIndex(word => word.id === id);
            if (index !== -1) {
                words.value[index] = response;
            }
        }
        catch (err) {
            error.value = 'Failed to update word';
        }
        finally {
            isLoading.value = false;
        }
    }

    return { words, isLoading, error, fetchWords, addWord, deleteWord, updateWord };
});