<template>
  <table>
    <tr>
      <th>Brand</th>
      <th>Model</th>
      <th>PlateNo</th>
      <th>Price</th>
      <th>Added</th>
    </tr>
    <tbody>
      <tr
        v-for="car in cars" 
        :key="car.id"
        @click="$emit('select', car.id)"
        :class="{selected: selectedCarId == car.id}"
      >
        <td>{{ car.brand }}</td>
        <td>{{ car.model }}</td>
        <td>{{ car.plateNo }}</td>
        <td>{{ car.price }}</td>
        <td>{{ (new Date(car.id)).toLocaleString() }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: 'CarsTable',
  props: [
    'cars',
    'selectedCarId',
  ],
  // beforeCreate() {
  //   console.log('beforeCreate');
  // },
  // created() {
  //   console.log('created');
  // },
  // beforeMount() {
  //   console.log('beforeMount');
  // },
  // mounted() {
  //   console.log('mounted');
  // },
  // beforeUpdate() {
  //   console.log('beforeUpdate');
  // },
  // updated() {
  //   console.log('updated');
  // },
  // beforeDestroy() {
  //   console.log('beforeDestroy');
  // },
  // destroyed() {
  //   console.log('destroyed');
  // },
}
</script>