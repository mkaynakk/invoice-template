<template>
  <div class="space-y-8">
    <div class="flex gap-3">
      <div class="w-full">
        <label for="status" class="block text-sm font-medium text-gray-900">Fatura Durumu</label>
        <select id="status" v-model="modalForm.status" name="status" style="height: 45px;" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
          <option :value="undefined" disabled>Fatura Durumu Seçiniz</option>
          <option value="0">Ödenmemiş</option>
          <option value="1">Ödenmiş</option>
          <option value="2">Gecikmiş</option>
        </select>
      </div>
      <base-date-picker label="Vade Tarihi" v-model="modalForm.expireDate" />
    </div>
  </div>
</template>
<script>
import { mapWritableState } from "pinia"

import { useInvoiceStore } from "@plugins/pinia/stores/invoice"

import BaseDatePicker from "@components/base/BaseDatePicker.vue"

export default {
  name: "AppInvoiceStatusCrud",
  components: { BaseDatePicker },
  computed: {
    ...mapWritableState(useInvoiceStore, ['modalForm'])
  }
}
</script>