<template>

</template>

<script>
export default {
  created() {
    const analytics = document.createElement('script');
    analytics.setAttribute('src', 'https://plausible.io/js/plausible.js');
    analytics.async = true;
    analytics.defer = true;
    analytics.setAttribute('data-domain', 'jellisonphoto.com');

    document.head.appendChild(analytics);
  }
};
</script>

<style>

</style>