document.addEventListener("DOMContentLoaded", () => {
    const filterButtonEl = document.querySelector(".filter__option");
    const filterBlockEl = document.querySelector(".filter__inner");
    const filterWrapperEl = document.querySelector(".filter");

    const showFilterBlock = () => {
        filterButtonEl.addEventListener("click", (ev) => {
            if (filterBlockEl.classList.contains("hide") && !filterButtonEl.classList.contains("filter__active")) {
                filterBlockEl.classList.remove("hide");
                filterWrapperEl.classList.add("filter__active");
            }
            else {
                filterBlockEl.classList.add("hide");
                filterWrapperEl.classList.remove("filter__active");
            }
        })
    }
    showFilterBlock();


    /*//////////////////PRICE SLIDER RANGE//////////////*/
    let sliderPrice = document.querySelector('.filter__price-slider');

    noUiSlider.create(sliderPrice, {
        start: [0, 64243],
        connect: true,
        range: {
            'min': 0,
            'max': 64243
        }
    });


    const minPriceEl = document.querySelector("#filter__price_min");
    const maxPriceEl = document.querySelector("#filter__price_max");
    const priceArr = [minPriceEl, maxPriceEl];

    sliderPrice.noUiSlider.on("update", function (values, handle) {
       priceArr[handle].value = Math.round(values[handle]);
    });

    const setRangeSliderPrice = (i, value) => {
        let arr = [null, null];
        arr[i] = value;
        sliderPrice.noUiSlider.set(arr);
    }

    priceArr.forEach((el,index) => {
       el.addEventListener("change", (ev) => {
           setRangeSliderPrice(index, ev.currentTarget.value);
       })
    });


    /*//////////////////WEIGHT SLIDER RANGE//////////////*/
    let sliderWeight = document.querySelector('.filter__weight-slider');

    noUiSlider.create(sliderWeight, {
        start: [2, 40223],
        connect: true,
        range: {
            'min': 2,
            'max': 40223
        }
    });


    const minWeightEl = document.querySelector("#filter__weight_min");
    const maxWeightEl = document.querySelector("#filter__weight_max");
    const weightArr = [minWeightEl, maxWeightEl];

    sliderWeight.noUiSlider.on("update", function (values, handle) {
        weightArr[handle].value = Math.round(values[handle]);
    });

    const setRangeSliderWeight = (i, value) => {
        let arr = [null, null];
        arr[i] = value;
        sliderWeight.noUiSlider.set(arr);
    }

    weightArr.forEach((el,index) => {
        el.addEventListener("change", (ev) => {
            setRangeSliderWeight(index, ev.currentTarget.value);
        })
    });
});





