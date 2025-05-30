<template>
  <nav class="filter-nav">
    <button @click="updataFilter('all')" :class="{active:current === 'all'}">All</button>
    <button @click="updataFilter('completed')" :class="{active:current === 'completed'}">Completed</button>
    <button @click="updataFilter('ongoing')" :class="{active:current === 'ongoing'}">Ongoing</button>
  </nav>
</template>

<script>
export default {
  props: ["current"],
  methods: {
    updataFilter(by) {
      this.$emit("filterChange", by);
    },
  },
};
</script>

<style scoped>
.filter-nav button{
    background: none;
    border: none;
    color: #bbb;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
    &.active{
        color: #555;
    }
}
</style>
