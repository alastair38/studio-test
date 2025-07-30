<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('page')
    .path('/page' + route.path)
    .first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Nothing to be found',
    fatal: true,
  });
}
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
