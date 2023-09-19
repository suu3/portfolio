module.exports = {
  plugins: [
    require("postcss-preset-env")({
      features: {
        "custom-properties": {
          preserve: false,
        },
      },
    }),
  ],
};
