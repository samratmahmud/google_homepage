import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          "300": "#dfe1e5",
          "400": "#f8f9fa",
          "500": "#bdc1c6",
          "600": "rgba(60,64,67,.9)",
        },
        gray: {
          "200": "#4d5156",
          "300": "#f2f2f2",
          "400": "#dadce0",
          "500": "#70757a",
          600: "rgba(223,225,229)",
        },
        blue: {"400": "#4285f4", "500": "#1a0dab"},
      },
    },
    fontSize: {
      xs: ["13px", {lineHeight: "24px"}],
      sm: ["14px", {lineHeight: "27px"}],
      md: ["15px", {lineHeight: "24px"}],
      lg: ["27px", {lineHeight: ""}],
    },
    boxShadow: {
      sm: "0 1px 1px rgba(0,0,0,.1)",
      md: "0 1px 6px rgba(32,33,36,0.28)",
    },
    fontFamily: {
      arial: ["'Arial'", ...fontFamily.sans],
      roboto: ["'Roboto'", ...fontFamily.sans],
    },
    backgroundImage: {},
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1020px",
      xl: "1278px",
    },
  },
  plugins: [],
};
export default config;
