const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    box.addEventListener('change', () => {
        if (checkbox.checked) {
            box.parentElement.style.opacity = '0.5';    
        } else {
            box.parentElement.style.opacity = '1';
        }
    });
});

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addBtn.click();
    }
});