<template>
  <LoadingVue
    :active="isLoading"
    :loader="'bars'"
    :color="'#6c584c'"
    :width="70"
    :height="70"
    :opacity="0.7"
  ></LoadingVue>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    }
  }
}
</script>
