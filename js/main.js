const { createApp } = Vue;

const opzioni = {
  data: function () {
    return {
      list: [
        {
            text: "fare la spesa",
            check: false,
        },
        {
            text: "fare la lavatrice",
            check: false,
        },
        {
            text: "rifare il letto",
            check: false,
        },
      ],
    };
  },

  methods: {
    removeItem(i){
        this.list.splice(i,1);
    },
  },
};

createApp(opzioni).mount("#app");
