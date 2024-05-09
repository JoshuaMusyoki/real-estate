module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'postcss-loader',
          ],
        },
      ],
    },
    plugins: [
      require('postcss-preset-env'), // Autoprefixer plugin
      require('tailwindcss'), // Tailwind plugin
      require('autoprefixer'), // PostCSS plugin for Tailwind
    ],
  };