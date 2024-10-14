import {parser} from "./critic.js"
import {LRLanguage, foldNodeProp, foldInside, LanguageSupport} from "@codemirror/language"

/**
 * CriticMarkup language for usage in Codemirror 6 editors, based off the
 * grammar.
 */
export const criticMarkupLanguage = LRLanguage.define({
  name: "critic-markup",
  parser: parser.configure({
    props: [
      foldNodeProp.add({
        Addition: foldInside,
        Deletion: foldInside,
        Substitution: foldInside,
        Highlight: foldInside,
        Comment: foldInside
      })
    ]
  }),
  languageData: {
    commentTokens: {
      block: { open: "{>>", close: "<<}" }
    }
  }
})

// Language support for CriticMarkup.
export function criticMarkup() {
  return new LanguageSupport(criticMarkupLanguage)
}
