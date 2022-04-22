<template>
  <div 
    v-if="isOpen"
    class="backdrop"
  >
    <div class="modal">
      <h3>Add car</h3>
      <div class="field">
        <label>Brand</label>
        <input type="text" v-model="brand"/>
      </div>
      <div class="field">
        <label>Model</label>
        <input type="text" v-model="model"/>
      </div>
      <div class="buttons">
        <button @click="addCar">Save</button>
        <button @click="close">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddCar',
    props: ['isOpen'],
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
        this.clear();
        this.$emit('submit', newCar);
        this.close();
      },
      close() {
        this.$emit('close');
        this.clear();
      },
      clear() {
        this.brand='';
        this.model='';
      }
    }
  }
</script>

<style scoped>
  h3 {
    margin-top: 0px;
  }
  .field {
    margin-top: 10px;
  }
  label {
    display: inline-block;
    width: 50px; 
  }
  .buttons {
    margin-top: 20px;
  }
  button {
    margin-right: 5px;
  }
  .backdrop {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .modal {
    margin-left: auto;
    margin-right: auto;
    margin-top: 30%;
    padding: 20px;
    max-width: 300px;
    background-color: #fff;
    border: 1px solid #ccc; 
    border-radius: 5px;
  }
</style>
