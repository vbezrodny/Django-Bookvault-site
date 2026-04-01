module.exports = {
  content: [
    // Убедитесь, что пути ведут к вашим шаблонам Django
    "./templates/**/*.html",         // Все HTML-файлы
    "./**/templates/**/*.html",      // Глубокий поиск
    "./static/js/**/*.js",           // JS-файлы (если используете Vue)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}