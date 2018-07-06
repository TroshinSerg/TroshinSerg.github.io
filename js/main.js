// 1. находим элемент в DOM-дереве и записываем его в переменную
var mapLink = document.querySelector(".map-link");
var modalMap = document.querySelector(".modal-map");
if (modalMap) {
    var mapClose = modalMap.querySelector(".modal-close");
}
    		

var writeUsBtn = document.querySelector(".write-us-btn");
var modalWriteUs = document.querySelector(".modal-write-us");
    if (modalWriteUs) {
        var writeUsClose = modalWriteUs.querySelector(".modal-close");
        var feedbackName = modalWriteUs.querySelector(".feedback-name input");
        var feedbackEmail = modalWriteUs.querySelector(".feedback-email input");
        var feedbackMessage = modalWriteUs.querySelector(".feedback-message textarea");
        var writeUsForm = modalWriteUs.querySelector("form");
    }
var addProduct = document.querySelectorAll(".add-in-cart");
var modalProduct = document.querySelector(".modal-product-added");
var productClose = modalProduct.querySelector(".modal-close");
var continueShopping = modalProduct.querySelector(".continue-shopping");

// 2. отлавливаем событие клика по ссылке
if (modalMap) {
	mapLink.addEventListener("click", function (evt) {
		evt.preventDefault();
		modalMap.classList.add("modal-show");
	});
	mapClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		modalMap.classList.remove("modal-show");
	});
}            
if (modalWriteUs) {
	//////////////////////////// фокус в первое поле и проверка на пустые поля
	writeUsBtn.addEventListener("click", function (evt) {
		evt.preventDefault();
		modalWriteUs.classList.add("modal-show");
		feedbackName.focus();
	});
	writeUsForm.addEventListener("submit", function (evt) {
		if (!feedbackName.value || !feedbackEmail.value) {
			evt.preventDefault();
            modalWriteUs.classList.add("modal-error");
		}
	});
	writeUsClose.addEventListener("click", function (evt) {
		evt.preventDefault();
        modalWriteUs.classList.remove("modal-show");
        modalWriteUs.classList.remove("modal-error");
	});
}
///////////////////// модальное окно - товар добавлен
for (var i = 0; i < addProduct.length; i++) {
    addProduct[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        modalProduct.classList.add("modal-show");
    });
}
productClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalProduct.classList.remove("modal-show");
});
continueShopping.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalProduct.classList.remove("modal-show");
});
/////////////////// Закрываем модальное окно при нажатии клавиши ESC
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalMap.classList.contains("modal-show")) {
            evt.preventDefault();
            modalMap.classList.remove("modal-show");
        }
        if (modalWriteUs.classList.contains("modal-show")) {
            evt.preventDefault();
            modalWriteUs.classList.remove("modal-show");
        }
        if (modalProduct.classList.contains("modal-show")) {
            evt.preventDefault();
            modalProduct.classList.remove("modal-show");
        }
    }
});