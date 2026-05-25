//document.writeln("Hello World !!!");
//window.alert("Hello World Again!!!");
document.getElementById("title").innerHTML = "Hello World, I like JavaScript!"

let namePrompt = window.prompt("What's your name ?")

document.getElementById("name").innerHTML = namePrompt

let name = window.confirm("Do you like JavaScript ?")


if (resp) {
    document.getElementById("resposta").innerHTML = "YES! The student is enjoying JavaScript class"
}
else {
    document.getElementById("resposta").innerHTML = "NO! The student doesn't like JavaScript class"
}

function sendName() {
    let nameAnswer = document.getElementById("ImputName").value

    const Answer = document.getElementById("conteinerAnswer")

    Answer.innerHTML = "The name write is " + nameAnswer
    Answer.style.display = "flex"
    Answer.style.height = "150px";
    Answernswer.style.backgroundImage = "linear-gradient(to right, red-orange,yellow,green,blue,indigo,violet)";
    Answer.style.justifyContent = "Center"
    Answer.style.alignItems = "Center"

    Answer.style.fontSize = "20px";

    Answer.style.border = "2px solid #ff0000"
}