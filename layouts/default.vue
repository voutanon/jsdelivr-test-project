<template>
  <v-app class="container">
    <Header />
    <Nuxt />
    <Footer />
    <PackageModal />
  </v-app>
</template>

<script>
import Header from "@/components/layouts/header.vue"
import Footer from "@/components/layouts/footer.vue"
import PackageModal from "@/components/modals/packageModal.vue"

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
    PackageModal
  }
}
</script>
<style lang="scss" scoped>
  .container {
    min-height: 100vh;
    @media screen and (max-width: 768px) {
      padding: 0;
    }
  }
</style>
