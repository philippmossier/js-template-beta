/* eslint-disable */
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './public/index.html',
    './src/**/*.jsx',
  ],
  defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
});

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
    require('@tailwindcss/ui'),
    ...isProduction
      ? [purgecss]
      : [],
  ],
};
