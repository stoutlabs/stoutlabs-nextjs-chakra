module.exports = {
  extends: ["stoutlabs"],
  rules: {},
  settings: {
    "import/resolver": {
      node: {
        paths: ["."],
      },
    },
    // "import/core-modules": ["lodash", "styled-jsx"],
  },
};
