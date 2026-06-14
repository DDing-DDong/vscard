document.addEventListener("DOMContentLoaded", function () {
    console.log("Digital business card loaded.");

    const card = document.querySelector(".card");
    const emailButton = document.querySelector(".mail");
    const emailText = emailButton ? emailButton.textContent.trim() : "";

    // 1. 마우스를 올리면 카드가 떠오르는 효과
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

    // 2. 이메일 클릭 시 클립보드 복사
    if (emailButton && emailText) {
        emailButton.addEventListener("click", function (event) {
            event.preventDefault();

            navigator.clipboard.writeText(emailText)
                .then(function () {
                    const originalText = emailButton.textContent;

                    emailButton.textContent = "이메일 복사 완료!";

                    setTimeout(function () {
                        emailButton.textContent = originalText;
                    }, 1500);
                })
                .catch(function () {
                    alert("이메일 복사에 실패했습니다.");
                });
        });
    }
});