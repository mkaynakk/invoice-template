<template>
  <div class="border-y-2 border-gray-300 py-4 text-lg w-full">
    <span class="text-black">{{ data.firmTitle }}</span>

    <ul class="text-sm mt-3 space-y-1">
      <li>
        {{ data.address }}
      </li>
      <li>Tel: {{ data.phone }}</li>
      <li>E-posta: {{ data.email }}</li>
      <li>Vergi Dairesi: {{ data.phone }}</li>
      <li>VKN: {{ data.identityNo }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppCustomerInfo",
  props: {
    data: {
      required: false,
      type: Object,
    },
  },
};
</script>
