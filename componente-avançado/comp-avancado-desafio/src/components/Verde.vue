<template>
    <div class="caixa verde">
        Conteúdo do Componente {{ cor }}
    </div>
</template>

<script>
export default {
  props: ["cor"],
};
</script>

<style scoped>
</style>
