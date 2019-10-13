<template v-slot:items="{ row }">
      <td>{{ row.first_name }}</td>
      <td>{{ row.email }}</td>
      <td>{{ row.age }}</td>
    </template>
    <template v-slot:no-data>
      <span>No data</span>
    </template>


<script>
export default {
  name: 'table_view'
}
</script>

<style scoped>

</style>
