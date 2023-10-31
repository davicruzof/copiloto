module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@assets": "./src/assets",
          "@navigation": "./src/routes",
          "@contexts": "./src/contexts",
          "@screens": "./src/screens",
          "@services": "./src/services",
          "@utils": "./src/shared/utils",
          "@components": "./src/shared/components",
          "@hooks": "./src/shared/hooks",
          "@shared": "./src/shared",
        },
      },
    ],
  ],
};
