<template>
  <div class="space-y-8">
    <div class="flex gap-3">
      <base-label-input class="w-full" id="invoice_item" label="Mal Hizmet" v-model="modalForm.invoiceItem" />
      <base-label-input class="w-full" id="quantity" label="Miktar" v-model="modalForm.quantity" />
    </div>

    <div class="flex gap-3">
      <base-label-input class="w-full" id="quantity_price" label="Birim Fiyat" v-model="modalForm.quantityPrice" />
      <base-label-input class="w-full" id="tax_rate" label="KDV Oranı" v-model="modalForm.tax_rate" />
    </div>

    <base-label-input id="total" label="Tutar" v-model="modalForm.total" />

    <base-multi-inputs
        firstPlaceholder="Tablo Satır Başlığı"
        lastPlaceholder="Tablo Satır Açıklaması"
        :firstId="input.titleId"
        :lastId="input.valueId"
        :first-input.sync="modalForm.rows[key].title"
        :last-input.sync="modalForm.rows[key].value"
        v-for="(input, key) in modalForm.rows"
        :key="key"
    >
      <div class="text-end">
        <base-icon-button icon-class="icofont-ui-delete" text="Satırı Sil" @click="deleteLine(key, 'rows')" class="btn-danger mt-2" />
      </div>
    </base-multi-inputs>

    <div class="text-end">
      <base-icon-button @click="addLine('countRow', 'rows')" class="btn-success" text="Yeni Satır Ekle" icon-class="icofont-plus text-sm" />
    </div>
  </div>
</template>
<script>
import BaseLabelInput  from "@components/base/BaseLabelInput.vue"
import BaseIconButton  from "@components/base/BaseIconButton.vue"
import BaseMultiInputs from "@components/base/BaseMultiInputs.vue"

import {mapActions, mapWritableState} from "pinia"

import { useInvoiceStore } from "@plugins/pinia/stores/invoice"

export default {
  name: "AppInvoiceExpensesCrud",
  components: { BaseMultiInputs, BaseIconButton, BaseLabelInput },
  computed: {
    ...mapWritableState(useInvoiceStore, ['modalForm'])
  },
  methods: {
    ...mapActions(useInvoiceStore, [
      'deleteLine',
      'addLine',
    ])
  }
}
</script>