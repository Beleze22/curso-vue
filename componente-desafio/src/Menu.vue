<template>
  <v-navigation-drawer app>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
                Menu
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <ItemMenu></ItemMenu>
    </v-navigation-drawer>
</template>

<script>
import ItemMenu from "./ItemMenu.vue"
export default {
  components: { ItemMenu },
}
</script>