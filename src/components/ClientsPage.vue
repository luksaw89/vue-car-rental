<template>
  <div>
    <add-client
      v-model="isOpen"
      :client="clientToEdit"
      @submit="addClient"
    />
    <div class="d-flex">
      <button type="button" class="m-1 btn btn-outline-primary" @click="showModalAdd">ADD</button>
      <button type="button" class="m-1 btn btn-outline-secondary"  @click="showModalEdit">EDIT</button>
      <button type="button" class="m-1 btn btn-outline-danger" @click="removeClient">REMOVE</button>
      <div class="ml-auto p-2">
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
import { fetchClients, addClient, editClient } from '../server';

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
    this.fetchData();
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
    async addClient(client) {
      if(!this.clientToEdit) {
        await addClient(client);
      } else {
        await editClient(client);
      }
      await this.fetchData();
    },
    async fetchData() {
      this.clients = await fetchClients();
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
    },
    // bubblesort(array) {
    //   for (let i = 0; i < array.length - 1; i++) {
    //     for (let j=0; j < array.lenght - 1 - i; j++) {
    //       if (array[j] > array[j+1]) {
    //         [array[j], array[j+1] = [array[j+1], array[j]]]
    //       }
    //     }
    //   }
    //   return array;
    // }

  }
}
</script>

<style>

</style>