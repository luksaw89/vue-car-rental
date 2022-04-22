<template>
  <table>
    <tr>
      <th>brand</th>
      <th>model</th>
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
  ]
}
</script>