# A grammar and language pack for using CriticMarkup with Codemirror 6

> A simple parser and language pack written using the
> [Lezer](https://lezer.codemirror.net/)-system to parse CriticMarkup and add
> support in a [Codemirror 6](https://codemirror.net/)-based editor.

`lang-criticmarkup` is a simple plain text grammar that can parse tokens
according to the specification provided by the
[CriticMarkup project](https://github.com/CriticMarkup/CriticMarkup-toolkit) for
the [Codemirror 6](https://codemirror.net/) code editor.

This repository contains both a grammar that specifies the syntax, as well as
the necessary parts to turn it into a language pack that can be included in a
Codemirror 6 editor.

## Setup & Usage

To install this language pack, install it from npm:

```bash
$ npm install lang-criticmarkup
```

Alternatively, you can use yarn:

```bash
$ yarn add lang-criticmarkup
```

Then, in the part of your code where you set up a Codemirror editor, you can use
it as a parser. Refer to the [documentation](https://codemirror.net/docs/ref/)
for all options, but here is a minimal setup:

```ts
import { basicSetup, EditorView } from "codemirror"
import { EditorState } from "@codemirror/state"
import { criticMarkup } from "lang-criticmarkup"

const state = EditorState.create({
  extensions: [
    basicSetup,
    criticMarkup()
  ]
})

const view = new EditorView({
  state,
  parent: document.body
})
```

Since CriticMarkup is intended to be used atop of other (plain-text style)
syntaxes such as Markdown, you probably want to use this in a
[mixed-language parser setup](https://codemirror.net/examples/mixed-language/).
Here is an example of a minimal such thing:

```ts
import { markdownLanguage } from '@codemirror/lang-markdown'
import { LRLanguage } from "@codemirror/language"
import { parseMixed } from "@lezer/common"
import { criticMarkupLanguage } from "lang-criticmarkup"

const mixedParser = markdownLanguage.parser.configure({
  props: [
    // Add optional language configuration here, if applicable
  ],
  wrap: parseMixed(node => {
    return node.type.isTop ? {
      parser: criticMarkupLanguage.parser,
      overlay: node => true // Parse everything and mount the result as overlays
    } : null
  })
})

const mdCriticLanguage = LRLanguage.define({ parser: mixedParser })
```

## Styling

This language provides a set of tag-mappings so that highlight styles can
directly provide appropriate styling. Please refer to the file `highlight.js` to
see the up-to-date mapping. Here is an example of a barebones highlighting style
that provides somewhat expected styles as of the time of writing:

```ts
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';

const style = HighlightStyle.define([
  { tag: tags.changed, color: 'yellow' },
  { tag: tags.deleted, color: 'red', textDecoration: 'line-through' },
  { tag: tags.inserted, color: 'green', textDecoration: 'underline' },
  { tag: tags.separator, color: '#666', fontWeight: 'bold' },
  { tag: tags.blockComment, color: 'cyan' },
  { tag: tags.bracket, color: '#fff' },
  { tag: tags.docComment, backgroundColor: 'yellow', color: 'black' }
])
```

## Development

This package contains the required grammar to produce a working CriticMarkup
Lezer parser. It additionally contains the code to turn the parser into a full
language setup that you can use. To start developing, you'll need to have a node
stack installed. Additionally, this repository uses `yarn` for its packages, so
make sure you have it installed.

To start developing, first clone the repository and install the dependencies:

```bash
git clone https://github.com/nathanlesage/lang-criticmarkup
yarn install --immutable
```

### `generate-grammar`

This generates the grammar from the file `critic.grammar` and produces two
files, `critic.js` that contains the parser, and `critic.terms.js` that contains
the token names.

### `build`

Runs the TypeScript compiler over the code base to create the final package in
the `dist` folder. The configuration is set to produce ES modules, with the
intent being to include it in another bundling system (webpack, rollup, etc.).

### `test`

Runs the unit tests that ensure the grammar produces correct syntax trees.

## Syntax Structure

The grammar creates an LR syntax tree with the following nodes:

* `CriticMarkup`: The top node
* `Addition`: Addition (`{++addition++}`)
* `Deletion`: Deletion (`{--deletion--}`)
* `Substitution`: Substitution (`{~~substitute this~>with this~~}`)
* `Highlight`: Highlighted text (`{==highlight==}`)
* `Comment`: A text comment (`{>>This is the comment<<}`)

## License

This repository has been created by Hendrik Erz (<hendrik@zettlr.com>) as an
addition to the Codemirror 6 ecosystem. This language pack is not an official
Codemirror package and is not affiliated with or endorsed by Marijn Haverbeke.

The code is provided under the terms of the GPL v3 only license. See the
[LICENSE file](./LICENSE) for more information.
