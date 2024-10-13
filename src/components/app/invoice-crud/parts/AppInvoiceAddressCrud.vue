<template>
  <div class="space-y-8">
    <div class="flex gap-3">
      <base-label-input class="w-full" id="firm_title" label="İşletme Unvanı" v-model="modalForm.firmTitle" />
      <base-label-input class="w-full" id="address" label="İlçe / Şehir" v-model="modalForm.address" />
    </div>

    <div class="flex gap-3">
      <base-label-input class="w-full" id="phone" label="Telefon" v-model="modalForm.phone" />
      <base-label-input class="w-full" id="email" label="E-posta" v-model="modalForm.email" />
    </div>

    <div class="flex gap-3">
      <base-label-input class="w-full" id="tax_office" label="Vergi Dairesi" v-model="modalForm.taxOffice" />
      <base-label-input class="w-full" id="identity_no" label="VKN" v-model="modalForm.identityNo" />
    </div>
  </div>
</template>
<script>
import BaseLabelInput from "@components/base/BaseLabelInput.vue"

import { mapWritableState } from "pinia"

import { useInvoiceStore } from "@plugins/pinia/stores/invoice"

export default {
  name: "AppInvoiceAddressCrud",
  components: { BaseLabelInput },
  computed: {
    ...mapWritableState(useInvoiceStore, ['modalForm'])
  }
}
</script>