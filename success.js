

let submit = document.getElementById("btn");
submit.addEventListener("click", function(event) {
    event.preventDefault
    let inputBox = document.getElementById("tital");
    let descriptionBox = document.getElementById("Description");
    let category = document.getElementById("Category")
    
    const card = createCardElement(title, descriptionBox, category);
    allCards.push(card);
    cardContainer.appendChild(card);
    
    // Clear input fields
    inputBox.value = "";
    descriptionBox.value = "";
    category.value = "";
    
    // Filter Cards
    categoryFilter.addEventListener('change', () => {
        const selectedCategory = categoryFilter.value;
        
        allCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (selectedCategory === "all" || cardCategory === selectedCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }); 
    });
})
