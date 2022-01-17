window.onload = function () {

    const deliveryInfoEl = document.querySelectorAll(".delivery__post-info");
    const deliveryButtons = document.querySelector(".delivery-inner__buttons");
    const checkBoxAddressEl = document.querySelectorAll(".delivery__row input[type=radio]");

    ///////////SEND ORDER//////////////
    const buttonSendEl = document.querySelector(".button__grey_send-order");
    const blockSendEl = document.querySelector(".send-order");
    const checkBoxSendOrderConfirmEl = document.querySelector("#confirm-send-order");
    ///////////CANCEL ORDER//////////////
    const blockCancelEl = document.querySelector(".cancel-delivery");
    const buttonCancelEl = document.querySelector(".button__grey_cancel-delivery");

    ///////////ADDRESS INPUT//////////////
    const checkBoxOtherAddressEl = document.querySelector("#other-address");
    const enterAddressInputEl = document.querySelector(".enter-address");

    ///////////OTHER INPUT//////////////
    const checkBoxOtherEl = document.querySelector("#other");
    const otherInputEl = document.querySelector(".cancel-delivery__input");

    ///////////KITEXPRESS///////////////
    const buttonSendKitExpressEl = document.querySelector(".send-kitexpress__button");
    const blockSendKitExpressEl = document.querySelector(".send-kitexpress");
    const sendKitExpressConfirmEl = document.querySelector(".button__silver_send-kitexpress__confirm");

    ///////////SEND ORDER//////////////
    const showSendBlock = () => {

        buttonSendEl.addEventListener("click", (ev) => {

            if (blockSendEl.classList.contains("hidden")) {
                blockSendEl.classList.remove("hidden");
                buttonSendEl.classList.add("button__active");
                buttonSendKitExpressEl.classList.add("button__disabled");
                buttonCancelEl.classList.add("button__disabled");
            } else {
                blockSendEl.classList.add("hidden");
                buttonSendEl.classList.remove("button__active");
                buttonSendKitExpressEl.classList.remove("button__disabled");
                buttonCancelEl.classList.remove("button__disabled");
            }
        });
    }
    showSendBlock();

    ///////////SELECT DATE///////////////
    const checkBoxSelectDateEl = document.querySelector("#select-date");
    const dateEl = document.querySelector(".date__outer");
    const showDateBlock = () => {

        checkBoxSelectDateEl.addEventListener("click", (ev) => {

            if (checkBoxSelectDateEl.checked) {
                dateEl.classList.remove("hidden");

            } else {
                dateEl.classList.add("hidden");


            }
        });
    }
    showDateBlock();

    const sendOrder = () => {

        checkBoxSendOrderConfirmEl.addEventListener("click", (ev) => {

            if (checkBoxSendOrderConfirmEl.checked) {
                buttonSendKitExpressEl.classList.add("hidden");
                deliveryInfoEl.forEach(element => {
                    if (element.classList.contains("hide")) {
                        element.classList.remove("hide");
                    }
                })
            }
        });
    }
    sendOrder();

    ///////////ADDRESS INPUT//////////////
    const showOtherAddressInput = () => {
        checkBoxAddressEl.forEach(element => {
            element.addEventListener("click", (ev) => {

                if (checkBoxOtherAddressEl.checked) {
                    enterAddressInputEl.classList.remove("hidden");
                } else {
                    enterAddressInputEl.classList.add("hidden");
                }
            });
        })


    }
    showOtherAddressInput();

    ///////////OTHER INPUT//////////////
    const showOtherInput = () => {
        checkBoxAddressEl.forEach(element => {
            element.addEventListener("click", (ev) => {

                if (checkBoxOtherEl.checked) {
                    otherInputEl.classList.remove("hidden");
                } else {
                    otherInputEl.classList.add("hidden");
                }
            });
        })


    }
    showOtherInput();


    ///////////CANCEL ORDER//////////////
    const showCancelBlock = () => {
        buttonCancelEl.addEventListener("click", (ev) => {

            if (blockCancelEl.classList.contains("hidden")) {
                blockCancelEl.classList.remove("hidden");
                buttonCancelEl.classList.add("button__active");
                buttonSendKitExpressEl.classList.add("button__disabled");
                buttonSendEl.classList.add("button__disabled");

            } else {
                blockCancelEl.classList.add("hidden");
                buttonCancelEl.classList.remove("button__active");
                buttonSendKitExpressEl.classList.remove("button__disabled");
                buttonSendEl.classList.remove("button__disabled");
            }
        });
    }
    showCancelBlock();


    ///////////KITEXPRESS///////////////
    const showSendKitExpressBlock = () => {

        buttonSendKitExpressEl.addEventListener("click", (ev) => {

            if (blockSendKitExpressEl.classList.contains("hidden")) {
                blockSendKitExpressEl.classList.remove("hidden");
                deliveryButtons.classList.add("hidden");
            } else {
                blockSendKitExpressEl.classList.add("hidden");
                deliveryButtons.classList.remove("hidden");

            }
        });
    }
    showSendKitExpressBlock();

    const sendKitExpressBlock = () => {
        sendKitExpressConfirmEl.addEventListener("click", (ev) => {
            deliveryInfoEl.forEach(element => {
                if (element.classList.contains("hide")) {
                    element.classList.remove("hide");
                    blockSendKitExpressEl.classList.add("hidden");
                    deliveryButtons.classList.remove("hidden");
                }
            })
        });
    }
    sendKitExpressBlock();

///////////////////SLIDER////////////////////
    const previewProductGlide1 = new Glide('.preview-product__glide-1', {
        type: 'slider',
        // autoplay: 3000,
        animationDuration: 500,
        perView: 1,
        startAt: 0,
        focusAt: 'center',
        rewind: false,
        keyboard: false,
        breakpoints: {
            1350: {
                perView: 1
            },

            770: {
                perView: 1
            }
        }
    })
    previewProductGlide1.mount();
    const previewProductGlide2 = new Glide('.preview-product__glide-2', {
        type: 'slider',
        // autoplay: 3000,
        animationDuration: 500,
        perView: 1,
        startAt: 0,
        focusAt: 'center',
        rewind: false,
        keyboard: false,
        breakpoints: {
            1350: {
                perView: 1
            },

            770: {
                perView: 1
            }
        }
    })
    previewProductGlide2.mount();
    const previewProductGlide3 = new Glide('.preview-product__glide-3', {
        type: 'slider',
        // autoplay: 3000,
        animationDuration: 500,
        perView: 1,
        startAt: 0,
        focusAt: 'center',
        rewind: false,
        keyboard: false,
        breakpoints: {
            1350: {
                perView: 1
            },

            770: {
                perView: 1
            }
        }
    })
    previewProductGlide3.mount();
    const productGlide1 = new Glide('.product__glide-1', {
        type: 'slider',
        // autoplay: 3000,
        animationDuration: 500,
        perView: 1,
        startAt: 0,
        focusAt: 'center',
        rewind: false,
        keyboard: false,
        breakpoints: {
            1350: {
                perView: 1
            },

            770: {
                perView: 1
            }
        }
    })
    productGlide1.mount();

}