<template>
  <div>
    <add-client
      v-model="isOpen"
      :client="clientToEdit"
      @submit="addClient"
    />
    <div class="btn-back">
      <button @click="showModalAdd">ADD</button>
      <button @click="showModalEdit">EDIT</button>
      <button @click="removeClient">REMOVE</button>
      <!-- <button @click="showCorporate">Show</button> -->
      <!-- <button @click="isDiscount">Clients with discounts</button>    -->
      <div class="filtering">
        <input type="text" placeholder="Filter by name" v-model="filter"/>
      </div>
    </div>
    <clients-table
      :clients="filteredClients"
      :selected-client-id="selectedClientId"
      @select="selectClient"
    />
  </div>
</template>

<script>
import AddClient from './AddClient';
import ClientsTable from './ClientsTable';

export default {
  name: 'ClientsPage',
  components: { 
    AddClient,
    ClientsTable,
    },
  data() {
    return {
      filter: '',
      clients: [],
      selectedClientId: null,
      isOpen: false,
      clientToEdit: null,
    }
  },
  mounted() {
    this.clients = JSON.parse(localStorage.getItem('clients')) || [];
  },
  computed: {
    filteredClients() {
      if (this.filter=='') {
       return [...this.clients];
      }
      return this.clients.filter((item)=>item.firstName.includes(this.filter) || item.lastName.includes(this.filter));
    }
  },
  methods: {
    addClient(client) {
      console.log(client, this.clientToEdit);
      if(!this.clientToEdit) {
        this.clients.push(client);       
      } else {
        this.clients = [
          ...this.clients.filter((item) => item.id !== client.id),
          client,
        ];
      }
      localStorage.setItem('clients', JSON.stringify(this.clients));
    },
    selectClient(clientId) {
      this.selectedClientId = clientId;
    },
    removeClient() {
      this.clients = this.clients.filter((client) => {
        return client.id != this.selectedClientId;
      });
      localStorage.setItem('clients', JSON.stringify(this.clients));
    },
    showModalAdd() {
      this.clientToEdit = null;
      this.isOpen=true;
    },
    showModalEdit() {
      this.isOpen=true;
      this.clientToEdit = this.clients.find((item) => item.id == this.selectedClientId);
    }
  }
}
</script>

<style scoped>
  button {
    align-items: center;
    cursor: pointer;
    border-radius: 50px;
    font-size: 12px;
    font-weight: bold;
    padding-inline: 25px;
    padding-block: 10px;
    margin-top: 20px;
    margin-left: 5px;
  }
  .btn-back {
    display: flexbox; 
  }
  button:hover {
    color: #fafafa;
    background-color:#848DA1;
  }
  button:active {
    color: #fafafa;
    background-color:#1F3974;
  }
  .filtering {
    display: inline-block;
    margin-left: 30px;
  }
</style>