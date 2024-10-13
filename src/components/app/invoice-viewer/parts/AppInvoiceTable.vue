<template>
  <table class="min-w-full divide-y divide-gray-300">
    <thead>
      <tr>
        <th
          scope="col"
          class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
        >
          Mal Hizmet
        </th>
        <th
          v-for="(col, key) in data.rows"
          :key="key"
          scope="col"
          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          {{ col.title }}
        </th>
        <th
          scope="col"
          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Miktar
        </th>
        <th
          scope="col"
          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Birim Fiyat
        </th>
        <th
          scope="col"
          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          KDV Oranı
        </th>
        <th
          scope="col"
          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Tutar
        </th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="whitespace-nowrap py-4 pl-4 text-sm text-gray-500">
          {{ data.invoiceItem }}
        </td>
        <td
          v-for="(row, key) in data.rows"
          :key="key"
          class="whitespace-nowrap py-4 pl-4 text-sm text-gray-500"
        >
          {{ row.value }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ data.quantity }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ data.quantityPrice }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ data.tax_rate }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ data.total }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "AppInvoiceTable",
  props: {
    data: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style scoped>
th,
td {
  @apply border-collapse border border-slate-300 text-left p-2;
}
</style>
