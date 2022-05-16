// The Nav Thing "Burger"
var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var lineOne = document.querySelector('nav .menu-btn .line--1');
var lineTwo = document.querySelector('nav .menu-btn .line--2');
var lineThree = document.querySelector('nav .menu-btn .line--3');
var link = document.querySelector('nav .nav-links');
var block1 = document.querySelector('nav .block-1');
var block2 = document.querySelector('nav .block-2');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    block1.classList.toggle('block-1-open')
    block2.classList.toggle('block-2-open')
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
})

// TypeWrite Thing "Window.exe"
var app = document.getElementById("title").getElementsByClassName("app")[0];

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Window.exe')
    .pauseFor(10500)
    .deleteAll()
    .pauseFor(2000)
    .start();


// TypeWrite Thing "The Script Code"
var app1 = document.getElementById("test").getElementsByClassName("code-1")[0];
var app2 = document.getElementById("test").getElementsByClassName("code-2")[0];
var app3 = document.getElementById("test").getElementsByClassName("code-3")[0];
var app4 = document.getElementById("test").getElementsByClassName("code-4")[0];
var app5 = document.getElementById("test").getElementsByClassName("code-5")[0];
var app6 = document.getElementById("test").getElementsByClassName("code-6")[0];

var typewrite1 = new Typewriter(app1, {
    loop: true
});
typewrite1.typeString("$( function() {")
    .pauseFor(200000)
    .deleteAll()
    .pauseFor(10000)
    .start();

var typewrite2 = new Typewriter(app2, {
    loop: true
});
typewrite2.typeString("$( '.window-frame' ).draggable({")
    .pauseFor(200000)
    .deleteAll()
    .pauseFor(10000)
    .start();

var typewrite3 = new Typewriter(app3, {
    loop: true
});
typewrite3.typeString("cancel: '.window-body'")
    .pauseFor(200000)
    .deleteAll()
    .pauseFor(10000)
    .start();

var typewrite4 = new Typewriter(app4, {
    loop: true
});
typewrite4.typeString("});")
    .pauseFor(200000)
    .deleteAll()
    .pauseFor(10000)
    .start();

var typewrite5 = new Typewriter(app5, {
    loop: true
});
typewrite5.typeString("} );")
    .pauseFor(200000)
    .deleteAll()
    .pauseFor(10000)
    .start();


    var typewrite6 = new Typewriter(app6, {
    loop: true
});
typewrite6.typeString("revert: true,")
    .pauseFor(200000)
    .deleteAll()
    .pauseFor(10000)
    .start();