function checkStage() {

    const S = parseFloat(document.getElementById("S").value);
    const R = parseFloat(document.getElementById("R").value);
    const K = parseFloat(document.getElementById("K").value);


    const L = Math.sqrt(S).toFixed(2); 
    const C = (L - 2 * R).toFixed(2); 

    const canFit = C >= K;

    let resultText = `Оставшееся длина зала: ${C}<br>`;
    resultText += canFit ? "Можно." : "Нельзя.";

    document.getElementById("result").innerHTML = resultText;


    document.getElementById("formS").value = S;
    document.getElementById("formR").value = R;
    document.getElementById("formK").value = K;
    document.getElementById("formL").value = L;
    document.getElementById("formC").value = C;
    document.getElementById("formResult").value = canFit ? "Можно." : "Нельзя.";
    return canFit;
}

function sendData() {
    if (checkStage()) {
        document.getElementById("sendForm").submit();
    } else {
      
        alert("Отправка невозможна: условие не выполнено.");
    }
}
