import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import  LanguageDetector  from 'i18next-browser-languagedetector';


import uk from './uk.json';
import pt from './pt.json';
import en from './en.json';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            uk: { translation: uk },
            pt: { translation: pt },
            en: { translation: en },
        },
        fallbackLng: 'uk',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
