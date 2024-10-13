<template>
  <div class="mt-8 flow-root">
    <app-invoice-viewer-modal
      :data="selectedViewInvoice"
      v-model="showReviewModal"
    />

    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
              >
                Fatura Kodu
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Firma Unvanı
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Oluşturan
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Fatura Tarihi
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Oluşturulma Tarihi
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Güncellenme Tarihi
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Vade Tarihi
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Durum
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
              >
                Önizleme
              </th>
              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span class="sr-only">Yapılandır</span>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="(invoice, index) in invoiceList" :key="index">
              <td
                class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
              >
                {{ invoice.uuid }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {{ invoice.firmTitle }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {{ invoice.createdBy }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {{ invoice.invoiceDate }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {{ invoice.createdDate }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {{ invoice.updatedDate }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <span class="flex items-center gap-1">
                  <base-tooltip
                    :text="expireWarning"
                    v-if="isWarningExpireDate(invoice)"
                  />
                  {{ invoice.expireDate }}
                </span>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <base-badge
                  v-if="invoice.status"
                  :icon="getStatusTheme(invoice.status).icon"
                  :theme="getStatusTheme(invoice.status).theme"
                  :text="getStatusTheme(invoice.status).text"
                />
              </td>
              <td
                class="text-center whitespace-nowrap px-3 py-4 text-sm text-gray-500"
              >
                <base-icon
                  @click="viewInvoice(invoice)"
                  class="cursor-pointer hover:text-primary icofont-eye-open text-lg"
                />
              </td>
              <td
                class="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500"
              >
                <base-icon-animation-button
                  text="Yapılandır"
                  @click="setModalData(invoice.uuid)"
                  class="btn-animation btn-config"
                  icon-class="icofont-ui-settings"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIconAnimationButton from "@components/base/BaseIconAnimationButton.vue";
import BaseIconButton from "@components/base/BaseIconButton.vue";

import { mapActions, mapState, mapWritableState } from "pinia";

import { useInvoiceStore } from "@plugins/pinia/stores/invoice";
import BaseIcon from "@components/base/BaseIcon.vue";
import AppInvoiceViewerModal from "@components/app/invoice-viewer/AppInvoiceViewerModal.vue";
import BaseBadge from "@components/base/BaseBadge.vue";
import BaseTooltip from "@components/base/BaseTooltip.vue";

export default {
  name: "AppInvoiceList",
  data() {
    return {
      expireWarning: "Fatura vade tarihi geçmiştir!",
    };
  },
  components: {
    BaseTooltip,
    BaseBadge,
    AppInvoiceViewerModal,
    BaseIcon,
    BaseIconButton,
    BaseIconAnimationButton,
  },
  watch: {
    showReviewModal(nV) {
      if (!nV) this.selectedViewInvoice = {};
    },
  },
  computed: {
    ...mapState(useInvoiceStore, ["invoiceList"]),
    ...mapWritableState(useInvoiceStore, [
      "showReviewModal",
      "selectedViewInvoice",
    ]),
  },
  methods: {
    ...mapActions(useInvoiceStore, [
      "setModalData",
      "getStatusTheme",
      "isWarningExpireDate",
    ]),
    viewInvoice(invoice) {
      this.showReviewModal = !this.showReviewModal;
      this.selectedViewInvoice = invoice;
    },
  },
};
</script>
