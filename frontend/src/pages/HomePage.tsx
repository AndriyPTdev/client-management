import i18n, { t } from "i18next";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import { useTheme } from "@/context/ThemeProvider";


export default function HomePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <div>
        <h1>Current theme: {theme}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
      <h1>Vite + React {t("messages.welcome")}</h1>
      <div className="card">
        <button
          disabled={i18n.language === "uk"}
          onClick={() => {
            i18n.changeLanguage("uk");
          }}
        >
          {t("language.uk")}
        </button>
        <button
          disabled={i18n.language === "pt"}
          onClick={() => {
            i18n.changeLanguage("pt");
          }}
        >
          {t("language.pt")}
        </button>
        <button
          disabled={i18n.language === "en"}
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          {t("language.en")}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
