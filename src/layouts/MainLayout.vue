<template>
  <v-app class="app-container">
    <app-bar></app-bar>
    <v-main class="pa-0 pl-14">
      <!--  -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";
export default {
  name: 'main-layout',
  data: () => ({

  }),
  components: {
    AppBar
  }
}
</script>

<style>
  .app-container{
    background-color: #F0F0F0 !important;
  }
</style>

