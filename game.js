player1name=localStorage.getItem("player1key")
player2name=localStorage.getItem("player2key")
player1score=0
player2score=0
document.getElementById("player1Name").innerHTML=player1name
document.getElementById("player2Name").innerHTML=player2name

document.getElementById("player1Score").innerHTML=player1score
document.getElementById("player2Score").innerHTML=player2score

document.getElementById("playerQuestion").innerHTML="turno da pergunta"+player1name
document.getElementById("playerAnswer").innerHTML="turno da resposta"+player2name
function send() {
   
    getWord=document.getElementById("word").value  
    word=getWord.toLowerCase()
    charAt1=word.charAt(1)
    dividir=Math.floor(word.length/2)
    charAt2=word.charAt(dividir)
    ultima=word.length-1
    charAt3=word.charAt(ultima)
    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
    console.log(removeCharAt3);

    question_word = '<h4 id="wordDisplay"> P. ' + removeCharAt3 + "</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_word + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

questionTurn = "player1";
answerTurn = "player2";


function check() {
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();
    console.log("resposta em caixa baixa - " + answer);
    if (answer == word) {
        if (answerTurn == "player1") {
            player1score = player1score + 1;
            document.getElementById("player1Score").innerHTML = player1score;
        }
        else {
            player2score = player2score + 1;
            document.getElementById("player2Score").innerHTML = player2score;
        }
    }
    if (questionTurn == "player1") {
        questionTurn = "player2"
        document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player2name;
    }
    else {
        questionTurn = "player1"
        document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1name;
    }

    if (answerTurn == "player1") {
        answerTurn = "player2"
        document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2name;
    }
    else {
        answerTurn = "player1"
        document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player1name;
    }

    document.getElementById("output").innerHTML = "";
}