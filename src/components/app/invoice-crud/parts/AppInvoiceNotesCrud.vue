<template>
  <div class="space-y-8">
    <base-multi-inputs
        firstPlaceholder="Not Başlığı"
        lastPlaceholder="Açıklama"
        :firstId="note.titleId"
        :lastId="note.valueId"
        :first-input.sync="modalForm.notes[key].title"
        :last-input.sync="modalForm.notes[key].value"
        v-for="(note, key) in modalForm.notes"
        :key="key"
    >
      <div class="text-end">
        <base-icon-button icon-class="icofont-ui-delete" text="Notu Sil" @click="deleteLine(key, 'notes')" class="btn-danger mt-2" />
      </div>
    </base-multi-inputs>

    <div class="text-end">
      <base-icon-button @click="addLine('countComment', 'notes')" class="btn-success" text="Not Ekle" icon-class="icofont-plus text-sm" />
    </div>
  </div>
</template>
<script>
import {mapActions, mapWritableState} from "pinia"

import { useInvoiceStore } from "@plugins/pinia/stores/invoice"

import BaseIconButton  from "@components/base/BaseIconButton.vue"
import BaseMultiInputs from "@components/base/BaseMultiInputs.vue"

export default {
  name: "AppInvoiceNotesCrud",
  components: { BaseMultiInputs, BaseIconButton },
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