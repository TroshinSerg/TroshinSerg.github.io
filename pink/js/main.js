var html = document.querySelector("html");
var mainHeader = document.querySelector(".main-header");
var mainNavInner = document.querySelector(".main-nav__inner");
var mainNavToggle = document.querySelector(".main-nav__toggle");
var siteNav = document.querySelector(".site-nav");

html.classList.remove("no-js");

mainNavToggle.addEventListener("click", function (evt) {
  mainHeader.classList.toggle("main-header--opened");
  mainNavInner.classList.toggle("main-nav__inner--opened");
  siteNav.classList.toggle("site-nav--opened");
  mainNavToggle.classList.toggle("main-nav__toggle--opened");
});
