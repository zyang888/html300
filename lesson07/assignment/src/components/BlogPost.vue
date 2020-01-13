<template>
  <b-card no-body class="mb-1">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button block href="#" v-b-toggle="id" variant="info">{{title}}</b-button>
    </b-card-header>
    <b-collapse :id="id" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <b-card-text>{{text}}</b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: 'post',
  props: ['id', 'title', 'text']
}
</script>
