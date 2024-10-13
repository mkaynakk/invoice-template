<template>
  <div>
    <base-modal
      :title="getModalTitle"
      v-model="showModal"
      body-class="h-auto min-h-[27rem]"
    >
      <template #body>
        <tabs>
          <tab name="Adres Bilgileri" :selected="true">
            <app-invoice-address-crud />
          </tab>
          <tab name="Fatura Özellikleri">
            <app-invoice-info-crud />
          </tab>

          <tab name="Gider Satırları">
            <app-invoice-expenses-crud />
          </tab>

          <tab name="Fatura Durumları">
            <app-invoice-status-crud />
          </tab>

          <tab name="Notlar">
            <app-invoice-notes-crud />
          </tab>
        </tabs>
      </template>

      <template #footer>
        <base-button
          text="Önizleme"
          class="btn-primary"
          @click="openReviewModal"
        />
        <base-button
          :text="getModalButtonText"
          class="btn-success"
          @click="createOrUpdate"
        />
      </template>
    </base-modal>
  </div>
</template>

<script>
import Tabs from "@components/base/BaseTabs.vue";
import Tab from "@components/base/BaseTab.vue";
import AppInvoiceAddressCrud from "@components/app/invoice-crud/parts/AppInvoiceAddressCrud.vue";
import AppInvoiceInfoCrud from "@components/app/invoice-crud/parts/AppInvoiceInfoCrud.vue";
import AppInvoiceExpensesCrud from "@components/app/invoice-crud/parts/AppInvoiceExpensesCrud.vue";
import AppInvoiceStatusCrud from "@components/app/invoice-crud/parts/AppInvoiceStatusCrud.vue";
import AppInvoiceNotesCrud from "@components/app/invoice-crud/parts/AppInvoiceNotesCrud.vue";
import BaseModal from "@components/base/BaseModal.vue";

import { mapActions, mapState, mapWritableState } from "pinia";

import { useInvoiceStore } from "@plugins/pinia/stores/invoice";

export default {
  name: "AppInvoiceCrudModal",
  components: {
    AppInvoiceNotesCrud,
    AppInvoiceStatusCrud,
    AppInvoiceExpensesCrud,
    AppInvoiceInfoCrud,
    AppInvoiceAddressCrud,
    Tab,
    Tabs,
    BaseModal,
  },
  computed: {
    ...mapWritableState(useInvoiceStore, ["showModal"]),
    ...mapState(useInvoiceStore, ["getModalTitle", "getModalButtonText"]),
  },
  methods: {
    ...mapActions(useInvoiceStore, ["createOrUpdate", "openReviewModal"]),
  },
};
</script>
