const change = document.getElementById("change")

function change_all(){
   if (document.getElementsByTagName('div') [2]. innerText==='Nekiforov')  {
   
       document.getElementsByTagName('div') [2]. innerText='Некифоров'
       document.getElementsByTagName('div') [3]. innerText='Фёдор';
       document.getElementsByTagName('div') [5]. innerText='17.03.2000';
}
else
if (document.getElementsByTagName('div') [2]. innerText==='Некифоров'){
    document.getElementsByTagName('div') [2]. innerText='Nekiforov';
    document.getElementsByTagName('div') [3]. innerText='Fedor';
    document.getElementsByTagName('div') [5]. innerText='18.04.2000';
}
}
change.addEventListener("click",change_all)