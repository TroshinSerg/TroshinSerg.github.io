var headerInner = document.querySelector(".main-header__inner"),
    headerToggle = document.querySelector(".main-header__toggle"),
    headerNav = document.querySelector(".main-header__nav"),
    headerContacts = document.querySelector(".main-header__contacts");

headerToggle.addEventListener("click", function (evt) {
  headerToggle.classList.toggle("main-header__toggle--opened");
  headerInner.classList.toggle("main-header__inner--opened");
  headerNav.classList.toggle("main-header__nav--opened");
  headerContacts.classList.toggle("main-header__contacts--opened");
});
