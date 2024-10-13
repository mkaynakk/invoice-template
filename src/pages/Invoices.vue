<template>
  <div class="px-4 sm:px-6 xl:px-0 py-4">
    <app-invoice-crud-modal />
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">
          Faturalar
        </h1>
        <p class="mt-2 text-sm text-gray-700">
          Tüm eklenen faturaların görüntülendiği liste.
        </p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <base-icon-button
          icon-class="icofont-document-folder"
          text="Fatura Oluştur"
          @click="openModal('new')"
          class="btn-success"
        />
      </div>
    </div>
    <app-invoice-list />
  </div>
</template>

<script>
import BaseModal from "@components/base/BaseModal.vue";
import BaseIconButton from "@components/base/BaseIconButton.vue";
import AppInvoiceList from "@components/app/AppInvoiceList.vue";
import AppInvoiceViewerModal from "@components/app/invoice-viewer/AppInvoiceViewerModal.vue";
import AppInvoiceCrudModal from "@components/app/invoice-crud/AppInvoiceCrudModal.vue";

import { mapActions, mapState, mapWritableState } from "pinia";
import { useInvoiceStore } from "@plugins/pinia/stores/invoice";

export default {
  name: "Invoices",
  components: {
    AppInvoiceCrudModal,
    AppInvoiceViewerModal,
    AppInvoiceList,
    BaseIconButton,
    BaseModal,
  },
  computed: {
    ...mapState(useInvoiceStore, ["showModal"]),
    ...mapWritableState(useInvoiceStore, ["modalForm"]),
  },
  methods: {
    ...mapActions(useInvoiceStore, ["openModal"]),
  },
  watch: {
    showModal(nV) {
      if (!nV) this.modalForm = {};
    },
  },
};
</script>
