<template>
  <v-footer class="footer">
    <span class="footer__infoTitle">Name:  <span class="footer__infoDescription">Voytanovich Dmytro</span></span>
    <span class="footer__infoTitle">GitHub: <a class="footer__link footer__infoDescription" href="https://github.com/voutanon">voutanon</a></span>
  </v-footer>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 10px 0;
  margin-top: 20px;
  border-top: 1px solid black;
  &__infoTitle {
    font-weight: 600;
  }
  &__infoDescription {
    font-weight: 500;
  }
}
</style>