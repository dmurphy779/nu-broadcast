import AuthLogo from './extensions/login-logo.png';
import MenuLogo from './extensions/menu-logo.png';

export default {
  config: {
    auth: {
      logo: AuthLogo
    },
    menu: {
      logo: MenuLogo
    },
    translations: {
      en: {
        "Auth.form.welcome.title" : "Jet Broadcast",
        "Auth.form.welcome.subtitle": "Log in to your account",
        "app.components.LeftMenu.navbrand.title": "Jet Broadcast Dashboard",
      },
    },
    locales: [
      // 'ar',
      'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap() {
  },
};
