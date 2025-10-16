window.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector(".gallery-container");
    let elements = document.querySelectorAll(".gallery-element");
    let focused = null;

    elements.forEach((element) => {
        element.addEventListener("click", () => {
            let scrollBehavior = "instant";
            if (element !== focused) {
                if (focused != null) {
                    focused.classList.remove("focused-element");
                    scrollBehavior = "smooth"
                }
                element.classList.add("focused-element");
                container.classList.add("gallery-container-focused");
                focused = element;
            } else {
                focused.classList.remove("focused-element");
                container.classList.remove("gallery-container-focused");
                focused = null;
            }

            element.scrollIntoView({
                behavior: scrollBehavior,
                block: "center",
                inline: "center"
            });
        });
    });
});
