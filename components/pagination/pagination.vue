<template>
  <paginate
    v-if="pageTotal > 1"
    v-model="currentPage"
    :page-count="pageTotal"
    :click-handler="setPage"
    :page-range="3"
    :margin-pages="1"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :page-class="'pagination__page'"
    :next-class="'pagination__page pagination__page_next'"
    :prev-class="'pagination__page pagination__page_prev'"
    :container-class="'pagination'"
  >
  </paginate>
</template>
<script>
export default {
  props: {
    pageTotal: {
      type: Number,
      require,
      default: 0
    }
  },
  data() {
    return {
      currentPage: 1
    }
  },
  methods: {
    setPage() {
      this.$emit('followPage', this.currentPage)
    }
  }
}
</script>
<style lang="scss" scoped>
  .pagination::v-deep {
    display: flex;
    justify-content: center;
    list-style-type: none;
    width: 100%;
    margin-top: 15px;
    .pagination {
      &__page {
        border: 1px solid black;
        padding: 5px;
        &:not(:first-child) {
          margin-left: -1px;
        }
        &.active {
          text-decoration: underline;
        }
        &_next {
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
        &_prev {
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
      }
    }
  }
</style>