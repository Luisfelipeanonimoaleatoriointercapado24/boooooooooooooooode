// Crie a função login aqui.
function Login() {
    player_name = document.getElementById("playername").ariaValueMax;
    localStorage.setitem("playername", playername);

    window.location = "gamepage.html";
}

<div>
    <label for="guessField">Insira Sua Resposta</label>
    <br>
    <input type = "text" id = "guessField" class = "guessField"
</br>
<button type = "submit" onclick="submit()">Enviar
</button>
<button onclick="playAgain()">Jogar Novamente
</button>
</div>