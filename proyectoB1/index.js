'use strict'
console.log('Funciona');
$(document).ready(function(){
    console.log("JQuery cargao");

    if(window.location.href.indexOf("index") > -1){
        setInterval(function(){
            var clock = moment().format("hh:mm:ss a");
            $("#clock").html(clock); 
        },1000);
    }
    $("#goIndex").hover(function(){
        console.log("Funciona. ");
    });
});