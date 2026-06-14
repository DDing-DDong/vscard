document.addEventListener("DOMContentLoaded", function () {

    const card = document.querySelector(".card");
    const emailButton = document.querySelector(".mail");
    const callButton = document.querySelector(".call");

    const emailAddress = "abffks3@naver.com";
    const phoneNumber = "010-5888-7773";

    if (card) {
        card.style.transition = "transform 0.25s ease, box-shadow 0.25s ease";

        card.addEventListener("mouseenter", function () {
            card.style.transform = "translateY(-12px)";
            card.style.boxShadow = "0 25px 60px rgba(13, 83, 246, 0.18)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 15px 35px rgba(13, 83, 246, 0.12)";
        });
    }

    if (emailButton) {
        emailButton.addEventListener("click", function (event) {
            event.preventDefault();
            copyText(emailAddress, emailButton, "복사 완료!");
        });
    }

    if (callButton) {
        callButton.addEventListener("click", function (event) {
            event.preventDefault();
            copyText(phoneNumber, callButton, "복사 완료!");
        });
    }

    function copyText(text, button, successMessage) {
        const originalText = button.textContent;

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text)
                .then(function () {
                    showSuccess(button, originalText, successMessage);
                })
                .catch(function () {
                    fallbackCopyText(text, button, originalText, successMessage);
                });

            return;
        }

        fallbackCopyText(text, button, originalText, successMessage);
    }

    function fallbackCopyText(text, button, originalText, successMessage) {
        const textarea = document.createElement("textarea");

        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        textarea.style.top = "-9999px";

        document.body.appendChild(textarea);
        textarea.select();

        try {
            document.execCommand("copy");
            showSuccess(button, originalText, successMessage);
        } catch (error) {
            alert("복사에 실패했습니다.");
            console.error(error);
        }

        document.body.removeChild(textarea);
    }

    function showSuccess(button, originalText, successMessage) {
        button.textContent = successMessage;

        setTimeout(function () {
            button.textContent = originalText;
        }, 1500);
    }

});