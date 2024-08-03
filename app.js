const lift = document.getElementById("lift");
const buttonsContainer = document.getElementById("buttons");
const floor = document.getElementsByClassName("floors");

buttonsContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const position = event.target.getAttribute("data-floor");
        
        // Check if the lift is already at the target floor
        if (lift.style.bottom !== position + "%") {
            const buttons = buttonsContainer.getElementsByTagName("button");
            for (let button of buttons) {
                button.disabled = true;
            }

            lift.addEventListener('transitionend', () => {
                for (let button of buttons) {
                    button.disabled = false;
                }
            }, { once: true });

            lift.style.bottom = position + "%";
        }
    }
});