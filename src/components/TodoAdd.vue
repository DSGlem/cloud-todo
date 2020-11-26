<template>
  <div class="todo-item">
    <input v-model="itemInfo.name" />
    <div>{{ itemInfo.priority }}</div>
    <button @click="addItem">add</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemInfo: {
        id: this.id,
        name: this.name,
        priority: this.priority,
      },
    };
  },
  methods: {
    addItem() {
      this.$emit("add", this.itemInfo);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-item {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr minmax(3rem, 4rem) auto;
}
</style>