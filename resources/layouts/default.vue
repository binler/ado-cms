<template>
  <div>
    <my-nav/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~components/Footer.vue'
import MyNav from '~components/Nav.vue'

export default {
  components: {
    MyFooter, MyNav
  }
}
</script>