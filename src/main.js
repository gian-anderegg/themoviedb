import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createI18n } from 'vue-i18n';

// Import translation files
import de from './locales/de.js';
import en from './locales/en.js';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'de',
  messages: {
    de, // Assign the imported translation file to the 'de' locale
    en, // Assign the imported translation file to the 'en' locale
  },
});

function translate(key) {
  return i18n.global.t(key).toString();
}

const app = createApp(App).use(router).use(i18n);

app.mount('#app');

export { i18n, translate };