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
        // PakStartups Material Design 3 Token Set (from Stitch HTML files)
        "primary": "#0f5238",
        "primary-container": "#2d6a4f",
        "primary-fixed": "#b1f0ce",
        "primary-fixed-dim": "#95d4b3",
        "on-primary": "#ffffff",
        "on-primary-container": "#a8e7c5",
        "on-primary-fixed": "#002114",
        "on-primary-fixed-variant": "#0e5138",
        "inverse-primary": "#95d4b3",

        "secondary": "#376a28",
        "secondary-container": "#b4ef9d",
        "secondary-fixed": "#b7f2a0",
        "secondary-fixed-dim": "#9cd686",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#3b6e2c",
        "on-secondary-fixed": "#032100",
        "on-secondary-fixed-variant": "#1e5111",

        "tertiary": "#713638",
        "tertiary-container": "#8d4d4e",
        "tertiary-fixed": "#ffdad9",
        "tertiary-fixed-dim": "#ffb3b3",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#ffcfce",
        "on-tertiary-fixed": "#390b0e",
        "on-tertiary-fixed-variant": "#6f3537",

        "surface": "#e8ffee",
        "surface-bright": "#e8ffee",
        "surface-dim": "#bce3c9",
        "surface-variant": "#c4ecd2",
        "surface-tint": "#2c694e",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#d5fde2",
        "surface-container": "#cff7dd",
        "surface-container-high": "#caf2d7",
        "surface-container-highest": "#c4ecd2",
        "on-surface": "#002112",
        "on-surface-variant": "#404943",
        "inverse-surface": "#133725",
        "inverse-on-surface": "#d2fae0",

        "background": "#e8ffee",
        "on-background": "#002112",

        "outline": "#707973",
        "outline-variant": "#bfc9c1",

        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",

        // Auth page surfaces (slightly different palette)
        "surface-auth": "#f9f9ff",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      fontFamily: {
        headline: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
        label: ["Plus Jakarta Sans", "sans-serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        "green-sm": "0 4px 24px rgba(15,82,56,0.06)",
        "green-md": "0 8px 32px rgba(15,82,56,0.08)",
        "green-lg": "0 16px 48px rgba(15,82,56,0.12)",
        "green-xl": "0 24px 64px rgba(15,82,56,0.16)",
        "nav": "0 8px 32px rgba(15,82,56,0.06)",
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
