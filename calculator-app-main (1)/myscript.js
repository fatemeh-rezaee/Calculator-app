// code theme-numberha :

function theme1() {
  document.getElementById("demo").style.backgroundColor = " hsl(222, 26%, 31%)";
  document.querySelector(".keypad").style.backgroundColor =
    " hsl(223, 31%, 20%)";
  document.querySelector(".toggle").style.backgroundColor =
    " hsl(223, 31%, 20%)";
  document.querySelector(".screen").style.backgroundColor =
    "hsl(224, 36%, 15%)";
  document.querySelector(".screen").style.color = "white";
  document.querySelector(".num").style.color = "white";
  document.querySelector(".title").style.color = "white";
  document.querySelector(".checkmark").style.backgroundColor =
    "hsl(6, 63%, 50%)";
  document.getElementById("three").style.opacity = "0";
  document.getElementById("first").style.opacity = "1";
  document.getElementById("first").style.backgroundColor = " hsl(6, 63%, 50%)";
  document.getElementById("two").style.opacity = "0";
  document.querySelector(".del").style.backgroundColor = " hsl(225, 21%, 49%)";
  document.querySelector(".del").style.boxShadow =
    "0px 3px 0px 0px hsl(224, 28%, 35%)";
  document.querySelector(".reset").style.backgroundColor = "hsl(225, 21%, 49%)";
  document.querySelector(".reset").style.boxShadow =
    "0px 3px 0px 0px hsl(224, 28%, 35%)";
  document.querySelector(".equal").style.backgroundColor = " hsl(6, 63%, 50%)";
  document.querySelector(".equal").style.boxShadow =
    "0px 3px 0px 0px hsl(6, 70%, 34%)";

  var btns = document.querySelectorAll(".button");
  var i;
  for (i = 0; i < btns.length; i++) {
    // console.log("test");
    btns[i].style.backgroundColor = " hsl(30, 25%, 89%)";
    btns[i].style.color = "hsl(223, 31%, 20%)";
    btns[i].style.boxShadow = "0px 3px 0px 0px hsl(28, 16%, 65%)";
  }
}
function theme2() {
  document.getElementById("demo").style.backgroundColor = "hsl(0, 0%, 90%)";
  document.querySelector(".toggle").style.backgroundColor = " hsl(0, 5%, 81%)";
  document.querySelector(".keypad").style.backgroundColor = " hsl(0, 5%, 81%)";
  document.querySelector(".screen").style.backgroundColor = " hsl(0, 0%, 93%)";
  document.querySelector(".screen").style.color = "black";
  document.querySelector(".num").style.color = "black";
  document.querySelector(".title").style.color = "black";
  document.querySelector(".checkmark").style.backgroundColor =
    "hsl(25, 98%, 40%)";
  document.getElementById("three").style.opacity = "0";
  document.getElementById("first").style.opacity = "0";
  document.getElementById("two").style.opacity = "1";
  document.getElementById("two").style.backgroundColor = "hsl(25, 98%, 40%)";
  document.querySelector(".del").style.backgroundColor = "hsl(185, 42%, 37%)";
  document.querySelector(".del").style.boxShadow =
    "0px 3px 0px 0px  hsl(185, 58%, 25%)";
  document.querySelector(".reset").style.backgroundColor = "hsl(185, 42%, 37%)";
  document.querySelector(".reset").style.boxShadow =
    "0px 3px 0px 0px hsl(185, 58%, 25%)";
  document.querySelector(".equal").style.backgroundColor = "hsl(25, 98%, 40%)";
  document.querySelector(".equal").style.boxShadow =
    "0px 3px 0px 0px  hsl(25, 99%, 27%)";
  var btns = document.querySelectorAll(".button");
  var i;
  for (i = 0; i < btns.length; i++) {
    btns[i].style.backgroundColor = " hsl(30, 25%, 89%)";
    btns[i].style.color = "black";
    btns[i].style.boxShadow = "0px 3px 0px 0px  hsl(35, 11%, 61%)";
  }
}

