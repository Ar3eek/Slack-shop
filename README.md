# **Vite + VUE + Tailwind CSS boilerplate**
Why Vite? It is a next generation frontend tooling with minimal config preparing to big one Webpack. It also includes HRM for CSS and JS, which speeds up the development process. If you want to know more about Vite go to [official site.](https://vitejs.dev/)

### Minimal requirements
- node version: `>=16`

It is recommend to use `nvm` to switch between node versions for example: `nvm use --lts`

### Development

- Edit all files in `src` folder
- Run development server with command `npm run dev`
- By default dev server runs on `http://localhost:5173/`
- All public assets should be at `public` folder inside `src` folder
- You can split html to pieces using [this plugin.](https://github.com/donnikitos/vite-plugin-html-inject) See example in index.html

#### Use VUEUSE/HEAD
https://github.com/vueuse/head
```vue
<script setup>
  useHead({
    title: "my title of my site",
    meta: [
      {
        "description": "some description"
      }
    ]
  });
</script>

<template>
  ...
</template>
```

#### Use VITE-SSG for signle site rendering - TODO
https://github.com/antfu/vite-ssg

### Build
- Build command `npm run build`
- The above command generates a `dist` folder with all bundled files
- All assets from `public` folder are copied to `dist/assets` folder