new Vue({
  el: "#desafio",
  data: {
    valor: 0,
    resultado: "Valor Diferente",
  },
  watch: {
    resultado(novo, antigo) {
      setTimeout(() => {
        this.valor = 0;
      }, 5000);
    },
    valor(novo, antigo) {
      this.resultado = this.valor === 37 ? "Valor igual" : "Valor Diferente";
    },
  },
  //   computed: {
  //     alterarResultado() {
  //       this.resultado = this.valor === 37 ? "Valor igual" : "Valor Diferente";
  //     },
  //   },
});
