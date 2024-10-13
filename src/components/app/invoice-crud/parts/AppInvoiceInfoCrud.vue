<template>
  <div class="space-y-8">
    <div class="flex gap-3">
      <base-label-input
        class="w-full"
        id="customization_no"
        label="Özelleştirme No"
        v-model="modalForm.customizationNo"
      />
      <base-label-input
        class="w-full"
        id="type"
        label="Fatura Tipi"
        v-model="modalForm.type"
      />
    </div>
    <div class="flex gap-3">
      <base-date-picker label="Fatura Tarihi" v-model="modalForm.invoiceDate" />
      <base-date-picker
        label="Düzenleme Tarihi"
        v-model="modalForm.updatedDate"
      />
    </div>
  </div>
</template>

<script>
import BaseLabelInput from "@components/base/BaseLabelInput.vue";
import BaseDatePicker from "@components/base/BaseDatePicker.vue";

import { mapWritableState } from "pinia";

import { useInvoiceStore } from "@plugins/pinia/stores/invoice";

export default {
  name: "AppInvoiceInfoCrud",
  components: { BaseDatePicker, BaseLabelInput },
  computed: {
    ...mapWritableState(useInvoiceStore, ["modalForm"]),
  },
};
</script>
