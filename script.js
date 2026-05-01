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