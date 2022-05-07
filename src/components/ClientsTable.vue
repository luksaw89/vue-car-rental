<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Last name</th>
      <th>Company name</th>
      <th>Discount</th>
      <th>Date added</th>
    </tr>
    <tbody>
      <tr
        v-for="client in clients" 
        :key="client.id"
        @click="$emit('select', client.id)"
        :class="{selected: selectedClientId == client.id}"
      >
        <td>{{ client.firstName }}</td>
        <td>{{ client.lastName }}</td>
        <td>{{ client.companyName }}</td>
        <td>{{ client.isDiscount }}</td>
        <td>{{ (new Date(client.id)).toLocaleString() }}</td>
      </tr>
    </tbody>
  </table>  
</template>

<script>
export default {
  name: 'ClientsTable',
  props: [
    'clients',
    'selectedClientId',
  ],
}
</script>

<style>
  table {
    margin-top: 10px;
  }
  th, td {
    border-bottom: 1px solid #ddd;
  } 
  tr:hover {
    background-color: #ADB0B8;
  }
</style>