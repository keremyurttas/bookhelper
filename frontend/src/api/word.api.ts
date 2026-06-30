import type { Word } from "@/types/word";
import api from "./axios";

export const wordApi = {
  async getWords() {
    const response = await api.get<Word[]>('/words');
    return response.data;
    },
    async createWord(word: Omit<Word, 'id' | 'createdAt' | 'updatedAt'>) {
        const response = await api.post<Word>('/words', word);
        return response.data;
    },
    async deleteWord(id: number) {
        await api.delete(`/words/${id}`);
    },
    async updateWord(id: number, word: Partial<Omit<Word, 'id' | 'createdAt' | 'updatedAt'>>) {
        const response = await api.put<Word>(`/words/${id}`, word);
        return response.data;
    }
};   