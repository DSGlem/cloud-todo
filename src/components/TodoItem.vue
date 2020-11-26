<template>
  <div class="todo-item" @dblclick="updateItem" @blur="saveItem">
    <div>{{ id }}</div>
    <input v-model="name" :disabled="!editable" />
    <div>{{ priority }}</div>
    <button @click="updateItem">{{ saveEditText }}</button>
    <button @click="deleteItem">delete</button>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      validator: (value) => {
        return value >= 0;
      },
    },
    name: {
      type: String,
      default: "Lorem ipsum",
    },
    priority: {
      type: String,
      default: "low",
      validator: (value) => {
        return ["low", "medium", "high"].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      editable: false,
    };
  },
  computed: {
    saveEditText() {
      return this.editable ? "save" : "edit";
    },
  },
  methods: {
    deleteItem() {
      this.$emit("delete", this.id);
    },
    updateItem() {
      this.editable = true;
      this.$emit("update", {
        id: this.id,
        name: this.name,
        priority: this.priority,
      });
    },
    saveItem() {
      console.log("d");
      this.editable = false;
      this.$emit("save", {
        id: this.id,
        name: this.name,
        priority: this.priority,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-item {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1rem 1fr repeat(2, minmax(3rem, 4rem)) auto;
}
</style>