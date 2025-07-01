/** @type {import('tailwindcss').Config} */
export default {
  "content": [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "primary": "#4CAF50",
        "secondary": "#8BC34A",
        "accent": "#FFEB3B",
        "background": "#F5F5F5",
        "text": "#212121",
        "success": "#4CAF50",
        "warning": "#F44336"
      },
      "fontFamily": {
        "sans": [
          "Inter",
          "system-ui",
          "sans-serif"
        ]
      }
    }
  },
  "plugins": [
    "@tailwindcss/typography"
  ]
}