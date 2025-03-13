// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser, LocalTokenGroup} from "@lezer/lr"
import {criticHighlighting} from "./highlight.js"
export const parser = LRParser.deserialize({
  version: 14,
  states: "%WQQOPOOOfOPO'#C^OnOPO'#CaOvOPO'#CdO!OOPO'#ChO!WOPO'#CkOOOO'#Cq'#CqOOOO'#Cn'#CnQQOPOOOOOO'#Co'#CoO!`OPO,58xOOOO,58x,58xO!hOPO,58{OOOO,58{,58{O!pOPO,59OO!xOPO,59OO#QOPO,59SOOOO,59S,59SO#YOPO,59VOOOO,59V,59VOOOO-E6l-E6lOOOO-E6m-E6mOOOO1G.d1G.dOOOO1G.g1G.gO#bOPO1G.jO#bOPO1G.jOOOO1G.j1G.jOOOO1G.n1G.nOOOO1G.q1G.qO#jOPO7+$UOOOO7+$U7+$UOOOO<<Gp<<Gp",
  stateData: "#r~ORPOUQOXRO]SO`TOfUO~OSZOfXO~OV]OfXO~OY_OfXO~O^aOfXO~OacOfXO~OSfOfXO~OVgOfXO~OYhOfXO~OZjOfXO~O^kOfXO~OalOfXO~OZnOfXO~OZoOfXO~O",
  goto: "!efPPgPPgPPgPPPgPPgPPkqP!aTUOWQWORdWQYPQ[QQ^RQ`SQbT^eY[^`bimQi_RmhTVOW",
  nodeNames: "⚠ CriticMarkup Addition AdditionStart AdditionEnd Deletion DeletionStart DeletionEnd Substitution SubstitutionStart SubstitutionMiddle SubstitutionEnd Highlight HighlightStart HighlightEnd Comment CommentStart CommentEnd",
  maxTerm: 22,
  propSources: [criticHighlighting],
  skippedNodes: [0],
  repeatNodeCount: 2,
  tokenData: "RORO",
  tokenizers: [new LocalTokenGroup("%S~RU{|e}!Ov!^!_!X!_!`!j#o#p!{#r#s$h~hP{|k~nP#q#rq~vOS~~yP}!O|~!PP#q#r!S~!XOV~~![P!^!_!_~!bP#q#r!e~!jOa~~!mP!_!`!p~!sP#q#r!v~!{O^~~#OT{|#_}!O#j!_!`#u!`!a$Q#r#s$]~#bP{|#e~#jOR~~#mP}!O#p~#uOU~~#xP!_!`#{~$QO]~~$TP!`!a$W~$]O`~~$`P#r#s$c~$hOX~~$kQ!`!a$q#r#s$v~$vOY~~$yP#q#r$|~%ROZ~~", 187, 22)],
  topRules: {"CriticMarkup":[0,1]},
  tokenPrec: 0
})
