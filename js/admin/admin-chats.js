window.onload = function () {

    const userBlockEl = document.querySelectorAll(".user-block_customer-chat");
    const chatBlockEl = document.querySelector(".customer-chat__right");
    const searchBlockEl = document.querySelector(".search");
    const buttonsControlEl = document.querySelector(".chats__buttons_control");
    const buttonCloseUserBlockEl = document.querySelectorAll(".button__close_user-block");

    const modalBlockEl = document.querySelector(".modal");
    const publishButtonEl = document.querySelector(".button__confirm");
    const popupConfirmButtonEl = document.querySelector(".button__silver_popup");


    const showButtonsControl = () => {
        userBlockEl.forEach(element => {
            element.addEventListener("click", (ev) => {
                if (chatBlockEl.classList.contains("hidden")) {
                    chatBlockEl.classList.remove("hidden");
                    searchBlockEl.classList.add("hidden");
                    buttonsControlEl.classList.remove("hidden");
                    buttonCloseUserBlockEl.forEach(item => {
                        item.classList.add("hidden");
                    })
                }
                else {
                    chatBlockEl.classList.add("hidden");
                    searchBlockEl.classList.remove("hidden");
                    buttonsControlEl.classList.add("hidden");
                    buttonCloseUserBlockEl.forEach(item => {
                        item.classList.remove("hidden");
                    })
                }
            })
        })
    }
    showButtonsControl();



    const showModalBlock = () => {
        publishButtonEl.addEventListener("click", (ev) =>{
            if (modalBlockEl.classList.contains("hidden")) {
                modalBlockEl.classList.remove("hidden");
                publishButtonEl.classList.add("button__active");
            }
        })
    }
    showModalBlock();

    const confirmPublish = () => {
        popupConfirmButtonEl.addEventListener("click", (ev) => {
            modalBlockEl.classList.add("hidden");

        });
    }
    confirmPublish();

}