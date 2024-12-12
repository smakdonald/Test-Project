var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  smakdonald.github   copyright  "
},
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " The content of this text is heavily based on the 817-818 sequence of courses offered in UNL, specificlly those taught during the 2021 and 2022 academic years. As such, the content and structure have been heavily based on the notes of the following faculty:    Eloísa Grifo      Alexandra Seceleanu     Mark Walker Mark has somehow managed to be the only member of the mathematics faculty to not have so much as a single page on the UNL website.    I am very thankful to Eloísa, Alexandra, and Mark for sharing their .tex files with me. Additionally, a big thanks to Julia Courtney, Nick White, and Cleve Young for the qual problem solutions that they supplied.  And, as always, I reserve a speical thank you for Erin McNicholas and Inga Johnson for forever tinting the world of mathematics purple.  Supplementary \/ Source Material      Alexandra Seceleanu's Algebra Lecture Notes      Eloísa Grifo's 818 Lecture Notes       "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Preface",
  "number": "",
  "title": "How to Use This Book",
  "body": "How to Use This Book  I'm still in the process of figuring out exactly what this text is for. Some possibilities include:   Future lecture notes for the hopeful possibility that one day I will teach a course over this material.    Current notes for students taking the first year algebra sequence.    Assistance in studying for the Algebra Qualifying Exam at UNL.    Clout.     Blocks  Here are the types of environments you are likely to encounter throughout the text and what they are used for.  Definition   The building blocks of what we'll be working with.   Examples   Specific instances of a definition. For example, the empty set, is an example of a set, and thus would be contained within an example environment. See: . At some point the line between example and definition becomes incoherently blurred, but I have done my best to keep things consistent.   Theorem   A result.   Lemma   A true mathematical statement that was proven mainly to help in the proof of some theorem.   Corollary   An important result whose proof comes directly from a previous theorem.   Proposition   Results that require proof but are more specific and\/or contained in a larger result coming later.   Exercise   Generalizations, specifics, smaller results, things are are less essential to the course or results who's proofs are usually skipped.   Problem   Used for qualifying exam problems.   Remark   Providing context in the form of foreshadowing or content not covered in this text. In general, there shouldn't be anything defined in a remark, they should be entirely optional.   Discussion   Usually for arguing about notation.   Footnotes   Sometimes act like remarks. However, most are strictly for fun and add little to no educational value, at least in the traditional sense. It should really be feetnote if you think about it.       Don't Forget the Index!  This text (and algebra in general) contains an otherworldly amount of definitions and notation, it can sometimes be overwhelming keeping track of it all, and that's okay! The is here to help; it contains a comprehensive list of all the terms and notation used here, as well as where to find their definition \/ first usage in the text. Use it, it's here for you!   "
},
{
  "id": "frontmatter-4-3-2",
  "level": "2",
  "url": "frontmatter-4.html#frontmatter-4-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition Examples Theorem Lemma Corollary Proposition Exercise Problem Remark Discussion Footnotes "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Preface",
  "number": "",
  "title": "The Structure of this Text",
  "body": "The Structure of this Text  Additions     Solvable Groups: Justification pending    Group Rings: Used to rigorously define polynomial rings, used in many advanced forms of mathematics, such as representation theory, (co)homology, etc    Noetherian Rings: Better to include in the ring section, since we'll need them when we classify finitely generated modules in PIDs anyway. Since much of commutative algebra is based in noetherian rings, the earlier the exposure the better.    Localization: Justification pending    Algebras: Justification pending      "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
