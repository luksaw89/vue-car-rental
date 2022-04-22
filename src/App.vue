<template>
  <div class="main">
    <div id="app">
      <add-car 
        :is-open="isOpen"
        @submit="addCar"
        @close="hideModal"
      />
      <div>
        <label>Filter</label>
        <input type="text" v-model="filter"/>
      </div>
      <div>
        <button @click="removeCar">Delete</button>
        <button @click="showModal">Add Car</button>
      </div>
      <cars-table 
        :cars="filteredCars"
        :selected-car-id="selectedCarId"
        @select="selectCar"
      />
    </div>
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
      isOpen: false,
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
    },
    showModal() {
      this.isOpen=true;
    },
    hideModal() {
      this.isOpen=false;    
    }
  }
}
</script>

<style>
  .selected {
    background-color:blue;
  }
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
