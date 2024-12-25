/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Paths to your files
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      boxShadow: {
        "light-subtle": "0 2px 4px rgba(229, 231, 235, 0.5)", // Subtle lift for light theme
        "light-strong": "0 4px 8px rgba(156, 163, 175, 0.7)", // Strong lift for light theme
        "dark-subtle": "0 2px 4px rgba(15, 23, 42, 0.8)", // Subtle lift for dark theme
        "dark-strong": "0 4px 8px rgba(0, 0, 0, 0.9)", // Strong lift for dark theme
      },
      colors: {
        light: {
          background: "#F8F9FA",
          secondaryBackground: "#E5E7EB",
          textPrimary: "#1E293B",
          textSecondary: "#6B7280",
          textKeyboard: "#000000",
          borderSubtle: "#4B5563",
          borderStrong: "#1F2937",
          buttonDefault: "#FBBF24",
          buttonCorrect: "#10B981",
          buttonIncorrect: "#EF4444",
          buttonHint: "#6D28D9",
          buttonNewGame: "#0EA5E9",
          buttonDisabled: "#D1D5DB",
          buttonHowToPlay: "#38BDF8",
          buttonHowToPlayHover: "#0EA5E9",
          textHowToPlay: "#1E293B",
          statusSuccess: "#34D399",
          statusError: "#DC2626",
          statusHint: "#8B5CF6",
          timerBackground: "#E5E7EB",
          timerText: "#1E293B",
        },
        dark: {
          background: "#1E1E2F",
          secondaryBackground: "#28293E",
          textPrimary: "#FFFFFF",
          textSecondary: "#A5A6C5",
          textKeyboard: "#000000",
          borderSubtle: "#E5E7EB",
          borderStrong: "#9CA3AF",
          buttonDefault: "#F59E0B",
          buttonCorrect: "#10B981",
          buttonIncorrect: "#EF4444",
          buttonHint: "#8B5CF6",
          buttonNewGame: "#22D3EE",
          buttonDisabled: "#6B7280",
          buttonHowToPlay: "#0EA5E9",
          buttonHowToPlayHover: "#0284C7",
          textHowToPlay: "#FFFFFF",
          statusSuccess: "#22C55E",
          statusError: "#F43F5E",
          statusHint: "#8B5CF6",
          timerBackground: "#334155",
          timerText: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
