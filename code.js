// To run the code, open it in the browser using the VS Code Live Server
// Then open the console.  You can directly call these function in the console to test.

/*  --------------------------------------------------------
    encodeVowelWord()

    Encode words that begin with a vowel sound from english to pig latin
    For words that begin with vowel sounds, one just adds "yay" to the end.

    For example:
        "eat" becomes "eat-yay"
        "omelet" becomes "omelet-yay" 
*/

const testVowelWords = {
  eat: "eat-yay",
  omelet: "omelet-yay",
  are: "are-yay",
  egg: "egg-yay",
  explain: "explain-yay",
  always: "always-yay",
  ends: "ends-yay",
  every: "every-yay",
  another: "another-yay",
  under: "under-yay",
  island: "island-yay",
  elegant: "elegant-yay",
}
const testSimpleConsonantWords = {
  latin: "atin-lay",
  banana: "anana-bay",
  trash: "ash-tray",
  happy: "appy-hay",
  duck: "uck-day",
  dopest: "opest-day",
  me: "e-may",
  too: "oo-tay",
  will: "ill-way",
  moist: "oist-may",
  wet: "et-way",
  real: "eal-ray",
  simple: "imple-say",
  say: "ay-say",
  bagel: "agel-bay",
  you: "ou-yay",
}
const testClusteredConsonantWords = {
  cheers: "eers-chay",
  shesh: "esh-shay",
  smile: "ile-smay",
  string: "ing-stray",
  thanks: "anks-thay",
  stupid: "upid-stay",
  glove: "ove-glay",
}
let vowels = ["a", "e", "i", "o", "u"]

let textArea = document.getElementById("sentence")

let translateButton = document.getElementById("translate")
let translateContainer = document.getElementById("translated")



translateButton.addEventListener("click", function() {
  let untranslatedText = textArea.value
  let codedText = encodeText(untranslatedText)
  translateContainer.innerHTML = `${codedText}`
}
)


function encodeVowelWord(word) {
  let codeWord = `${word}-yay`
  return codeWord;
}

console.assert(encodeVowelWord("egg") === "egg-yay", `Should return egg-yay, returns ${encodeVowelWord("egg")}`)
console.assert(encodeVowelWord("are") === "are-yay", `Should return are-yay, returns ${encodeVowelWord("are")}`)

/*  --------------------------------------------------------
    encodeConsonantWord()

    Encode words that begin with a consonant sound from english to pig latin.
    For words that begin with consonant sounds, all letters before the initial vowel 
    are placed at the end of the word sequence, preceded by a hyphen "-". Then, "ay" is added. 
    
    For example:
        "latin" becomes "atin-lay"
        "cheers" becomes "eers-chay"
*/

//
function encodeConsonantWord(word) {
  let wordArray = word.split("")
  let beginningSection = ""
  for (let index = 0; index < wordArray.length; index += 1) {
    let currentLetter = wordArray[index]
    beginningSection = beginningSection + currentLetter
    let nextLetter = wordArray[index + 1]
    if (vowels.includes(nextLetter)){
      let wordSection = wordArray.slice(index + 1)
      let sectionString = wordSection.join("")
      let codeWord = `${sectionString}-${beginningSection}ay`
      return codeWord
    }
    if (index === wordArray.length - 1) {
      let wordSection = wordArray.slice(index + 1)
      let sectionString = wordSection.join("")
      let codeWord = `${sectionString}${beginningSection}-ay`
      return codeWord
    }
  }
}

console.assert(encodeConsonantWord("duck") === "uck-day", `Should return uck-day, returns ${encodeConsonantWord("duck")}`)
console.assert(encodeConsonantWord("dopest") === "opest-day", `Should return opest-day, returns ${encodeConsonantWord("dopest")}`)
console.assert(encodeConsonantWord("thanks") === "anks-thay", `Should return anks-thay, returns ${encodeConsonantWord("thanks")}`)
console.assert(encodeConsonantWord("glove") === "ove-glay", `Should return ove-glay, returns ${encodeConsonantWord("glove")}`)

/*  --------------------------------------------------------
    encodeWord()

    Decide whether a given word starts with a vowel sound or consonant sound,
    and call encodeVowelWord(word) or encodeConsonantWord(word) when relevant.

    For example:
        "eat" becomes "eatyay" because it starts with a vowel "e"
        "omelet" becomes "omeletyay" because it starts with a vowel "o"
        "latin" becomes "atin-lay" because it starts with a consonant "l""
        "cheers" becomes "eers-chay" because it starts with a consonant cluster "ch"
        "you" becomes "ou-yay" because it starts with a consonant "y"
*/
function encodeWord(word) {
  let firstLetter = word.slice(0, 1)
  if (vowels.includes(firstLetter)) {
    return encodeVowelWord(word)
  } else {
    return encodeConsonantWord(word);
  }
}

// Write your unit tests here
console.assert(encodeWord("eat") === "eat-yay", "Should return eat-yay")
console.assert(encodeWord("omelet") === "omelet-yay", "Should return omelet-yay")
console.assert(encodeWord("latin") === "atin-lay", `Should return atin-lay, returns ${encodeWord("latin")}`)
console.assert(encodeWord("banana") === "anana-bay", `Should return anana-bay, returns ${encodeWord("banana")}`)
console.assert(encodeWord("cheers") === "eers-chay", `Should return eers-chay, returns ${encodeWord("cheers")}`)
console.assert(encodeWord("stupid") === "upid-stay", `Should return upid-stay, returns ${encodeWord("stupid")}`)
console.assert(encodeWord("string") === "ing-stray", `Should return ing-stray, returns ${encodeWord("string")}`)

/*  --------------------------------------------------------
    encodeText()    

    Encode a full sentence or paragraph from english to pig latin.
*/
function encodeText(text) {
  let textArray = text.split(" ")
  let codedText = ""
  for (let index = 0; index < textArray.length; index += 1) {
    let currentWord = textArray[index]
    let codedWord = encodeWord(currentWord)
    if (textArray.length - 1 === index){
      codedText += `${codedWord}`
    } else {
      codedText += `${codedWord} `
    }
  }
  return codedText; // replace this!
}

// Write your unit tests here
console.assert(encodeText("this text is for testing") === "is-thay ext-tay is-yay or-fay esting-tay", `Should return is-thay ext-tay is-yay or-fay esting-tay, returns ${encodeText("this text is for testing")}`)
console.assert(encodeText("this sentence is being translated to pig latin") === "is-thay entence-say is-yay eing-bay anslated-tray o-tay ig-pay atin-lay", `Should return is-thay entence-say is-yay eing-bay anslated-tray o-tay ig-pay atin-lay, returns ${encodeText("this sentence is being translated to pig latin")}`)