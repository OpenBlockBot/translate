const {ArgumentType, BlockType, ProgramModeType, Cast, log, fetchWithTimeout, formatMessage} = window.Scratch;
import languageNames from 'scratch-translate-extension-languages';

/**
 * Icon svg to be displayed in the blocks category menu, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len
const menuIconURI = 'data:image/png;base64,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';

/**
 * Icon svg to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len
const blockIconURI = menuIconURI;

/**
 * The url of the translate server.
 * @type {string}
 */
const serverURL = 'https://translate-service.scratch.mit.edu/';

/**
 * How long to wait in ms before timing out requests to translate server.
 * @type {int}
 */
const serverTimeoutMs = 10000;

/**
 * Class for the translate block in Scratch 3.0.
 * @constructor
 */
class Scratch3TranslateBlocks {
    constructor () {
        this._viewerLanguageCode = this.getViewerLanguageCode();
        this._supportedLanguages = [];
        this._randomLanguageCode = 'en';
        this._translateResult = '';
        this._lastLangTranslated = '';
        this._lastTextTranslated = '';
    }

    get EXTENSION_ID () {
        return 'translate';
    }

    static get STATE_KEY () {
        return 'Scratch.translate';
    }

    getInfo () {
        this._supportedLanguages = this._getSupportedLanguages(this.getViewerLanguageCode());
        this._randomLanguageCode = this._supportedLanguages[
            Math.floor(Math.random() * this._supportedLanguages.length)].value;

        return [{
            id: 'translate',
            name: formatMessage({
                id: 'translate.categoryName',
                default: 'Translate',
                description: 'Name of extension that adds translate blocks'
            }),
            blockIconURI: blockIconURI,
            menuIconURI: menuIconURI,
            blocks: [
                {
                    opcode: 'getTranslate',
                    text: formatMessage({
                        id: 'translate.translateBlock',
                        default: 'translate [WORDS] to [LANGUAGE]',
                        description: 'translate some text to a different language'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        WORDS: {
                            type: ArgumentType.STRING,
                            defaultValue: formatMessage({
                                id: 'translate.defaultTextToTranslate',
                                default: 'hello',
                                description: 'hello: the default text to translate'
                            })
                        },
                        LANGUAGE: {
                            type: ArgumentType.STRING,
                            menu: 'languages',
                            defaultValue: this._randomLanguageCode
                        }
                    },
                    programMode: [ProgramModeType.REALTIME]
                },
                {
                    opcode: 'getViewerLanguage',
                    text: formatMessage({
                        id: 'translate.viewerLanguage',
                        default: 'language',
                        description: 'the languge of the project viewer'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {},
                    programMode: [ProgramModeType.REALTIME]
                }
            ],
            menus: {
                languages: {
                    acceptReporters: true,
                    items: this._supportedLanguages
                }
            }
        }];
    }

    _getSupportedLanguages (code) {
        return languageNames.menuMap[code].map(entry => {
            const obj = {text: entry.name, value: entry.code};
            return obj;
        });
    }

    getViewerLanguage () {
        this._viewerLanguageCode = this.getViewerLanguageCode();
        const names = languageNames.menuMap[this._viewerLanguageCode];
        let langNameObj = names.find(obj => obj.code === this._viewerLanguageCode);

        if (!langNameObj && languageNames.scratchToGoogleMap[this._viewerLanguageCode]) {
            const lookupCode = languageNames.scratchToGoogleMap[this._viewerLanguageCode];
            langNameObj = names.find(obj => obj.code === lookupCode);
        }

        let langName = this._viewerLanguageCode;
        if (langNameObj) {
            langName = langNameObj.name;
        }
        return langName;
    }

    getViewerLanguageCode () {
        const locale = formatMessage.setup().locale;
        const viewerLanguages = [locale].concat(navigator.languages);
        const languageKeys = Object.keys(languageNames.menuMap);
        const languageCode = viewerLanguages.reduce((acc, lang) => {
            if (acc) {
                return acc;
            }
            if (languageKeys.indexOf(lang.toLowerCase()) > -1) {
                return lang;
            }
            return acc;
        }, '') || 'en';

        return languageCode.toLowerCase();
    }

    getLanguageCodeFromArg (arg) {
        const languageArg = Cast.toString(arg).toLowerCase();
        if (languageNames.menuMap.hasOwnProperty(languageArg)) {
            return languageArg;
        }
        if (languageNames.nameMap.hasOwnProperty(languageArg)) {
            return languageNames.nameMap[languageArg];
        }
        if (languageNames.previouslySupported.indexOf(languageArg) !== -1) {
            return languageArg;
        }
        return 'en';
    }

    getTranslate (args) {
        if (/^\d+$/.test(args.WORDS)) return Promise.resolve(args.WORDS);

        if (this._lastTextTranslated === args.WORDS &&
            this._lastLangTranslated === args.LANGUAGE) {
            return this._translateResult;
        }

        const lang = this.getLanguageCodeFromArg(args.LANGUAGE);

        let urlBase = `${serverURL}translate?language=`;
        urlBase += lang;
        urlBase += '&text=';
        urlBase += encodeURIComponent(args.WORDS);

        const tempThis = this;
        const translatePromise = fetchWithTimeout(urlBase, {}, serverTimeoutMs)
            .then(response => response.text())
            .then(responseText => {
                const translated = JSON.parse(responseText).result;
                tempThis._translateResult = translated;
                tempThis._lastTextTranslated = args.WORDS;
                tempThis._lastLangTranslated = args.LANGUAGE;
                return translated;
            })
            .catch(err => {
                log.warn(`error fetching translate result! ${err}`);
                return '';
            });
        return translatePromise;
    }
}

export default Scratch3TranslateBlocks;
