import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
} from "@chakra-ui/react";
import { poppins } from "./Fonts";

export type ButtonColorVariants =
  | "primary"
  | "secondary"
  | "transparent"
  | "grey"
  | "chakra"
  | "warning";

export type SButtonSizeVariants = "xs" | "sm" | "md";
export type SCardVariants = "name" | "dark" | "transparent";

export const colors = {
  transparent: { value: "transparent" },
  bg: {
    0: { value: "#000000" },
    100: { value: "#000000" },
    test: { value: "#ffffff20" },
    primary: { value: "#ffffff" },
  },
  text: {
    primary: { value: "#eee" },
    lightgreen: { value: "#dbfbf6" },
    secondary: { value: "#abbbb6" },
    white: { value: "#ffffff" },
    link: { value: "#90caf9" },
    navLink: { value: "#07ba9c" },
    navLinkHover: { value: "#00ffdb" },
    navLinkActive: { value: "#00ffdb" },
  },
  button: {
    primary: {
      bg: { value: "#50d2c1" },
      color: { value: "#1a3638" },
      bgHover: { value: "#50d2c1" },
    },
    secondary: {
      bg: { value: "#1a3638" },
      bgHover: { value: "#1a3638" },
      color: { value: "#ffffff" },
      border: { value: "#1a363855" },
      borderHalf: { value: "#1a363830" },
    },
    warning: {
      bg: { value: "#FFCC00" },
      bgHover: { value: "#FFCC00" },
      color: { value: "#000000" },
      border: { value: "#FFCC0055" },
      borderHalf: { value: "#FFCC0030" },
    },
    chakra: {
      bg: { value: "#032726" },
      bgHover: { value: "#003533" },
      color: { value: "#5eead4" },
      border: { value: "#114240" },
      borderHalf: { value: "#114240" },
    },
    grey: {
      bg: { value: "#303030" },
      bgHover: { value: "#303030" },
      color: { value: "#ffffff" },
      border: { value: "#303030" },
    },
    transparent: {
      bg: { value: "transparent" },
      bgHover: { value: "transparent" },
      color: { value: "#aaaaaa" },
      colorHover: { value: "#ffffff" },
      border: { value: "transparent" },
      borderHalf: { value: "transparent" },
    },
  },
  tabs: {
    bg: { value: "#55555555" },
    color: { value: "#ffffff" },
    bgHover: { value: "#888888" },
    border: { value: "rgb(62, 62, 62)" },
  },

  input: {
    primary: {
      bg: { value: "#207e7524" },
      color: { value: "#dbfbf6" },
      border: { value: "#50d2c155" },
      borderHalf: { value: "#50d2c130" },
    },
    secondary: {
      bg: { value: "#051010" },
      color: { value: "#ffffff" },
      border: { value: "#124e4c" },
      focusRing: { value: "#166c69" },
    },
  },

  components: {
    circularProgress: {
      color: { value: "#50d2c1" },
    },
  },
  card: {
    name: {
      bg: { value: "#222529" },
      border: { value: "rgb(71, 71, 71)" },
    },
    dark: {
      bg: { value: "#121212" },
      border: { value: "transparent" },
    },
    transparent: {
      bg: { value: "#222529" },
      border: { value: "transparent" },
    },
  },
  dropdown: {
    bg: { value: "#33353a" },
    itemBg: { value: "#222429" },
  },
} as const;

const inputReceipt = defineRecipe({
  base: {
    border: "1px solid black !important", //override the border property by this
    outline: "none !important",
    focusRing: "none !important",
  },
});

const customConfig = defineConfig({
  theme: {
    recipes: {
      inputReceipt,
    },
    breakpoints: {
      sm: "480px",
      md: "768px",
      lg: "1280px",
      xl: "1536px",
      "2xl": "1800px",
    },
    tokens: {
      colors,
      fonts: {
        body: { value: poppins.style.fontFamily },
        heading: { value: poppins.style.fontFamily },
      },

      animations: {
        breathe: {
          value: "breathe 2.5s infinite ease-in-out",
        },
      },
    },
    keyframes: {
      breathe: {
        "0%, 100%": { boxShadow: "0px 0px 40px 5px rgba(50, 50, 50, 0.7)" },
        "50%": { boxShadow: "0px 0px 20px 2px rgba(50, 50, 50, 0.8)" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
