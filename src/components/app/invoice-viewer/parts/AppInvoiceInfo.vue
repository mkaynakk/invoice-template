<template>
  <div class="text-sm w-full flex">
    <table class="min-w-full vertical-table">
      <tr>
        <th>Özelleştirme No:</th>
        <td>{{ data.customizationNo }}</td>
      </tr>
      <tr>
        <th>Fatura Tipi:</th>
        <td>{{ data.type }}</td>
      </tr>
      <tr>
        <th>Fatura Tarihi:</th>
        <td>{{ data.invoiceDate }}</td>
      </tr>
      <tr>
        <th>Düzenleme Tarihi:</th>
        <td>{{ data.updatedDate }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "AppInvoiceInfo",
  props: {
    data: {
      required: false,
      type: Object,
    },
  },
};
</script>
