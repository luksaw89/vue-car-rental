<template>
  <div>
    <div>{{ car.brand }}</div>
    <div>{{ car.model }}</div>
    <div>{{ car.plateNo }}</div>
    <div>{{ car.price }}</div>
  </div>
</template>

<script>
export default {
  name: 'CarPage',
  data() {
    return {
      car: null,
    }
  },
  created() {
    const cars = JSON.parse(localStorage.getItem('cars')) || [];
    this.car = cars.find((item) => item.id == this.$route.params.id);
  }
};
</script>