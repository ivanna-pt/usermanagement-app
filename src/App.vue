<template>
<component :is="layout">
  <router-view></router-view>
</component>
</template>

<script>
import MainLayout from "@/layouts/MainLayout"
export default {
  name: 'App',
  computed: {
    layout() {
      console.log(this.$route.meta)
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  },
  data: () => ({
    //
  }),
  components: {
    MainLayout
  }
};
</script>
