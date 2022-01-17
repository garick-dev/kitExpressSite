window.onload = function () {
    const editBlockEl = document.querySelector(".edit");
    const editButton = document.querySelector(".product-card__button_edit");
    const showEditBlock = () => {
        editButton.addEventListener("click", (ev) =>{
            if (editBlockEl.classList.contains("hidden")) {
                editBlockEl.classList.remove("hidden");
                editButton.classList.add("product-card__button_active");
            }
            else {
                editBlockEl.classList.add("hidden");
                editButton.classList.remove("product-card__button_active");

            }
        })
    }
    showEditBlock();

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