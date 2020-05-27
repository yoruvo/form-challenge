import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import strings from "./strings.json"

i18n.use(initReactI18next).init({
  resources: strings,
  lng: "de",
  interpolation: {
    escapeValue: false, // apparently, React already performs XSS protection.
  },
})

export default i18n
