<template>
    <div class="usuario-detalhe">
        <h2 v-if="!usuario">Usuário não selecionado!</h2>
        <div v-else>
            <h2>ID: {{ usuario.id }}</h2>
            <h2>Nome: {{ usuario.nome }}</h2>
            <h2>Idade: {{ usuario.idade }}</h2>
        </div>
    </div>
</template>

<script>
import barramento from "../barramento";

export default {
  data() {
    return {
      usuario: null, //inicia a var "usuario" zerada
    };
  },
  props: {
    usuarios: Array, //recebe o array com todos os usuarios
  },
  created() {
    barramento.$on("cliqueUsuario", (chave) => {
      this.usuario = this.usuarios[chave]; //carrega a var "usuario" com a posição no array selecionada pelo clique
    });
  },
};
</script>

<style>
.usuario-detalhe {
  flex: 1;
  border: 1px solid #ccc;
}
</style>
