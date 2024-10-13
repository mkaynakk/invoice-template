export default {
  getModalTitle({ modalForm }) {
    return modalForm.uuid
      ? `Fatura Güncelleme (${modalForm.uuid})`
      : "Fatura Oluştur";
  },

  getModalButtonText({ modalForm }) {
    return modalForm.uuid ? "Güncelle" : "Oluştur";
  },
};
