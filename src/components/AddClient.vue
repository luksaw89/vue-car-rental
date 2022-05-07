<template>
  <div
    v-if="value"
    class="backdrop"
  >
    <div class="modal">
      <h3>Add Client</h3>
      <div>
        <input type="checkbox" v-model="isCompany">
        <label>Company</label>
      </div>
      <div class="field">
        <label>Company Name</label>
        <input 
          type="text" 
          v-model="companyName"
          :disabled="!isCompany"
        />
      </div>
      <div class="field">
        <label>First Name</label>
        <input type="text" v-model="firstName"/>
      </div>
      <div class="field">
        <label>Last Name</label>
        <input type="text" v-model="lastName"/>
      </div>
      <div class="field">
        <label>Discount (%)</label>
        <select type="number" v-model="isDiscount">
          <option disabled value="">Select discount</option>
          <option>0</option>
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
        </select>
      </div>
      <div class="buttons">
        <button @click="addClient">Save</button>
        <button @click="close">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'AddClient',
  props: [
    'value',
    'client',
  ],
  data() {
    return {
      firstName: '',
      lastName: '',
      companyName: '',
      isDiscount: '',
      isCompany: '',
    }
  },
  watch: {
    value() {
      if(this.value && this.client) {
        this.firstName = this.client.firstName;
        this.lastName = this.client.lastName;
        this.companyName = this.client.companyName;
        this.isDiscount = this.client.isDiscount;
        this.isCompany = this.client.isCompany;
      }
    }
  },
  methods: {
    addClient() {
      const newClient = {
        id: this.client ? this.client.id : Date.now(),
        firstName: this.firstName,
        lastName: this.lastName,
        companyName: this.isCompany ? this.companyName : null,
        isDiscount: this.isDiscount,
      };
      if (this.firstName=="") {
        alert("This field is required");
        return;
      }
      if (this.lastName=="") {
        alert("This field is required");
        return;
      }
      if (this.isCompany && this.companyName=="") {
        alert("Please add company name");
        return;
      }
      this.clear();
        this.$emit('submit', newClient);
        this.close();
      },
      close() {
        this.$emit('input', false);
        this.clear();
      },
      clear() {
        this.firstName='';
        this.lastName='';
        this.companyName='';
        this.isDiscount='';
      }
    }
  }
</script>

<style scoped>
  h3 {
    font-family: sans-serif;
    box-sizing: border-box;
    margin-top: 0px;
  }
  .field {
    font-family: sans-serif;
    width: 300px;
    margin-top: 10px;
    padding: 2px;
  }
  label {
    display: inline-block;
    width: 100px; 
    margin-right: 10px;
  }
  .buttons {
    align-items: center;
    border-radius: 200px;
    padding-inline: 35px;
    padding-block: 12px;
    margin-top: 20px;
    margin-left: 20%;
  }
  button {
    margin-right: 5px;
    width: 35%;
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
    margin-top: 10%;
    padding: 20px 30px;
    max-width: 300px;
    background-color: #fff;
    border: 1px solid #ccc; 
    border-radius: 5px;
  }
</style>