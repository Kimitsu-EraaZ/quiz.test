const btn1 = document.querySelector(".btn-1"),
  btn2 = document.querySelector(".btn-2"),
  btn3 = document.querySelector(".btn-3"),
  btn4 = document.querySelector(".btn-4");

const btn5 = document.querySelector(".btn-5"),
  btn6 = document.querySelector(".btn-6"),
  btn7 = document.querySelector(".btn-7"),
  btn8 = document.querySelector(".btn-8");

const btn11 = document.querySelector(".btn-11"),
  btn9 = document.querySelector(".btn-9"),
  btn10 = document.querySelector(".btn-10"),
  btn12 = document.querySelector(".btn-12");

const btn13 = document.querySelector(".btn-13"),
  btn14 = document.querySelector(".btn-14"),
  btn15 = document.querySelector(".btn-15"),
  btn16 = document.querySelector(".btn-16");

const btn17 = document.querySelector(".btn-17"),
  btn18 = document.querySelector(".btn-18"),
  btn19 = document.querySelector(".btn-19"),
  btn20 = document.querySelector(".btn-20");

const btn21 = document.querySelector(".btn-21"),
  btn22 = document.querySelector(".btn-22"),
  btn23 = document.querySelector(".btn-23"),
  btn24 = document.querySelector(".btn-24");

const quiz1 = document.querySelector(".box1"),
  quiz2 = document.querySelector(".box2"),
  quiz3 = document.querySelector(".box3"),
  quiz4 = document.querySelector(".box4"),
  quiz5 = document.querySelector(".box5"),
  quiz6 = document.querySelector(".box6");

const response = document.querySelector(".q1"),
  response2 = document.querySelector(".q2"),
  response3 = document.querySelector(".q3"),
  response4 = document.querySelector(".q4"),
  response5 = document.querySelector(".q5"),
  response6 = document.querySelector(".q6");

//quiz 1
function popupBasique(page) {
  window.open(page);
}
btn1.addEventListener("click", () => {
  quiz1.style.background = "green";
  response.style.visibility = "visible";
  alert("Bien jouer ! Tu gagne 1 point");
});
btn2.addEventListener("click", () => {
  quiz1.style.background = "red";
  alert("Essaie encore (è_é)");
});
btn3.addEventListener("click", () => {
  quiz1.style.background = "red";
  alert("Euh.. sérieux ?");
});
btn4.addEventListener("click", () => {
  quiz1.style.background = "red";
  alert("Pas mal, mais non ☻");
});

//quiz 2

btn5.addEventListener("click", () => {
  quiz2.style.background = "green";
  response2.style.visibility = "visible";
  alert("GG ! 1 point de plus");
});
btn6.addEventListener("click", () => {
  quiz2.style.background = "red";
  alert("BWAAAA !");
});
btn7.addEventListener("click", () => {
  quiz2.style.background = "red";
  alert("Ok..");
});
btn8.addEventListener("click", () => {
  quiz2.style.background = "red";
  alert("Hé non <_<");
});

//quiz 3

btn11.addEventListener("click", () => {
  quiz3.style.background = "green";
  response3.style.visibility = "visible";
  alert("Super, ajoute un point à ton total !");
});
btn9.addEventListener("click", () => {
  quiz3.style.background = "red";
  alert("Super ! (Spoiler: non xD)");
});
btn10.addEventListener("click", () => {
  quiz3.style.background = "red";
  alert("Ok..");
});
btn12.addEventListener("click", () => {
  quiz3.style.background = "red";
  alert("Peur ? Lui pff");
});

//quiz 4

btn13.addEventListener("click", () => {
  quiz4.style.background = "green";
  response4.style.visibility = "visible";
  alert("Bonne réponse ! + 1 point");
});
btn14.addEventListener("click", () => {
  quiz4.style.background = "red";
  alert("Ou pas !");
});
btn15.addEventListener("click", () => {
  quiz4.style.background = "red";
  alert("heu non..");
});
btn16.addEventListener("click", () => {
  quiz4.style.background = "red";
  alert("☜(ˆ▿ˆc)");
});

//quiz 5

btn17.addEventListener("click", () => {
  quiz5.style.background = "green";
  response5.style.visibility = "visible";
  alert(" Yata ! + 1 point");
});
btn18.addEventListener("click", () => {
  quiz5.style.background = "red";
  alert("結構です");
});
btn19.addEventListener("click", () => {
  quiz5.style.background = "red";
  alert("heu non..");
});
btn20.addEventListener("click", () => {
  quiz5.style.background = "red";
  alert("(ㆆ_ㆆ)");
});

//quiz 6

btn21.addEventListener("click", () => {
  quiz6.style.background = "green";
  response6.style.visibility = "visible";
  alert("(͠≖ ͜ʖ͠≖)👌 + 1 point");
});
btn22.addEventListener("click", () => {
  quiz6.style.background = "red";
  alert("NOOO GOD.. NO GOD PLEASE..NO..NO");
});
btn23.addEventListener("click", () => {
  quiz6.style.background = "red";
  alert("Hmm.. non");
});
btn24.addEventListener("click", () => {
  quiz6.style.background = "red";
  alert("いいえ--- ！お願い");
});
