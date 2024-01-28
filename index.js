//Javascript Code
const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://p7lwp73r3lyl4z2u7yphsod47u0ywgrl.lambda-url.us-east-1.on.aws/");
        let data = await response.json();
        counter.innerHTML = `Views: ${data}`;
    } catch (error) {
        console.error("Error updating counter:", error);
    }
}

updateCounter();
