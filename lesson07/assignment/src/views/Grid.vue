<template>
  <div>
    <h1>bootstrap vue grid and table example</h1>
    <h2>Click on age to redirect</h2>
    <b-table striped hover :items="tabledata">
  <template v-slot:cell(age)="data">
    <!-- `data.value` is the value after formatted by the Formatter -->
    <router-link :to="`/grid/${data.value}`">
      {{ data.value }}
    </router-link>
  </template>
</b-table>
  </div>
</template>

<script>
import tabledata from '@/data/tabledata'

export default {
  data () {
    return {
      tabledata: tabledata
    }
  }
}
</script>
