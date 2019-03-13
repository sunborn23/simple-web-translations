// -------------------------------------- //
// ---------- PUBLIC INTERFACE ---------- //
// -------------------------------------- //

/**
 * Sets the language of the current page and updates all displayed texts
 * @param languageCode The code of the language to use (e.g. de_DE or en_GB)
 */
function setLanguage(languageCode) {
    const translationDictionary = _getTranslationDictionary(languageCode);
    _replaceTranslationValues(translationDictionary);
}

/**
 * Finds all translation keys on the page and outputs a dictionary with the currently displayed values.
 * Intended for manual use after changes to a page were made.
 */
function parsePageToDictionary() {
    const translations = {};
    const elements = document.querySelectorAll(".translation[data-translationkey]");
    elements.forEach(element => {
        const translationKey = element.dataset.translationkey;
        if (translations.hasOwnProperty(translationKey))
            throw new Error("Found duplicated translation key: " + translationKey);
        translations[translationKey] = element.innerHTML;
    });
    console.log("Translations detected on current page:");
    console.log("translationDictionaries[] =", JSON.stringify(translations) + ";")
}

// -------------------------------------- //
// ---------- HELPER FUNCTIONS ---------- //
// -------------------------------------- //

function _getTranslationDictionary(languageCode) {
    if (!translationDictionaries.hasOwnProperty(languageCode))
        throw new Error("Unsupported language code", languageCode);
    return translationDictionaries[languageCode];
}

function _replaceTranslationValues(dictionary) {
    const elements = document.querySelectorAll(".translation[data-translationkey]");
    elements.forEach(element => {
        const translationKey = element.dataset.translationkey;
        if (!dictionary.hasOwnProperty(translationKey))
            console.error("Translation key not found for current language", translationKey);
        else
            document.querySelector(".translation[data-translationkey='" + translationKey + "']").innerHTML = dictionary[translationKey];
    });
}
