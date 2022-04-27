"use strict";
var current_date = new Date();
var year = current_date.getFullYear()
var month = current_date.getDate()
var day = current_date.getDay()
var date_pretty =new Date().toDateString()
document.getElementById("cur_date").innerText = date_pretty
document.getElementById("current_year").innerText= current_date.getFullYear();
function togglemenu() {
    document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
};