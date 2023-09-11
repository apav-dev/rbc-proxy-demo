import type { StudioTailwindConfig } from "@yext/studio";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  // plugins: [require("tailwindcss-animate")],
} satisfies StudioTailwindConfig;
