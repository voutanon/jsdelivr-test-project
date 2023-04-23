<template>
  <div class="tableContainer">
    <v-simple-table v-if="packages.length" class="packageTable" width="100%">
      <thead class="packageTable__head">
        <tr class="packageTable__row">
          <th class="packageTable__cell">
            Name
          </th>
          <th class="packageTable__cell">
            Description
          </th>
          <th class="packageTable__cell">
            Key words
          </th>
        </tr>
      </thead>
      <tbody class="packageTable__body">
        <tr
          class="packageTable__row"
          v-for="packageData of packages"
          :key="packageData.package.name"
          @click="showDetailsPackage(packageData.package.name)"
        >
          <td class="packageTable__cell">{{ packageData.package.name }}</td>
          <td class="packageTable__cell">{{ packageData.package.description }}</td>
          <td class="packageTable__cell">
            <ul class="packageTable__keywordsList">
              <li class="packageTable__keyword" v-for="(keyword, index) of packageData.package.keywords" :key="keyword+index">{{ keyword }}</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <div class="packageNotFound" v-else>
      <h2 class="packageNotFound__title">Package not found...</h2>
      <p class="packageNotFound__description">Please, Input or change your request in text field</p>
    </div>
    <Pagination :pageTotal="getPackageTotal" @followPage="getPackagesByPage" />
  </div>
</template>
<script>
import { modalsOpenClose } from "@/mixins/modalsOpenClose";
import { mapGetters, mapActions } from "vuex"

export default {
  name: "PackageCard",
  mixins: [modalsOpenClose()],
  props: {
    packageData: {
      type: Object,
      require,
    }
  },
  data() {
    return {
      limitPackagePage: 10,
      packages: []
    }
  },
  computed: {
    ...mapGetters({
      getPackages: 'packages/getPackages'
    }),
    getPackageTotal() {
      return Math.ceil(this.getPackages.objects?.length / 10)
    },
  },
  methods: {
    ...mapActions({
      getPackage: "packages/getPackage"
    }),
    async showDetailsPackage(packageName) {
      console.log(packageName)
      await this.getPackage(packageName)
      this.openModal('packageModal')
    },
    getPackagesByPage(page) {
      if(this.getPackages.objects?.length) {
        this.packages = this.getPackages.objects.slice((page - 1) * this.limitPackagePage, page * this.limitPackagePage)
      } else {
        this.packages = []
      }
    }
  },
  watch: {
    "getPackages.objects"() {
      this.getPackagesByPage(1)
    }
  }
}
</script>
<style lang="scss" scoped>
  .tableContainer {
    padding: 0;
    height: 100%;
    .packageTable {
      max-width: 100vw;
      width: 100%;
      &__cell {
        text-align: left;
        color: black !important;
      }
      &__keywordsList {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        list-style-type: none;
        margin: 10px 0;
      }
      &__keyword {
        border: 1px solid black;
        border-radius: 3px;
        width: max-content;
        padding: 2px 5px;
        font-size: 14px;
      }
    }
    .packageNotFound {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 5px;
      height: 100%;
      text-align: center;
      color: rgb(66, 66, 66);
    }
  }
</style>