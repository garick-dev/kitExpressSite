window.onload = function () {
    const modalBlockEl = document.querySelector(".modal");
    const publishButtonEl = document.querySelector(".button__confirm");
    const popupConfirmButtonEl = document.querySelector(".button__silver_popup");
    const publishedTextEl = document.querySelector(".published");


    const declineButtonEl = document.querySelector(".button__decline");
    const declineBlockEl = document.querySelector(".decline");
    const declineConfirmButtonEl = document.querySelector(".decline__confirm");
    const declineTextEl = document.querySelector(".text_error");


    const showModalBlock = () => {
        publishButtonEl.addEventListener("click", (ev) =>{
            if (modalBlockEl.classList.contains("hidden")) {
                modalBlockEl.classList.remove("hidden");
                publishButtonEl.classList.add("product-card__button_active");
            }
        })
    }
    showModalBlock();

    const confirmPublish = () => {
        popupConfirmButtonEl.addEventListener("click", (ev) => {
            modalBlockEl.classList.add("hidden");
            publishedTextEl.classList.remove("hidden");
            publishButtonEl.classList.add("hidden");
            declineButtonEl.classList.add("button__disabled");
        });
    }
    confirmPublish();

    const showDeclineBlock = () => {
        declineButtonEl.addEventListener("click", (ev) => {
            if  (declineBlockEl.classList.contains("hidden")) {
                declineBlockEl.classList.remove("hidden");
                declineButtonEl.classList.add("button__active");
                publishButtonEl.classList.add("button__disabled");
            }
            else {
                declineBlockEl.classList.add("hidden");
                declineButtonEl.classList.remove("button__active");
                publishButtonEl.classList.remove("button__disabled");
            }
        });
    }
    showDeclineBlock();

    const confirmDecline = () => {
        declineConfirmButtonEl.addEventListener("click", (ev) => {
            declineButtonEl.classList.add("hidden");
            declineBlockEl.classList.add("hidden");
            declineTextEl.classList.remove("hidden");

        })
    }
    confirmDecline();

    const productCardGlide1 = new Glide('.product-card__glide-1', {
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
    productCardGlide1.mount();

}