window.onload = function () {
    const showReturnBlock = () => {
        const buttonEl = document.querySelector(".issue-return");
        const blockEl = document.querySelector(".return-inner__issue_return");
        const buttonConfirmEl = document.querySelector(".return-inner__confirm");

        const buttonsEl = document.querySelectorAll(".button__grey_return-inner");

        const showReturnBlock = () => {
            buttonEl.addEventListener("click", (ev) => {

                if (blockEl.classList.contains("hidden")) {
                    blockEl.classList.remove("hidden");
                    buttonEl.classList.add("button__active");
                } else {
                    blockEl.classList.add("hidden");
                    buttonEl.classList.remove("button__active");
                }
            });
        }
        showReturnBlock();

        const confirmReturn = () => {
            buttonConfirmEl.addEventListener("click", (ev) => {
                buttonsEl.forEach(element => {
                    if(!element.classList.contains("button__disabled")) {
                        element.classList.add("button__disabled");
                        blockEl.classList.add("hidden");
                        buttonEl.classList.remove("button__active");
                    }
                    else {
                        element.classList.remove("button__disabled");
                        blockEl.classList.remove("hidden");
                    }
                })
            });
        }
        confirmReturn();
    }

    showReturnBlock();
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