/***
 * - accepts i18n global locale and mapps it to request langugage
 */
export const languageHelper = (locale) => {
    if (locale == "de") return "de-DE";
    if (locale == "en") return "en-US";
}