<template>
  <header class="header">
    <v-text-field 
      v-model="searchPackage.text"
      placeholder="Package name..."
    >
    </v-text-field>
  </header>
</template>
<script>
import { debounce } from 'lodash'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      searchPackage: {
        text: ""
      },
    }
  },
  methods: {
    ...mapActions({
      getSearchPackages: 'packages/getSearchPackages'
    }),
  },
  watch: {
    "searchPackage.text": debounce(function() {
      this.getSearchPackages(this.searchPackage)
    }, 300)
  }
}
</script>
<style lang="scss" scoped>
  .header {
    @media screen and (max-width: 768px) {
      padding: 0 10px;
    }
  }
</style>