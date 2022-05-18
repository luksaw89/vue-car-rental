<template>
  <div>
    <add-car 
      v-model="isOpen"
      @submit="addCar"
    />
    <div>
      <label>Filter</label>
      <input type="text" v-model="filter"/>
    </div>
    <div>
      <b-button @click="openCarDetails" class="m-1">Open</b-button>
      <b-button @click="removeCar" class="m-1 bg-danger">Delete</b-button>
      <b-button @click="showModal" class="m-1">Add Car</b-button>
    </div>
    <cars-table 
      :cars="filteredCars"
      :selected-car-id="selectedCarId"
      @select="selectCar"
    />
  </div>
</template>

<script>
import AddCar from './AddCar';
import CarsTable from './CarsTable';
import { addCar, fetchCars } from '../server';

export default {
  name: 'CarsPage',
  components: {
    AddCar,
    CarsTable,
  },
  data() {
    return {
      filter: '',
      cars: [],
      selectedCarId: null,
      isOpen: false,
    }
  },
  mounted() {
    this.fetchData();
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
    async addCar(car) {
      await addCar(car);
      await this.fetchData();
    },
    async fetchData() {
      this.cars = await fetchCars();
    },
    selectCar(carId) {
      this.selectedCarId = carId;
    },
    removeCar() {
      this.cars = this.cars.filter((car) => {
        return car.id != this.selectedCarId;
      });
      localStorage.setItem('cars', JSON.stringify(this.cars));
    },
    showModal() {
      this.isOpen=true;
    },
    openCarDetails() {
      if(this.selectedCarId) {
        this.$router.push({path: '/cars/' + this.selectedCarId});  
      }
    }
  }
}
</script>

<style>
  .selected {
    background-color:blue;
  }
</style>
