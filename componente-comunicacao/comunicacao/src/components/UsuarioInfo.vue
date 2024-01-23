<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <button @click="reiniciar()">Reiniciar nome</button>
        <button @click="reiniciarFN()">Reiniciar nome (Callback)</button>
    </div>
</template>

<script>
export default {
  props: {
    propNome: {
      type: String,
      // required: true,
      default: "Anônimo",
    },
    reiniciarFN: Function,
  },
  methods: {
    inverterNome() {
      return this.propNome
        .split("")
        .reverse()
        .join("");
    },
    reiniciar() {
      const antigo = this.propNome;
      this.propNome = "Pedro";
      this.$emit("nomeMudou", {
        novo: this.propNome,
        antigo,
      });
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
