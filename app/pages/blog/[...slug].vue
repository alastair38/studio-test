<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData('blog-' + route.path, () => {
  return queryCollection('blog').path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  });
}
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
