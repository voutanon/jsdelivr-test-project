<template>
  <div class="container">
    <Header />
    <Nuxt />
    <Footer />
    <PackageModal />
  </div>
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
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    min-height: 100vh;
    @media screen and (max-width: 768px) {
      padding: 0;
    }
  }
</style>
