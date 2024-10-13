<template>
  <BaseModal
    title="Fatura Önizleme"
    modal-class="z-50"
    body-class="max-h-[calc(100vh_-_210px)]"
    v-model="showModal"
  >
    <template #body>
      <div class="flex flex-col gap-10">
        <div class="flex gap-10 flex-row">
          <app-invoice-address />

          <app-invoice-logo />
        </div>

        <div class="flex gap-10 flex-row">
          <app-customer-info :data="data" />

          <app-invoice-info :data="data" />
        </div>

        <div>
          <app-invoice-table :data="data" class="mb-3" />

          <app-invoice-total />
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "@components/base/BaseModal.vue";
import AppInvoiceAddress from "@components/app/invoice-viewer/parts/AppInvoiceAddress.vue";
import AppInvoiceLogo from "@components/app/invoice-viewer/parts/AppInvoiceLogo.vue";
import AppCustomerInfo from "@components/app/invoice-viewer/parts/AppCustomerInfo.vue";
import AppInvoiceInfo from "@components/app/invoice-viewer/parts/AppInvoiceInfo.vue";
import AppInvoiceTable from "@components/app/invoice-viewer/parts/AppInvoiceTable.vue";
import AppInvoiceTotal from "@components/app/invoice-viewer/parts/AppInvoiceTotal.vue";

export default {
  name: "AppInvoiceViewerModal",
  components: {
    AppInvoiceTotal,
    AppInvoiceTable,
    AppInvoiceInfo,
    AppCustomerInfo,
    AppInvoiceLogo,
    AppInvoiceAddress,
    BaseModal,
  },
  props: {
    value: {
      required: true,
      type: Boolean,
    },
    data: {
      required: true,
      type: Object,
    },
  },
  computed: {
    showModal: {
      get() {
        return this.value;
      },
      set(nV) {
        this.$emit("input", nV);
      },
    },
  },
};
</script>
