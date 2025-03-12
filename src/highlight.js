import { styleTags, tags } from '@lezer/highlight'

export const criticHighlighting = styleTags({
  AdditionStart: tags.bracket,
  Addition: tags.inserted,
  AdditionEnd: tags.bracket,

  DeletionStart: tags.bracket,
  Deletion: tags.deleted,
  DeletionEnd: tags.bracket,

  SubstitutionStart: tags.bracket,
  SubstitutionMiddle: tags.separator,
  Substitution: tags.changed,
  SubstitutionEnd: tags.bracket,

  HighlightStart: tags.bracket,
  Highlight: tags.emphasis,
  HighlightEnd: tags.bracket,

  CommentStart: tags.bracket,
  Comment: tags.blockComment,
  CommentEnd: tags.bracket
})
