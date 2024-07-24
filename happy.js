document.getElementById('happyForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const happyInput = document.getElementById('happyInput');
    const happyValue = happyInput.value.trim();

    if (happyValue) {
        const happyList = document.getElementById('happyList');
        const listItem = document.createElement('li');
        listItem.textContent = happyValue;
        happyList.appendChild(listItem);

        happyInput.value = ''; // Clear the input field
    }
});
