<template>
  <v-app>
    

    <v-main>
      <router-view/>
      <v-footer></v-footer>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
