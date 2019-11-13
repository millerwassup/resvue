<template>
  <v-container id="exercise-two">
    <v-row no-gutters>
      <v-col cols="12">
        <h1>Exercise 2: Using buttons and v-for</h1>
      </v-col>

      <v-col cols="12">
        <p>Edit the HTML tags and javascript to change the appearance and functionality.</p>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12">
        <h2>Part 1</h2>
        Play around with the text field a little.
      </v-col>

      <v-col cols="12">
        <b>Value of students:</b> {{ students }}
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>Part 5</h2>
        How does the rendered HTML change when we use v-show instead of v-if?
      </v-col>
    </v-row>

    <v-divider class="my-4"/>
    <v-row>
      <v-col cols="12">
        <h2>Part 6</h2>
        Add an HTML element using v-else-if that will pop up if msg is "Vue.js kinda rocks!"
      </v-col>
    </v-row>

    <v-divider class="my-4"/>
    <v-row>
      <v-col cols="12">
        <h2>Part 7</h2>
        Add an HTML element using v-else that will pop up if msg is anything else.
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'ExerciseTwo',

  data: () => ({
    students: []
  })
}
</script>
