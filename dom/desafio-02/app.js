new Vue({
  el: "#desafio",
  data: {
    valor1: "",
    valor2: "",
  },
  methods: {
    alerta() {
      alert("Botão pressionado!");
    },
    alteraValor1(event) {
      this.valor1 = event.target.value;
    },
    alteraValor2(event) {
      this.valor2 = event.target.value;
    },
  },
});
