<template>
  <div class="min-h-screen flex">
    <BlobAnimation />
    <SideBar :tocs="theContent.toc" />
    <article class="p-4 md:pt-8 overflow-hidden w-full">
      <p class="text-b2 text-grey-500">
        Last updated at: {{ formatDate(theContent.updatedAt) }}
      </p>
      <nuxt-content :document="theContent" />
    </article>
  </div>
</template>

<script>
import BlobAnimation from '~/components/BlobAnimation.vue'

export default {
  name: 'IndexPage',
  components: { BlobAnimation },
  layout: 'default',
  async asyncData({ $content }) {
    const theContent = await $content('index').fetch()
    return { theContent }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
