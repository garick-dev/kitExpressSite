window.onload = function ()
{
    const buttonEl = document.querySelector(".tasks__button");
    const chatBlockEl = document.querySelector(".tasks__right-side");


    const showChatBlock = () => {
        buttonEl.addEventListener("click", (ev) => {

            if(chatBlockEl.classList.contains("hidden")) {
                chatBlockEl.classList.remove("hidden");
            }
            else {
                chatBlockEl.classList.add("hidden");
            }
        });
    };
    showChatBlock();


}
