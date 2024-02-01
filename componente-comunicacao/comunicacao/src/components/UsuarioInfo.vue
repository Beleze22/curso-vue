<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>A idade do usuário é {{ propIdade }}</p>
        <button @click="reiniciar()">Reiniciar nome</button>
        <button @click="reiniciarFN()">Reiniciar nome (Callback)</button>
    </div>
</template>

<script>
import barramento from "../barramento";

export default {
  props: {
    propNome: {
      type: String,
      // required: true,
      default: "Anônimo",
    },
    reiniciarFN: Function,
    propIdade: Number,
  },
  methods: {
    inverterNome() {
      return this.propNome
        .split("")
        .reverse()
        .join("");
    },
    reiniciar() {
      // this.propNome = "Pedro";
      this.$emit("nomeMudou", "Pedro");
    },
  },
  created() {
    barramento.$on("idadeMudou", (idade) => {
      this.propIdade = idade;
    });
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
