import getLodash from 'lodash/get'
import MarkdownIt from "markdown-it";

const defaultLocale = 'en'
const globalTranslations = {}
let locale = defaultLocale

const generateRandomString = (length = 16, charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => {
    let result = '';
    const charsetLength = charset.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charsetLength);
        result += charset[randomIndex];
    }

    return result;
}

const isReactElement = (obj) =>
    obj && typeof obj === 'object' && obj.$$typeof === Symbol.for('react.element');

/**
 * Translate strings using the globalTranslations object.
 * Usage:
 * __('auth.failed') -> 'Authentication failed'
 * __('auth.failed', {name: 'John'}) -> 'Authentication failed for John'
 */
const translate = function(string, args, markdown = false){
    if (markdown) {
        const md = new MarkdownIt({
            html: true,
        });

        // Disable paragraph wrapping by overriding paragraph rules
        md.renderer.rules.paragraph_open = () => '';
        md.renderer.rules.paragraph_close = () => '';

        string = md.render(string);
    }

    const key = string.substr(0, string.indexOf('.'))
    const originalString = string

    if (! key || (! globalTranslations[locale].__possible_keys.includes(key) && ! globalTranslations[defaultLocale].__possible_keys.includes(key))) {
        string = '__global.' + string
    }

    let value = getLodash(globalTranslations[locale], string)

    if (! value) {
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent("translation:missing", {detail: {key: originalString}}));
        }

        value = getLodash(globalTranslations[defaultLocale], string)

        if (! value) {
            value = originalString
        }
    }

    if (!value.includes(':')) {
        return value;
    }

    // Split the string into parts for dynamic replacements
    const parts = value.split(/(:\w+)/g); // Split on placeholders like ":key"

    let containsReactElement = false;

    const result = parts.map((part) => {
        if (part.startsWith(':')) {
            const key = part.substring(1);
            let replacement = args?.[key];

            if (isReactElement(replacement)) {
                replacement = {
                    ...replacement,
                    key: generateRandomString(),
                }

                containsReactElement = true;
            }

            // If replacement is not a React element, return it as plain text
            return replacement !== null && replacement !== undefined ? replacement : part;
        }

        return part;
    });

    return !containsReactElement ? result.join('') : result;
}

if (typeof window !== 'undefined') {
    window.trans = window.translate = window.__ = translate;
    window.setTranslations = (translations, lang) => {
        globalTranslations[lang] = translations
    }
    window.setLocale = (lang) => {
        locale = lang
    }
}

export const jstranslate = (translations, lang) => {
    locale = lang
    globalTranslations[lang] = translations
    return translate
};
