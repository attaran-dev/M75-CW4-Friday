const sentence = "Cras mattis consectetur purus sit amet fermentum.";
function findWord(word) {
  const words = sentence.split(" ");
  return words.includes(word);
}
let wordInput = prompt();
findWord(wordInput);
