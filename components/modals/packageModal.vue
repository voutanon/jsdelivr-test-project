<template>
  <modal class="packageModal" name="packageModal">
    <div class="packageModal__content">
      <h3 class="packageModal__title">Name: {{ currentPackage.name }}</h3>
      <span class="packageModal__type">Type: {{ currentPackage.type }}</span>
      <div class="packageModal__container">
        <h4 class="packageModal__titleList">Versions:</h4>
        <ul class="packageModal__versionsList">
          <li class="packageModal__version" v-for="versionData of currentPackage.versions" :key="versionData.version">
            {{ versionData.version }}
          </li>
        </ul>
      </div>
    </div>
  </modal>
</template>
<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "PackageModal",
  props: {
    packageName: {
      type: String,
      require
    }
  },
  computed: {
    ...mapGetters({
      currentPackage: "packages/getCurrentPackage"
    })
  },
}
</script>
<style lang="scss" scoped>
  .packageModal {
    &__content {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    &__versionsList {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      padding: 5px 0 0 10px;
      width: 100%;
    }
    &__version {
      width: 50px;
      display: flex;
    }
    &__titleList {
      width: 100%;
    }
  }
</style>