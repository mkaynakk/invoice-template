import Vue from "vue";
import dayjs from "dayjs";
import Swal from "sweetalert2";

export default {
  openModal(mode) {
    this.modalForm =
      mode === "new"
        ? { rows: {}, notes: {} }
        : JSON.parse(JSON.stringify(this.selectedInvoice));
    this.modalChangeStatus();
  },

  deleteLine(key, listKey) {
    Vue.delete(this.modalForm[listKey], key);
  },

  modalChangeStatus() {
    this.showModal = !this.showModal;
  },

  addLine(counterKey, listKey) {
    this[counterKey] = Object.keys(this.modalForm[listKey]).length + 1;

    Vue.set(this.modalForm[listKey], this[counterKey], {
      titleId: listKey + "_title" + this[counterKey],
      valueId: listKey + "_value" + this[counterKey],
    });
  },

  createInvoices() {
    this.modalForm.uuid = "UID" + Date.now();
    this.modalForm.createdBy = "John Doe";
    this.modalForm.createdDate = dayjs(new Date()).format("DD/MM/YYYY");

    Vue.set(this.invoiceList, this.invoiceList.length, this.modalForm);
    this.toast("Fatura Oluşturuldu!");
  },

  updateInvoices() {
    this.modalForm.updatedDate = dayjs(new Date()).format("DD/MM/YYYY");

    const index = this.invoiceList.findIndex(
      (item) => item.uuid === this.modalForm.uuid
    );

    this.invoiceList.splice(index, 1, this.modalForm);

    this.toast("Fatura Güncellendi!");
  },

  toast(title, type = "success") {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: type,
      title: title,
    });
  },

  createOrUpdate() {
    this.modalChangeStatus();
    return this.modalForm.uuid ? this.updateInvoices() : this.createInvoices();
  },

  setModalData(uuid) {
    this.selectedInvoice = JSON.parse(
      JSON.stringify(this.invoiceList.find((item) => item.uuid === uuid))
    );
    this.openModal("edit");
  },

  getStatusTheme(id) {
    let status = "";

    switch (id) {
      case "0":
        status = {
          text: "Ödenmemiş",
          theme: "warning",
          icon: "icofont-warning-alt",
        };
        break;
      case "1":
        status = {
          text: "Ödenmiş",
          theme: "success",
          icon: "icofont-tick-mark",
        };
        break;
      case "2":
        status = {
          text: "Gecikmiş",
          theme: "danger",
          icon: "icofont-clock-time",
        };
        break;
    }

    return status;
  },

  isWarningExpireDate({ expireDate }) {
    if (!expireDate) return false;

    const today = dayjs(new Date()).format();
    const parseDate = expireDate.split("/").reverse();
    const date = dayjs(new Date(parseDate.join(","))).format();

    return dayjs(today).diff(date, "day") > 1;
  },

  openReviewModal() {
    this.showReviewModal = !this.showReviewModal;
    this.selectedViewInvoice = this.modalForm;
  },
};
