/* eslint-disable quote-props */
/* eslint-disable max-len */
/**
 * Translation file for this resouce.
 *
 * IMPORTANT:
 * - The "en" (English) section is automatically generated from source files.
 *   Do NOT modify the "en" section manually.
 * - Other language sections should be manually translated by you.
 * - When you run the extraction script again, only the "en" section will be
 *   updated. Your manual translations in other languages will be preserved.
 *
 * Structure:
 * - interface: translations for name/description (used by GUI formatMessage)
 * - extensions: translations for extension blocks (used by VM formatMessage)
 * - blocks: translations for Blockly blocks (used by Blockly.Msg)
 */

export default {
    'interface': {
        'en': {
            'translate.name': 'Translate',
            'translate.description': 'Translate text into many languages.'
        },
        'ru': {
            'translate.name': 'Перевести',
            'translate.description': 'Переводи текст на другие языки.'
        },
        'zh-cn': {
            'translate.name': '翻译',
            'translate.description': '把文字翻译成多种语言。'
        },
        'zh-tw': {
            'translate.name': '翻譯',
            'translate.description': '將文字訊息翻譯為各國語言。'
        }
    },
    'extensions': {
        'en': {
            'translate.categoryName': 'Translate',
            'translate.translateBlock': 'translate [WORDS] to [LANGUAGE]',
            'translate.defaultTextToTranslate': 'hello',
            'translate.viewerLanguage': 'language'
        },
        'ru': {
            'translate.categoryName': 'Перевести',
            'translate.translateBlock': 'перевести [WORDS] на [LANGUAGE]',
            'translate.defaultTextToTranslate': 'привет',
            'translate.viewerLanguage': 'язык'
        },
        'zh-cn': {
            'translate.categoryName': '翻译',
            'translate.translateBlock': '将 [WORDS] 译为 [LANGUAGE]',
            'translate.defaultTextToTranslate': '你好',
            'translate.viewerLanguage': '访客语言'
        },
        'zh-tw': {
            'translate.categoryName': '翻譯',
            'translate.translateBlock': '文字 [WORDS] 翻譯成 [LANGUAGE]',
            'translate.defaultTextToTranslate': 'hello',
            'translate.viewerLanguage': '瀏覽者的語言'
        }
    },
    'blocks': {
        'en': {},
        'ru': {},
        'zh-cn': {},
        'zh-tw': {}
    }
};
