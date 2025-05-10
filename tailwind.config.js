/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './index.html',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Core brand colors extracted from the screenshot
        primary: {
          DEFAULT: "#0033B6", // Dark blue from the background and logo
          light: "#E3F0FF", // Light blue background shade
          foreground: "#FFFFFF", // White text on primary
        },
        secondary: {
          DEFAULT: "#FFC629", // Yellow/gold from the star accents
          foreground: "#0A0A0A", // Dark text on secondary
        },
        accent: {
          DEFAULT: "#FF9D2D", // Orange accent from the bottom star
          foreground: "#FFFFFF", // White text on accent
        },
        neutral: {
          DEFAULT: "#1E293B", // Dark text color
          light: "#64748B", // Light text/subtitle color
          bg: "#F8FAFC", // Light background color
        },
        // Keep existing color structure with new values
        redcustom: "#0033B6", // Updated to match the site's primary blue
        bluecustom: "#E3F0FF", // Light blue background
        redbgcustom: "#F5F7FF", // Very light blue background
        border: "#E2E8F0",
        input: "#E2E8F0",
        ring: "#0033B6",
        background: "#FFFFFF",
        foreground: "#1E293B",
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F1F5F9",
          foreground: "#64748B",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#1E293B",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1E293B",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": "marquee 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}