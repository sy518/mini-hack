

// let submit = document.getElementById("btn");
// submit.addEventListener("click", function(event) {
//     event.preventDefault
//     let inputBox = document.getElementById("tital");
//     let descriptionBox = document.getElementById("Description");
//     let category = document.getElementById("Category")

//     const card = createCardElement(title, descriptionBox, category);
//     allCards.push(card);
//     cardContainer.appendChild(card);

//     // Clear input fields
//     inputBox.value = "";
//     descriptionBox.value = "";
//     category.value = "";

//     // Filter Cards
//     categoryFilter.addEventListener('change', () => {
//         const selectedCategory = categoryFilter.value;

//         allCards.forEach(card => {
//             const cardCategory = card.getAttribute('data-category');
//             if (selectedCategory === "all" || cardCategory === selectedCategory) {
//                 card.style.display = "block";
//             } else {
//                 card.style.display = "none";
//             }
//         }); 
//     });
// })


// let inputs = document.getElementById("inputbx");
// let list = document.getElementById("todo-list");
// console.log(inputs.value)
// function card() {
//     if (inputs.value) {
//         let newELement = document.createElement("ul");
//         newELement.innerHTML = `${inputs.value}<i class="fa fa-times" style="font-size:24px"></i>`
//         list.appendChild(newELement);
//         inputs.value = "";
//         newELement.querySelector("i").addEventListener("click", removeElement);
//         function removeElement() {
//             newELement.remove()

//         }
//     } else {
//         alert("plz Enter your taxk");
//     }
// }

const tipForm = document.getElementById('tipForm');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const categoryInput = document.getElementById('category');
const linkInput = document.getElementById('externalLink');
const imageInput = document.getElementById('imageUpload');

const tipList = document.createElement('div');
tipList.className = "mt-8 space-y-4 max-w-xl mx-auto";
document.body.appendChild(tipList);

tipForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const category = categoryInput.value;
    const link = linkInput.value.trim();
    const imageFile = imageInput.files[0];

    if (!title || !description || !category) {
        alert("fill all felids");
        return;
    }

    const card = document.createElement('div');
    card.className = "bg-white p-4 rounded-lg shadow-md";

    const cardTitle = document.createElement('h3');
    cardTitle.className = "text-xl font-bold mb-2";
    cardTitle.textContent = title;
    card.appendChild(cardTitle);

    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;
    card.appendChild(cardDescription);

    const cardCategory = document.createElement('p');
    cardCategory.className = "text-sm text-gray-500 mt-1";
    cardCategory.textContent = "category " + category;
    card.appendChild(cardCategory);

    if (link) {
        const cardLink = document.createElement('a');
        cardLink.href = link;
        cardLink.textContent = "";
        cardLink.className = "text-blue-600 hover:underline block mt-2";
        cardLink.target = "_blank";
        card.appendChild(cardLink);
    }

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = "mt-3 rounded-md max-h-48";
            card.appendChild(img);
        };
        reader.readAsDataURL(imageFile);
    }

    tipList.prepend(card);

    tipForm.reset();
});
