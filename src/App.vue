<template>
  <div id="app">
    <div class="addSection">
      <h3>Dodaj samochód</h3>
      <div>
        <label>Brand</label>
        <input type="text" v-model="brand"/>
      </div>
      <div>
        <label>Model</label>
        <input type="text" v-model="model"/>
      </div>
      <button @click="addCar">Zatwierdz</button>
    </div>
    <div>
      <label>Filter</label>
      <input type="text" v-model="filter"/>
    </div>
    <div>
      <button @click="removeCar">Usun</button>
    </div>
    <table>
      <tr>
        <th>brand</th>
        <th>model</th>
      </tr>
      <tbody>
        <tr
          v-for="car in filteredCars" 
          :key="car.id"
          @click="selectCar(car.id)"
          :class="{selected: selectedCarId == car.id}"
        >
          <td>{{ car.brand }}</td>
          <td>{{ car.model }}</td>
          <td>{{ (new Date(car.id)).toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      brand: '',
      model: '',
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
    addCar() {
      const newCar = {
        id: Date.now(),
        brand: this.brand,
        model: this.model
      };
      if (this.brand=="") {
        alert("Marka nie moze byc pusta");
        return;
      }
      if (this.model=="") {
        alert("Model nie moze byc pusty");
        return;
      }
      this.cars.push(newCar);
      this.brand='';
      this.model='';
      localStorage.setItem('cars', JSON.stringify(this.cars));
    },
    selectCar(carId) {
      this.selectedCarId = carId;
    },
    removeCar() {
      this.cars = this.cars.filter((car) => {
        return car.id != this.selectedCarId;
      });
    }
  }
}
</script>

<style>
  .selected {
    background-color:blue;
  }
</style>
