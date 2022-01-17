window.onload = function () {

    const answerButtonEl = document.querySelector(".reviews__answer_button");
    const answerEl = document.querySelector(".reviews__answer");
    const answerBlockEl = document.querySelector(".banner");

    const disputeButtonEl = document.querySelector(".reviews__dispute");
    const chatBlockEl = document.querySelector(".reviews__right-side");


    const sendButtonEl = document.querySelector(".banner__send");

    const showAnswerBlock = () => {
                answerButtonEl.addEventListener("click", (ev) =>{
                    if (answerBlockEl.classList.contains("hide")) {
                        answerBlockEl.classList.remove("hide");
                        ev.target.classList.add("button__active");
                        disputeButtonEl.classList.add("button__disabled");
                    }
                    else {
                        answerBlockEl.classList.add("hide");
                        ev.target.classList.remove("button__active");
                        disputeButtonEl.classList.remove("button__disabled");
                    }
                })

    }
    showAnswerBlock();

    const showChatBlock = () => {
           disputeButtonEl.addEventListener("click", (ev) =>{
               if (chatBlockEl.classList.contains("hidden")) {
                   ev.target.classList.add("button__active");
                   chatBlockEl.classList.remove("hidden");
                   answerButtonEl.classList.add("button__disabled");
               }
               else {
                   ev.target.classList.remove("button__active");
                   chatBlockEl.classList.add("hidden");
                   answerButtonEl.classList.remove("button__disabled");
               }
        });
    }
    showChatBlock();

    const showAnswer = () => {
            sendButtonEl.addEventListener("click", (ev) => {
                if (!answerBlockEl.classList.contains("hide")) {
                            answerBlockEl.classList.add("hide");
                            answerEl.classList.remove("hide");
                            answerButtonEl.classList.add("hide");
                            disputeButtonEl.classList.add("hide");
                        }
                        else {
                            answerBlockEl.classList.remove("hide");
                            answerEl.classList.add("hide");
                            answerButtonEl.classList.remove("hide");
                            disputeButtonEl.classList.remove("hide");
                        }

                });

    }
    showAnswer();
}

