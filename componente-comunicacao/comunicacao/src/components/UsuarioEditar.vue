<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>A idade do usuário é {{ propIdade }}</p>
        <button @click="alterarIdade()">Alterar Idade</button>
    </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    propIdade: Number,
  },
  methods: {
    alterarIdade() {
      this.propIdade += 1;
      barramento.$emit("idadeMudou", this.propIdade);
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
