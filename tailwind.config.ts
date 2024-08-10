import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "default-wh": "#FAF9F5",
        tan: "#D6B66B",
        aqua: "#0B7373",
        dark: "#004040",
        muted: "#B8B8B8",
      },
      fontFamily: {
        "the-signature": ["Signature", "ui-sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
      },
      backgroundImage: {
        "header-bg": "url('/images/header-bg.jpg')",
        "view-bg":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0.36) 100%), url('/images/view-bg.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
