<template>
  <section class="main-section">
    <app-panel-header />

    <main class="flex-grow py-4">
      <div class="container xl:px-0 px-3 mx-auto">
        <slot />
      </div>
    </main>

    <app-panel-footer />
  </section>
</template>
<script>
import AppPanelHeader from "@components/app/AppPanelHeader.vue";
import AppPanelFooter from "@components/app/AppPanelFooter.vue";

export default {
  name: "AppLayout",
  components: { AppPanelHeader, AppPanelFooter },
};
</script>
