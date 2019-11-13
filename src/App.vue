<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout justify-center wrap>
          <router-link class="mx-1" to="/">1. Basic Variables</router-link>
          <router-link class="mx-1" to="/exercise-two">2. Using Buttons and v-for</router-link>
        </v-layout>
      </v-container>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
