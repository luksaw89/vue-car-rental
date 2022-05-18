<template>
  <div>
    <header>
        <router-link to="/">Cars</router-link>
        <router-link to="/clients">Clients</router-link>
    </header>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  body {
    background-color: #fafafa;
    font-family: sans-serif;
  }
  header {
    display: flex;
    justify-content: left;
    font-size: 16px;
    background-color: #848DA1;
    padding: 20px;
  }
  .main {
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    max-width: 600px;
    border: 1px solid #ccc;
    padding: 20px;
  }
</style>
