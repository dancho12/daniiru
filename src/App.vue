<template>
  <!-- <header>
    <span>{{ $t('hello') }}</span>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>

<script>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
// import { useI18n } from 'vue-i18n'
import i18n from "./i18n"
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {


    // const { t } = useI18n()

    // function change_locale() {
    //   localStorage.setItem('locale', 'ru');
    //   i18n.global.locale.value = 'en'

    // }
    return {}
  }
})
</script>

<style scoped></style>
