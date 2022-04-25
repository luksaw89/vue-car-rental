<template>
  <div class="main">
    <button @click="goToCarPage">Cars</button>
    <button @click="goToClientPage">Client</button>
    <car-page v-if="page=='cars'"/>
    <client-page v-if="page=='clients'"/>
  </div>
</template>

<script>
import CarPage from './components/CarPage';
import ClientPage from './components/ClientPage';

export default {
  name: 'App',
  components: {
    CarPage,
    ClientPage,
  },
  data() {
    return {
      page: 'cars',
    };
  },
  methods: {
    goToCarPage() {
      this.page='cars';
    },
    goToClientPage() {
      this.page='clients';
    }
  }
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
