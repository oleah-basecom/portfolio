window.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector(".gallery-container");
    let elements = document.querySelectorAll(".gallery-element");
    let buttons = document.getElementById("gallery-buttons");
    let focused = null;

    elements.forEach((element, index) => {
        element.addEventListener("click", () => {
            if (index !== focused) {
                animate_focus(index);
            } else {
                elements[focused].classList.remove("focused-element");
                container.classList.remove("gallery-container-focused");
                buttons.classList.remove("active");
                focused = null;
                element.scrollIntoView({
                    behavior: "instant",
                    block: "center",
                    inline: "center"
                });
            }
        });
    });

    function animate_focus(index) {
        let scrollBehavior = "instant";
        if (focused != null) {
            elements[focused].classList.remove("focused-element");
            scrollBehavior = "smooth";
        }

        focused = index;
        elements[focused].classList.add("focused-element");
        container.classList.add("gallery-container-focused");
        buttons.classList.add("active");



        elements[focused].scrollIntoView({
            behavior: scrollBehavior,
            block: "center",
            inline: "center"
        });
    }

    document.getElementById("button-left").addEventListener("click", () => {
        if (focused === 0) {
            animate_focus(elements.length - 1)
        } else {
            animate_focus(focused - 1);
        }
    });

    document.getElementById("button-right").addEventListener("click", () => {
        animate_focus((focused + 1) % elements.length);
    });
});
