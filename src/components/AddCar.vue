<template>
  <div 
    v-if="value"
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
      <div class="field">
        <label>Plate number</label>
        <input type="text" v-model="plateNo"/>
      </div>  
      <div class="field">
        <label>Price</label>
        <input type="number" v-model="price"/>
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
    props: ['value'],
    data() {
      return {
        brand: '',
        model: '',
        plateNo: '',
        price: '',
      }
    },
    methods: {
      addCar() {
        const newCar = {
          brand: this.brand,
          model: this.model,
          plateNo: this.plateNo,
          price: this.price,
        };
        if (this.brand=="") {
          alert("Brand cannot be empty");
          return;
        }
        if (this.model=="") {
          alert("Model cannot be empty");
          return;
        }
        if (this.plateNo=="") {
          alert("Plate number cannot be empty");
          return;
        }
        if (this.price=="") {
          alert("Price cannot be empty");
          return;
        }
        this.clear();
        this.$emit('submit', newCar);
        this.close();
      },
      close() {
        this.$emit('input', false);
        this.clear();
      },
      clear() {
        this.brand='';
        this.model='';
        this.plateNo='';
        this.price='';
      }
    }
  }
</script>

<style scoped lang="scss">
  .backdrop {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);

    .modal {
      margin-left: auto;
      margin-right: auto;
      margin-top: 200px;
      padding: 20px;
      max-width: 300px;
      background-color: #fff;
      border: 1px solid #ccc; 
      border-radius: 5px;

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

        button {
          margin-right: 5px;
        }
      }
    }
  }
</style>
