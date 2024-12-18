import getLodash from 'lodash/get'
import MarkdownIt from "markdown-it";

const defaultLocale = 'en'
const getLocale = () => document.documentElement.lang || defaultLocale;

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
 * Translate strings using the window.i18n object.
 * Usage:
 * __('auth.failed') -> 'Authentication failed'
 * __('auth.failed', {name: 'John'}) -> 'Authentication failed for John'
 */
window.trans = window.translate = window.__  = function(string, args){
    const md = new MarkdownIt({
        html: true,
    });

    // Disable paragraph wrapping by overriding paragraph rules
    md.renderer.rules.paragraph_open = () => '';
    md.renderer.rules.paragraph_close = () => '';

    string = md.render(string);

    const key = string.substr(0, string.indexOf('.'))
    const originalString = string
    const locale = getLocale()

    if (! key || (! window.i18n[locale].__possible_keys.includes(key) && ! window.i18n[defaultLocale].__possible_keys.includes(key))) {
        string = '__global.' + string
    }

    let value = getLodash(window.i18n[locale], string)

    if (! value) {
        const event = new CustomEvent("translation:missing", {detail: {key: originalString}});
        window.dispatchEvent(event);

        value = getLodash(window.i18n[defaultLocale], string)

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
            return replacement || part;
        }

        return part;
    });

    return !containsReactElement ? result.join('') : result;
}
