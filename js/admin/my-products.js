window.onload = function () {


    const productCardGlide1 = new Glide('.preview-product__glide-1', {
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