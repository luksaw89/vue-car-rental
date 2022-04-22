<template>
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
</template>

<script>
  export default {
    name: 'AddCar',
    data() {
      return {
        brand: '',
        model: '',
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
        this.brand='';
        this.model='';
        this.$emit('submit', newCar);
      },
    }
  }
</script>