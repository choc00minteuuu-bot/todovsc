// CHECKBOX
document.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
        const item = e.target.parentElement;
        item.style.opacity = e.target.checked ? "0.5" : "1";
    }
});

// AMBIL ELEMENT
const addBtn = document.getElementById("addBtn");
const input = document.getElementById("taskInput");
const list = document.getElementById("list");

// FUNCTION TAMBAH TASK
function addTask() {
    const text = input.value.trim();

    if (text === "") {
        alert("Task tidak boleh kosong!");
        return;
    }

    const newItem = document.createElement("div");
    newItem.classList.add("item");

    newItem.innerHTML = `
        <input type="checkbox">
        <span>${text}</span>
        <span class="star">☆</span>
    `;

    list.appendChild(newItem);
    input.value = "";
}

// CLICK BUTTON
addBtn.addEventListener("click", addTask);

// ENTER KEY
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

// STAR TOGGLE
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("star")) {
        e.target.textContent =
            e.target.textContent === "☆" ? "★" : "☆";
    }
});

const canvas = document.getElementById("effectCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function spray(x, y) {
    for (let i = 0; i < 40; i++) {
        particles.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 10,
            vy: (Math.random() - 1) * 10,
            life: 80
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25;
        p.life--;

        ctx.fillStyle = `hsl(${Math.random()*360}, 100%, 60%)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);
    }

    requestAnimationFrame(animate);
}

animate();

document.getElementById("addBtn").addEventListener("click", () => {
    spray(window.innerWidth / 2, window.innerHeight / 2);
});