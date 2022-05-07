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
      <button @click="openCarDetails">Open</button>
      <button @click="removeCar">Delete</button>
      <button @click="showModal">Add Car</button>
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