function theme3() {
  document.getElementById("demo").style.backgroundColor = "hsl(268, 75%, 9%)";
  // (Key Pad) Customize Style
  document.querySelector(".keypad").style.backgroundColor =
    "hsl(268, 71%, 12%)";
  //
  document.querySelector(".toggle").style.backgroundColor =
    " hsl(268, 71%, 12%)";
  document.querySelector(".screen").style.backgroundColor =
    " hsl(268, 71%, 12%)";
  document.querySelector(".screen").style.color = " hsl(52, 100%, 62%)";
  document.querySelector(".num").style.color = "hsl(52, 100%, 62%)";
  document.querySelector(".title").style.color = "hsl(52, 100%, 62%)";
  document.getElementById("three").style.opacity = "1";
  document.getElementById("three").style.backgroundColor =
    "hsl(176, 100%, 44%)";
  document.getElementById("first").style.opacity = "0";
  document.getElementById("two").style.opacity = "0";
  document.querySelector(".checkmark").style.backgroundColor =
    "hsl(176, 100%, 44%)";
  document.querySelector(".del").style.backgroundColor = "hsl(290, 70%, 36%)";
  document.querySelector(".del").style.boxShadow =
    "0px 3px 0px 0px hsl(285, 91%, 52%)";
  document.querySelector(".reset").style.backgroundColor = "hsl(290, 70%, 36%)";
  document.querySelector(".reset").style.boxShadow =
    "0px 3px 0px 0px  hsl(285, 91%, 52%)";
  document.querySelector(".equal").style.backgroundColor =
    "hsl(176, 100%, 44%)";
  document.querySelector(".equal").style.boxShadow =
    "0px 3px 0px 0px hsl(177, 92%, 70%)";

  var btns = document.querySelectorAll(".button");
  var i;
  for (i = 0; i < btns.length; i++) {
    console.log("test");
    btns[i].style.backgroundColor = " hsl(268, 47%, 21%)";
    btns[i].style.color = "hsl(52, 100%, 62%)";
    btns[i].style.boxShadow = "0px 3px 0px 0px hsl(285, 91%, 52%)";
  }
}

// Codehaye Mohasebati :

let outputscreen = document.getElementById("output-screen");
function display(number) {
  outputscreen.value += number;
}
let equal = () => {
  try {
    outputscreen.value = eval(outputscreen.value);
  } catch (err) {}
};
function del() {
  outputscreen.value = outputscreen.value.slice(0, -1);
}
function reset() {
  outputscreen.value = "";
}

function mountTheme() {
  document.getElementById("first").style.opacity = "1";
  document.getElementById("first").style.backgroundColor = " hsl(6, 63%, 50%)";
  document.querySelector(".title").style.color = "white";
  document.querySelector(".num").style.color = "white";
  document.querySelector(".del").style.backgroundColor = " hsl(225, 21%, 49%)";
  document.querySelector(".del").style.boxShadow =
    "0px 3px 0px 0px hsl(224, 28%, 35%)";
  document.querySelector(".reset").style.backgroundColor = "hsl(225, 21%, 49%)";
  document.querySelector(".reset").style.boxShadow =
    "0px 3px 0px 0px hsl(224, 28%, 35%)";
  document.querySelector(".equal").style.backgroundColor = " hsl(6, 63%, 50%)";
  document.querySelector(".equal").style.boxShadow =
    "0px 3px 0px 0px hsl(6, 70%, 34%)";
    var btns = document.querySelectorAll(".button");
    var i;
    for (i = 0; i < btns.length; i++) {
      // console.log("test");
      btns[i].style.backgroundColor = " hsl(30, 25%, 89%)";
      btns[i].style.color = "hsl(223, 31%, 20%)";
      btns[i].style.boxShadow = "0px 3px 0px 0px hsl(28, 16%, 65%)";
    }
}
mountTheme();
