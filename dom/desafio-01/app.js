new Vue({
  el: "#desafio",
  data: {
    nome: "Gustavo Beleze",
    idade: 29,
    imagem:
      "https://miro.medium.com/v2/resize:fit:900/1*OrjCKmou1jT4It5so5gvOA.jpeg",
  },
  methods: {
    randomNum: function () {
      num = Math.floor(Math.random() * 100) + 1;
      return num;
    },
  },
});
