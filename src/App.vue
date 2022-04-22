<template>
  <div id="app">
    <add-car @submit="addCar"/>
    <div>
      <label>Filter</label>
      <input type="text" v-model="filter"/>
    </div>
    <div>
      <button @click="removeCar">Usun</button>
    </div>
    <cars-table 
      :cars="filteredCars"
      :selected-car-id="selectedCarId"
      @select="selectCar"
    />
  </div>
</template>

<script>
import AddCar from './components/AddCar';
import CarsTable from './components/CarsTable';

export default {
  name: 'App',
  components: {
    AddCar,
    CarsTable,
  },
  data() {
    return {
      filter: '',
      cars: [],
      selectedCarId: null,
    }
  },
  mounted() {
    this.cars = JSON.parse(localStorage.getItem('cars')) || [];
  },
  computed: {
    filteredCars() {
      if (this.filter=='') {
       return [...this.cars];
      }
      return this.cars.filter((item)=>item.brand.includes(this.filter) || item.model.includes(this.filter));
    }
  },
  methods: {
    addCar(car) {
      this.cars.push(car);
      localStorage.setItem('cars', JSON.stringify(this.cars));
    },
    selectCar(carId) {
      this.selectedCarId = carId;
    },
    removeCar() {
      this.cars = this.cars.filter((car) => {
        return car.id != this.selectedCarId;
      });
      localStorage.setItem('cars', JSON.stringify(this.cars));
    }
  }
}
</script>

<style>
  .selected {
    background-color:blue;
  }
</style>
