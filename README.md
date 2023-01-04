## tailwind 0 to hero

```console
yarn create vite
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

if we want build css file, we need to compile/build tailwind code

```console
npx tailwindcss-cli build src/index.css -o  public/index.css
```

### mediaquery break points:

mobile first, maximum with is medium on mobile but sm is breakpoint after sm done, maximun width become extra large

```css
<div class="max-w-md sm:max-w-xl"></div>
sm:bg-gray-300  md:bg-green-400 lg:bg-blue-500 xl:bg-red-400 2xl:bg-blue-500
```

### @apply :

we can combose utility in _index.css_

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn {
    @apply;
  }
  .btn-primary {
    @apply;
  }
  .btn-secondary {
    @apply;
  }
}
```

we can also create our own color variable and define font family in tailwind.config.js

```js
theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8",
        },
      },
      fontFamily: {
        headline: "Poppins, sans-serif",
      },
```
