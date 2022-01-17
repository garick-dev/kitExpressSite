window.onload = function () {
    const userBlockEl = document.querySelectorAll(".user-block_moderator-chat");
    const chatBlockEl = document.querySelector(".moderator-chat__right");

    userBlockEl.forEach(element => {
        element.addEventListener("click", (ev) => {
            if (!chatBlockEl.classList.contains("hidden")) {
                chatBlockEl.classList.add("hidden");
            }
            else {
                chatBlockEl.classList.remove("hidden");
            }
        })
    })

}