<template>
  <v-container class="pa-0 ma-0">
    <div class="main-header">
      <v-card-title class="text-h5">
        Users
      </v-card-title>
      <v-btn
          fab
      >
        <span>+</span>
      </v-btn>
    </div>

    <v-row
        class="pa-4"
        justify="space-between"
    >
      <v-col cols="5">
        <v-treeview
            :active.sync="active"
            :items="items"
            :load-children="fetchUsers"
            :open.sync="open"
            activatable
            color="warning"
            open-on-click
            transition
        >
          <template v-slot:prepend="{ item }">
            <v-icon v-if="!item.children">
              mdi-account
            </v-icon>
          </template>
        </v-treeview>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col
          class="d-flex text-center"
      >
        <v-scroll-y-transition mode="out-in">
          <div
              v-if="!selected"
              class="text-h6 grey--text text--lighten-1 font-weight-light"
              style="align-self: center;"
          >
            Select a User
          </div>
          <v-card
              v-else
              :key="selected.id"
              class="pt-6 mx-auto"
              flat
              max-width="400"
          >
            <v-card-text>
              <v-avatar
                  v-if="avatar"
                  size="88"
              >
                <v-img
                    :src="`https://avataaars.io/${avatar}`"
                    class="mb-6"
                ></v-img>
              </v-avatar>
              <h3 class="text-h5 mb-2">
                {{ selected.name }}
              </h3>
              <div class="blue--text mb-2">
                {{ selected.email }}
              </div>
              <div class="blue--text subheading font-weight-bold">
                {{ selected.username }}
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-row
                class="text-left"
                tag="v-card-text"
            >
              <v-col
                  class="text-right mr-4 mb-2"
                  tag="strong"
                  cols="5"
              >
                Company:
              </v-col>
              <v-col>{{ selected.company.name }}</v-col>
              <v-col
                  class="text-right mr-4 mb-2"
                  tag="strong"
                  cols="5"
              >
                Website:
              </v-col>
              <v-col>
                <a
                    :href="`//${selected.website}`"
                    target="_blank"
                >{{ selected.website }}</a>
              </v-col>
              <v-col
                  class="text-right mr-4 mb-2"
                  tag="strong"
                  cols="5"
              >
                Phone:
              </v-col>
              <v-col>{{ selected.phone }}</v-col>
            </v-row>
          </v-card>
        </v-scroll-y-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UsersHome"
}
</script>

<style>
  .main-header{
    max-width: 100vw;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
  }
</style>