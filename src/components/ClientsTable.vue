<template>
  <table id="clientsTable" class="table table-hover">
    <thead>
      <tr>
        <th @click="sortTable(0)">Name</th>
        <th @click="sortTable(1)">Last name</th>
        <th @click="sortTable(2)">Company name</th>
        <th @click="sortTable(3)">Discount</th>
        <th @click="sortTable(4)">Date added</th>
      </tr>
    </thead>
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
  methods: {
    sortTable(n) {
      var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
      table = document.getElementById("clientsTable");
      switching = true;
      dir = "asc";
      while(switching) {
        switching = false;
        rows = table.rows;
        for (i=1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i+1].getElementsByTagName("TD")[n];
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          switchcount ++;
        } else {
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
      }
    }
  }
}
</script>

<style>
  thead:hover {
    pointer-events: auto;
  }
  /* table {
    margin-top: 10px;
  }
  th, td {
    border-bottom: 1px solid #ddd;
  } 
  tr:hover {
    background-color: #ADB0B8;
  } */
</style>