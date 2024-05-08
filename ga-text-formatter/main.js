//characters: ɛ ɔ ŋ

function formatText() {
  let textInput = document.getElementById("text-input").value;
  if(textInput != ""){
    //checks if '3' is not preceded by '\' and replaces it with 'ɛ'
  let formatted = textInput.replace(/(?<!\\)3/g, "ɛ");
  //replaces '\3' with '3'
  formatted = formatted.replace(/\\3/g, "3");
  //checks if ')' is not preceded by '\' and replaces it with 'ɔ'
  formatted = formatted.replace(/(?<!\\)\)/g, "ɔ");
  //replaces '\)' with ')'
  formatted = formatted.replace(/\\\)/g, ")");
  //replaces 'ng' with 'ŋ'
  formatted = formatted.replace(/ng|Ng/g, "ŋ");
  //replaces a new line '\n' with line breaks '<br>'
  formatted = formatted.replace(/\n/g, "<br>")
  
  let output = document.getElementById("output").innerHTML = formatted;
  } else {
    alert("Please enter some text first.");
  }
}

function clearField() {
  let textInput = document.getElementById("text-input").value = "";
  let output = document.getElementById("output").innerHTML = "Output";
}

function saveText() {
  let textInput = document.getElementById("text-input").value;
  let textObj = {text: textInput};
  localStorage.setItem("savedText", JSON.stringify(textObj));
}

function restoreText() {
  let textObj = JSON.parse(localStorage.getItem("savedText"));
  let textInput = document.getElementById("text-input").value = textObj.text;
}

function showHelp() {
  alert(`Enter the characters on the left to get the characters on the right.\n
  3 -> ɛ
  ) -> ɔ
  ng -> ŋ\n
 To escape a character, add a backslash (\\) before it. This allows you to display the character as it is.\n
  \\3 -> 3
  \\) -> )
  `)
}

function showDemo() {
  let textInput = document.getElementById("text-input").value = "Ats3) mi Philip Boye Addo. Mij3 La y3 Ghana mang l3 mling. Misum)) k)mi k3 shit) k3 loo ni ashi.";
                                    }
