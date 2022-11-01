<template>
  <span>
    <div class="app-bar-wrap">
      <v-app-bar
          app
          absolute
          flat
          color="#2CA5B4"
          dark

      >
        <div class="icon-wrapper">
          <div class="icon-top">
            <v-icon >mdi-lock-outline</v-icon>
          </div>
          <div class="icon-bottom">
            <v-icon >mdi-lock-open-variant-outline</v-icon>
          </div>
        </div>
        <v-toolbar-title class="pl-5">Usermanagement</v-toolbar-title>
        <v-spacer></v-spacer>

        <div>
          <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-width="180"
              :nudge-bottom="10"
              offset-x
              offset-y="false"

          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  light
                  fab
                  height="48"
                  width="48"
                  v-bind="attrs"
                  v-on="on"
              >
                  <span class="teal--text text-h6">JH</span>
                             </v-btn>
            </template>

            <v-card>
              <v-list>
                <v-list-item
                    class="pb-3"
                >
                  <v-list-item-avatar
                      size="48"
                  >
                    <v-avatar
                        color="#2CA5B4"
                        size="48"
                    >
                      <span class="white--text text-h5 text-center">JH</span>
                    </v-avatar>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>Haller, Jan</v-list-item-title>
                    <v-list-item-subtitle>Haller.jan@masterag.de</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list>
                <v-list-item>
                  <v-list-item-ation>
                    <v-btn
                        depressed
                        plain
                        small
                    >
                      <v-icon>
                        mdi-logout
                      </v-icon>
                      <span class="pl-3">Log out</span>
                    </v-btn>
                  </v-list-item-ation>
                </v-list-item>
              </v-list>
            </v-card>

          </v-menu>
        </div>
    </v-app-bar>
    </div>

    <v-navigation-drawer
        app
        clipped
        class="pt-4"
        color="#E8E8E8"
        mini-variant
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="selectedItem"
        >
          <v-list-item
              v-for="(item, i) in items"
              :key="i"
              color="#2CA5B4"
              :to="item.url"

          >
            <v-list-item-icon>
              <v-icon color="#2CA5B4">{{item.icon}}</v-icon>
            </v-list-item-icon>

          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </span>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({
    menu: false,
    selectedItem: 0,
    items: [
      { icon: 'mdi-account-lock-open-outline', url: '/' },
      { icon: 'mdi-lock-open-variant-outline', url: '/roles' },
      { icon: 'mdi-lock-pattern', url: '/systems' }
    ],
  }),
}
</script>

<style>
.icon-wrapper{
  width: 37px;
  height: 30px;
  position: relative;
}

.icon-top{
  position: absolute;
  top: 0px;
  left: 0px;
}

.icon-bottom{
  position: absolute;
  top: 7px;
  left: 14px;
}

.app-bar-wrap{

  width: 100%;
  background-color: #2CA5B4;
  height: 64px
}
</style>