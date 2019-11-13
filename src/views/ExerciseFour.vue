<template>
  <v-container id="exercise-four">
    <v-row no-gutters>
      <v-col cols="12">
        <h1>Exercise 4: Login, Form Validation</h1>
      </v-col>

      <v-col cols="12">
        <p>Edit the HTML and/or javascript to change the appearance and functionality.</p>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12">
        <h2>Part 1</h2>
        Create a component called Login.vue which is a card with a v-form containing
        two v-text-fields: email and password.
        It doesn't have to be pretty, just get the basic outline.
        Also import that newly-created component into this one and add it in the
        next column below so we can see what it looks like.
      </v-col>
      <v-col cols="12">
        <!-- Your code here -->
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 2</h2>
        Add an append-outer-icon for the password field that reveals the letters upon clicking.
        <a href="https://vuetifyjs.com/en/components/text-fields#password-input" target="_blank">For reference</a>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row dense>
      <v-col cols="12">
        <h2>Part 3</h2>
        Create a component called Register.vue which is a card with a
        form containing four text fields: first name, last name, email, and password.
        Just as above, import it and add it below so we can see what it looks like.
      </v-col>
      <v-col cols="12">
        <!-- Your code here -->
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 4</h2>
        Again, an append-outer-icon for the password field that reveals the letters upon clicking.
        <a href="https://vuetifyjs.com/en/components/text-fields#password-input" target="_blank">For reference</a>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 5</h2>
        Now, we will do some validation.
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ExerciseFour',

  data: () => ({
    students: []
  })
}
</script>
