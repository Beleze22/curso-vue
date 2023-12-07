// teste para commit
<template>
  <v-app>
    <Menu></Menu>

    <Cabecalho></Cabecalho>

    <Conteudo></Conteudo>

    <Rodape></Rodape>
  </v-app>
</template>

<script>
import Menu from "./Menu.vue"
import Cabecalho from "./Cabecalho.vue"
import Rodape from './Rodape.vue'
import Conteudo from './Conteudo.vue'
export default {
  components: {
    Menu,
    Cabecalho,
    Rodape,
    Conteudo,
  },
}
</script>
