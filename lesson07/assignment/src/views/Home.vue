<template>
  <div>
    <b-jumbotron>
      <template v-slot:header>Assignment07</template>

      <template v-slot:lead>
        <p>All content is from variables in the script section of the .vue file.</p>
      </template>

      <hr class="my-4">

      <router-link to="/Accordion" class="text-danger">Accordion</router-link>

      <router-link to="/Grid" class="text-warning">Grid</router-link><p>All content comes from an object and is implement using a v-for.</p>
      <router-link to="/Images" class="text-success">Images</router-link><p>Images are all taken from an array and implemented using a v-for.</p>
      <router-link to="/Images" class="text-success">Images</router-link><p>A v-if and v-else is used to change content of UI.</p>

      <b-button variant="primary" href="#">Do Something</b-button>
      <b-button variant="success" href="#">Do Something Else</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {

  }
}
</script>

<style scoped>

</style>
