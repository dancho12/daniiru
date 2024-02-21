<template>
  <div class="dark-light-mode" :style="switcherBackgroundColor" @click="toggleColorTheme">
    <div class="dark-light-mode__swither" :class="{
      'dark-light-mode__swither--dark': mode === APP_COLOR_THEME_DARK,
      'dark-light-mode__swither--light': mode === APP_COLOR_THEME_LIGHT,
      'dark-light-mode__swither--translate': mode === APP_COLOR_THEME_DARK,
    }" />
  </div>
</template>

<script >
import { defineComponent, ref, computed, onBeforeMount } from 'vue'



const reverseThemeSchema = {
  dark: 'light',
  light: 'dark'
}

export default defineComponent({
  name: 'DarkLightMode',

  setup() {
    onBeforeMount(() => {
      changeColorSchema()
    })

    const APP_COLOR_THEME_DARK = 'dark'
    const APP_COLOR_THEME_LIGHT = 'light'

    const mode = ref(window.localStorage.getItem('appColorTheme') || APP_COLOR_THEME_DARK)
    const switcherBackgroundColor = computed(() => {
      return {
        'background-color': mode.value === APP_COLOR_THEME_DARK ? '#ffffff' : '#373737'
      }
    })

    function toggleColorTheme() {
      mode.value = reverseThemeSchema[mode.value]
      window.localStorage.setItem('appColorTheme', mode.value)

      changeColorSchema()
    }

    function changeColorSchema() {
      if (mode.value === APP_COLOR_THEME_LIGHT) {
        document.documentElement.style.setProperty('--main-text-color', '#2e2e2e')
        document.documentElement.style.setProperty('--main-color', '#2e2e2e')
        document.documentElement.style.setProperty('--background-color', '#ffffff')
        document.documentElement.style.setProperty('--secondary-color', '#f4f4f4')
        document.documentElement.style.setProperty('--gray', '#565656')
        document.documentElement.style.setProperty('--resume-icons', '#565656')
        document.documentElement.style.setProperty('--back-profile', '#f4f4f4')
        document.documentElement.style.setProperty('--back-footer', '#f4f4f4')
      } else {
        document.documentElement.style.setProperty('--main-text-color', '#ffffff')
        document.documentElement.style.setProperty('--main-color', '#373737')
        document.documentElement.style.setProperty('--background-color', '#191919')
        document.documentElement.style.setProperty('--secondary-color', '#1f1f1f')
        document.documentElement.style.setProperty('--gray', '#c5c5c5')
        document.documentElement.style.setProperty('--resume-icons', '#ffffff')
        document.documentElement.style.setProperty('--back-profile', 'radial-gradient(142.91% 87.28% at 75.86% 16.64%, rgb(38, 38, 38) 0%, rgb(31, 31, 31) 100%)')
        document.documentElement.style.setProperty('--back-footer', 'linear-gradient(360deg, #1f1f1f 0%, #222 100%)')
      }
    }

    return {
      mode,
      toggleColorTheme,
      switcherBackgroundColor,
      APP_COLOR_THEME_DARK,
      APP_COLOR_THEME_LIGHT
    }
  }
})
</script>

<style lang="scss">
.dark-light-mode {
  position: relative;
  width: 48px;
  height: 20px;
  border-radius: 100px;
  transition: 200ms;
  padding: 2px;
  cursor: pointer;
}

.dark-light-mode__swither {
  width: 17px;
  height: 17px;
  position: absolute;
  border-radius: 100%;
  background-size: cover;
  transition: 500ms;
  cursor: pointer;

  &--dark {
    background-image: url(@/assets/pics/sun.png);
  }

  &--light {
    background-image: url(@/assets/pics/moon.png);
  }

  &--translate {
    transform: translateX(140%);
  }
}
</style>
