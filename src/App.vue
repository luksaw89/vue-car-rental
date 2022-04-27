<template>
  <div class="main">
    <router-link to="/">Cars</router-link>
    <router-link to="/clients">Clients</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  body {
    background-color: #f8f8f8;
  }
  .main {
    margin-left: auto;
    margin-right: auto;
    background-color: #ffffff;
    max-width: 600px;
    border: 1px solid #ccc;
    padding: 20px;
  }
</style>
