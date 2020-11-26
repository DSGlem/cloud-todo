<template>
  <div class="todo-list">
    <todo-add @add="addHandler"></todo-add>
    <todo-item
      v-for="(item, index) in items"
      :key="index"
      v-bind="item"
      @delete="deleteHandler"
      @update="updateHandler"
    ></todo-item>
  </div>
</template>
<script>
import TodoItem from "@/components/TodoItem";
import TodoAdd from "@/components/TodoAdd";
import { mapState } from "vuex";
export default {
  components: { TodoItem, TodoAdd },
  computed: {
    ...mapState({
      items: (state) => state.todo.items,
      newId: (state) => state.todo.emptyIds.pop() || state.todo.nextId,
    }),
  },
  methods: {
    deleteHandler(value) {
      this.$store.dispatch("deleteItem", value);
    },
    updateHandler(value) {
      console.log("value");
      this.$store.dispatch("update", {
        id: value.id,
        name: value.name,
        priority: value.priority,
      });
    },
    addHandler(value) {
      console.log("aa");
      this.$store.dispatch("addItem", {
        name: value.name,
        priority: value.priority,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  display: grid;
  gap: 0.5rem;
}
</style>