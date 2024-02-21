<template>
  <main :class="lang">
    <div class="content-card h-flex-xl v-flex-m">
      <div class="langs h-flex">
        <span @click="change_locale('ja')">日本語</span>
        <span @click="change_locale('en')">English</span>
        <span @click="change_locale('ru')">Русский</span>
        <DarkLightMode />
      </div>
      <div class="profile">
        <div class="avatar"></div>
        <div class="profile-info">
          <span class="name">{{ $t('profile.name') }}</span>
          <span class="occupation">{{ $t('profile.occupation') }}</span>

          <h2>{{ $t('profile.aboutMe') }}</h2>
          <p v-html="$t('profile.aboutMeText')"></p>
        </div>

      </div>
      <div class="profile-info-mob v-flex-xl">
        <h2>{{ $t('profile.aboutMe') }}</h2>
        <p v-html="$t('profile.aboutMeText')"></p>
      </div>
    </div>
    <div class="content-card v-flex padding-m">
      <h2>{{ $t('titles.resume') }}</h2>
      <div class="resume-cards">
        <div class="resume-card">
          <h3>{{ $t('resume.workExperience.title') }}</h3>
          <div class="v-flex gap-10">
            <div class="h-flex year-elem">
              <span>2020</span>
              <SVGIcon :name="'work'" :color="'var(--resume-icons)'" :size="30" />
              <div class="v-flex">
                <span>Electro-skuter.ru</span>
                <span class="occupation">{{ $t('resume.workExperience.2020') }}</span>
              </div>
            </div>
            <div class="h-flex year-elem">
              <span>2023</span>
              <SVGIcon :name="'work'" :color="'var(--resume-icons)'" :size="30" />
              <div class="v-flex">
                <span>Apurichomi Inc.</span>
                <span class="occupation">{{ $t('resume.workExperience.2023') }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="resume-card">
          <h3>{{ $t('resume.skills') }}</h3>
          <div class="h-flex skills-elem">
            <span>CSS</span>
            <span>HTML</span>
            <span>PHP</span>
            <span>JAVA</span>
            <span>Vue.js</span>
            <span>SQL</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>Linux</span>
            <span>Bash</span>
            <span>Webflow</span>
            <span>Flutter</span>
          </div>
        </div>
        <div class="resume-card">
          <h3>{{ $t('resume.education.title') }}</h3>
          <div class="v-flex gap-10">
            <div class="h-flex year-elem">
              <span>2019</span>
              <SVGIcon :name="'edu'" :color="'var(--resume-icons)'" :size="30" />
              <div class="v-flex">
                <span>{{ $t('resume.education.mirea.title') }}</span>
                <span class="occupation">{{ $t('resume.education.mirea.course') }}</span>
              </div>
            </div>
            <div class="h-flex year-elem">
              <span>2025</span>
              <SVGIcon :name="'edu'" :color="'var(--resume-icons)'" :size="30" />
              <div class="v-flex">
                <span>{{ $t('resume.education.arts.title') }}</span>
                <span class="occupation">{{ $t('resume.education.arts.course') }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="resume-card">
          <h3>{{ $t('resume.languages.title') }}</h3>
          <div class="v-flex langs-elem">
            <span>{{ $t('resume.languages.ja') }}</span>
            <span>{{ $t('resume.languages.en') }}</span>
            <span>{{ $t('resume.languages.ru') }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-card v-flex padding-m">
      <h2>{{ $t('titles.portfolio') }}</h2>
      <div class="h-flex-xl portfolio-cards">
        <div class="portfolio-card v-flex">
          <a href="https://beta.jardic-neo.ru" target="_blank" class="img"><img src="@/assets/pics/jardic.png"
              alt="jardic"></a>
          <div class="info">
            <a href="https://beta.jardic-neo.ru" target="_blank">jardic-neo.ru</a>
            <p v-html="$t('portfolio.jardic')"></p>
          </div>
        </div>
        <div class="portfolio-card v-flex">
          <a href="https://acrnm.ru/" target="_blank" class="img"><img src="@/assets/pics/og-image.png" alt="acrnm"></a>
          <div class="info">
            <a href="https://acrnm.ru/" target="_blank">acrnm.ru</a>
            <p v-html="$t('portfolio.acrnm')"></p>
          </div>
        </div>
        <div class="portfolio-card v-flex">
          <a href="https://github.com/dancho12" target="_blank" class="img"><img src="@/assets/pics/GitHub.png"
              alt="github"></a>
          <div class="info">
            <a href="https://github.com/dancho12" target="_blank">Git Hub</a>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <span>{{ $t('profile.contact') }}</span>
        <div class="social-links">
          <a href="https://www.instagram.com/daniirukov/" target="_blank">
            <SVGIcon :name="'inst'" :size="40" />
          </a>
          <a href="https://www.linkedin.com/in/daniiru" target="_blank">
            <SVGIcon :name="'in'" :size="40" />
          </a>
          <a href="https://t.me/daniirukov" target="_blank">
            <SVGIcon :name="'telegram'" :size="40" />
          </a>
        </div>
        <a href="mailto:dancho1282@gmail.com">dancho1282@gmail.com</a>
      </div>

    </footer>
  </main>
</template>

<script>

import i18n from "@/i18n"
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {

    console.log(i18n.global.locale.value);

    const lang = ref(i18n.global.locale.value);

    function change_locale(locale) {
      localStorage.setItem('locale', locale);
      i18n.global.locale.value = locale

      lang.value = locale;

    }
    return { change_locale, lang }
  }
})
</script>

<style scoped></style>
