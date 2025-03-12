import { styleTags, tags } from '@lezer/highlight'

export const criticHighlighting = styleTags({
  AdditionStart: [tags.inserted, tags.bracket],
  Addition: tags.inserted,
  AdditionEnd: [tags.inserted, tags.bracket],

  DeletionStart: [tags.deleted, tags.bracket],
  Deletion: tags.deleted,
  DeletionEnd: [tags.deleted, tags.bracket],

  SubstitutionStart: [tags.changed, tags.bracket],
  SubstitutionMiddle: [tags.changed, tags.separator],
  Substitution: tags.changed,
  SubstitutionEnd: [tags.changed, tags.bracket],

  HighlightStart: [tags.docComment, tags.bracket],
  Highlight: tags.docComment,
  HighlightEnd: [tags.docComment, tags.bracket],

  CommentStart: [tags.blockComment, tags.bracket],
  Comment: tags.blockComment,
  CommentEnd: [tags.blockComment, tags.bracket]
})
