const secretSequence = ["b", "i", "l", "e", "l"];
let userSequence = new Array(secretSequence.length);
window.addEventListener("keydown", ({ key }) => {
  userSequence = [...userSequence.slice(1), key];

  if (secretSequence.every((el, k) => el === userSequence[k])) {
    console.log("yeah boii it works");
    cornify_add();
  }
});
