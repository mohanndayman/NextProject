"use client";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import "../locales/ar.json";
import "../locales/en.json";

const LanguageSelector = () => {
  const { lang } = useTranslation();
  const [currentLang, setCurrentLang] = useState(lang);

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "ar" : "en";
    setCurrentLang(newLang);
    console.log(newLang);
    // You can add your logic here to update the language setting in localStorage or cookies
  };

  return (
    <div>
      <button onClick={toggleLanguage}>
        {currentLang === "en" ? "Switch to Arabic" : "Switch to English"}
      </button>
    </div>
  );
};

export default LanguageSelector;
