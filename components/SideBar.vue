<template>
  <nav class="navbar navbar-effect">
    <!-- will be icon -->
    <div class="flex flex-col gap-4">
      <img
        class="max-w-full w-16"
        src="~/assets/img/logo.svg"
        alt="sembari kerja logo"
      />
      <a class="break-words" href="#">.sembarikerja</a>
      <ul class="gap-4 flex flex-col">
        <li
          v-for="link of tocs"
          :key="link.id"
          class="text-grey-500 font-sans text-b2"
        >
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </div>
    <footer>
      <span class="text-caption">{{ new Date().getFullYear() }}</span>
    </footer>
  </nav>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    tocs: {
      type: Array,
      default: () => {}
    }
  }
}
</script>

<style scoped>
a.nuxt-link-exact-active {
  @apply font-bold text-blue-500;
}
a.nuxt-link-active {
  @apply font-bold text-blue-500;
}
</style>
