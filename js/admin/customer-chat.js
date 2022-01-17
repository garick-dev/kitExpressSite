window.onload = function () {

    const userBlockEl = document.querySelectorAll(".user-block_customer-chat");
    const chatBlockEl = document.querySelector(".customer-chat__right");
    const buttonCloseUserBlockEl = document.querySelectorAll(".button__close_user-block");

    userBlockEl.forEach(element => {
        element.addEventListener("click", (ev) => {
            if (chatBlockEl.classList.contains("hidden")) {
                chatBlockEl.classList.remove("hidden");
                buttonCloseUserBlockEl.forEach(item => {
                    item.classList.add("hidden");
                })
            }
            else {
                chatBlockEl.classList.add("hidden");
                buttonCloseUserBlockEl.forEach(item => {
                    item.classList.remove("hidden");
                })
            }
        })
    })

}