<script setup lang="ts">
  
</script>

<template>
  <v-app>
    <v-main class="bg-grey-lighten-4">
      <v-container fluid class="pa-8">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-h3 font-weight-bold">BookHelper</h1>

          <p class="text-subtitle-1 text-grey-darken-1">
            Manage your English vocabulary while reading books.
          </p>
        </div>

        <v-row>
          <!-- LEFT SIDE - ADD WORD -->
          <v-col cols="12" md="5">
            <v-card elevation="2" rounded="lg" class="pa-6">
              <div class="mb-6">
                <h2 class="text-h5 font-weight-bold">Add New Word</h2>

                <p class="text-body-2 text-grey-darken-1">
                  Save unknown words and their meanings.
                </p>
              </div>

              <v-form>
                <v-text-field
                  label="English Word"
                  placeholder="Example: abandon"
                  variant="outlined"
                  class="mb-3"
                />

                <v-text-field
                  label="Meaning"
                  placeholder="Example: terk etmek"
                  variant="outlined"
                  class="mb-3"
                />

                <v-textarea
                  label="Example Sentence"
                  placeholder="I abandoned my old habits."
                  variant="outlined"
                  rows="3"
                  class="mb-3"
                />

                <v-textarea
                  label="Notes"
                  placeholder="Additional information..."
                  variant="outlined"
                  rows="3"
                  class="mb-5"
                />

                <v-btn block size="large" color="primary"> Save Word </v-btn>
              </v-form>
            </v-card>
          </v-col>

          <!-- RIGHT SIDE - WORD LIST -->
          <v-col cols="12" md="7">
            <v-card elevation="2" rounded="lg">
              <v-card-title class="pa-6">
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <h2 class="text-h5 font-weight-bold">My Words</h2>

                    <p class="text-body-2 text-grey-darken-1">120 saved words</p>
                  </div>
                </div>
              </v-card-title>

              <v-divider />

              <!-- Search and Filter -->

              <div class="pa-6">
                <v-row>
                  <v-col cols="12" md="8">
                    <v-text-field
                      label="Search words..."
                      prepend-inner-icon="mdi-magnify"
                      variant="outlined"
                      hide-details
                    />
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-select
                      label="Sort By"
                      :items="['Newest', 'Oldest', 'Alphabetical']"
                      variant="outlined"
                      hide-details
                    />
                  </v-col>
                </v-row>
              </div>

              <v-divider />

              <!-- WORD TABLE -->

              <v-table>
                <thead>
                  <tr>
                    <th>Word</th>

                    <th>Meaning</th>

                    <th>Added Date</th>

                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <strong> abandon </strong>
                    </td>

                    <td>terk etmek</td>

                    <td>30 June 2026</td>

                    <td>
                      <v-btn
                        icon="mdi-delete"
                        size="small"
                        variant="text"
                        color="error"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong> accurate </strong>
                    </td>

                    <td>doğru</td>

                    <td>29 June 2026</td>

                    <td>
                      <v-btn
                        icon="mdi-delete"
                        size="small"
                        variant="text"
                        color="error"
                      />
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
