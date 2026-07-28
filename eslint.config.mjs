import js from "@eslint/js";
import nextPlugin from "eslint-config-next";
import prettierConfig from "eslint-config-prettier";

export default [
  ...nextPlugin,
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    rules: {
      "@next/next/no-img-element": "warn",
      "@next/next/no-page-custom-font": "warn",
      "react/no-unescaped-entities": "off",
    },
  },
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts", "public/assets/**", "template/**"],
  },
  prettierConfig,
];