document.addEventListener("DOMContentLoaded", function () {

    const card = document.querySelector(".card");
    const emailButton = document.querySelector(".mail");
    const emailAddress = "abffks3@naver.com";

    // 카드 떠오르는 효과
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

    // 이메일 복사
    if (emailButton) {
        emailButton.addEventListener("click", async function (event) {
            event.preventDefault();

            try {
                await navigator.clipboard.writeText(emailAddress);

                const originalText = emailButton.textContent;

                emailButton.textContent = "복사 완료!";

                setTimeout(function () {
                    emailButton.textContent = originalText;
                }, 1500);

            } catch (error) {
                alert("이메일 복사에 실패했습니다.");
                console.error(error);
            }
        });
    }

});