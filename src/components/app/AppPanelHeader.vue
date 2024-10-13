<template>
  <header class="w-screen bg-white shadow-md">
    <nav
      class="mx-auto grid grid-cols-3 container items-center py-2 lg:px-9 xl:px-0"
      aria-label="Global"
    >
      <div class="flex items-center gap-x-12 justify-self-start">
        <a href="/" class="-m-1.5 p-1.5 shrink-0">
          <img
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600"
            alt=""
            class="h-8 w-auto"
          />
        </a>
      </div>
      <div class="justify-self-center">
        <span class="block uppercase text-2xl font-extrabold">Faturalar</span>
      </div>
      <div class="flex gap-x-5 justify-self-end items-center">
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            class="h-6 w-6"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
        <span class="text-small">John Doe</span>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppPanelHeader",
};
</script>
