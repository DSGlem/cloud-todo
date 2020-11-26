// import firebase from "firebase";
export default {
  state: () => ({
    items: [
      { id: 0, name: "Lorem", priority: "low" },
      { id: 1, name: "Lorem2", priority: "low" },
      { id: 2, name: "Lorem3", priority: "low" },
      { id: 3, name: "Lorem4", priority: "low" },
    ],
    emptyIds: [],
    nextId: 4,

    itemsSequence: [],
  }),
  mutations: {
    addItem(state, payload) {
      console.log("3");
      let index;

      if (state.emptyIds.length) {
        index = state.emptyIds.pop();
      } else {
        state.nextId++;
        index = state.nextId;
      }

      payload.id = index;
      state.items.push(payload);
    },
    deleteItem(state, payload) {
      const index = state.items.findIndex((item) => {
        return item.id === payload;
      });

      console.log(state.items);
      console.log(payload);
      console.log(index);

      state.emptyIds.push(payload);

      const countElements = 1;
      const a = state.items.splice(index, countElements);
      console.log(a);
    },
    update(state, payload) {
      console.log(payload);
      const index = state.items.findIndex((item) => {
        return item.id === payload.id;
      });

      state.items[index].name = payload.name;
      state.items[index].priority = payload.priority;
    },
  },
  actions: {
    addItem({ commit }, payload) {
      commit("addItem", payload);
    },
    deleteItem({ commit }, payload) {
      commit("deleteItem", payload);
    },
    update({ commit }, payload) {
      commit("update", payload);
    },
  },
};
