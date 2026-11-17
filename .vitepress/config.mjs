import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/my-site/',
  title: "Персональная страничка в бескрайней сети Интернет",
  description: "Личный сайт и портфолио Алексея Смелова",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Обо мне', link: '/about' },
      { text: 'Резюме', link: '/cv' }
    ],

       socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
