// PART 1 – Appetizer Tab
const navList = document.querySelector("nav ul.nav-list");
const appetizerLink = document.createElement("a");
appetizerLink.textContent = "Appetizer";
appetizerLink.href = "#appetizer";
const appetizerItem = document.createElement("li");
appetizerItem.appendChild(appetizerLink);
navList.appendChild(appetizerItem);

const appetizerTab = document.createElement("div");
appetizerTab.id = "appetizer";
appetizerTab.style.display = "flex";
appetizerTab.style.gap = "1em";

["Bruschetta", "Stuffed Mushrooms", "Garlic Bread"].forEach(item => {
  const div = document.createElement("div");
  div.textContent = item;
  div.className = "menu-item";
  appetizerTab.appendChild(div);
});

const main = document.querySelector("main");
main.appendChild(appetizerTab);

// PART 2 – Order Online Tab
const orderLink = document.createElement("a");
orderLink.textContent = "Order Online";
orderLink.href = "#order";
const orderItem = document.createElement("li");
orderItem.appendChild(orderLink);
navList.appendChild(orderItem);

const orderTab = document.createElement("div");
orderTab.id = "order";

const form = document.createElement("form");
form.action = "https://formspree.io/f/xdkwoqbj"; 
form.method = "POST";

// Name
const nameLabel = document.createElement("label");
nameLabel.setAttribute("for", "name_input");
nameLabel.textContent = "Name:";
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "name_input";
nameInput.name = "name";
nameInput.required = true;
form.appendChild(nameLabel);
form.appendChild(nameInput);

// Email
const emailLabel = document.createElement("label");
emailLabel.setAttribute("for", "email_input");
emailLabel.textContent = "Email:";
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.id = "email_input";
emailInput.name = "email";
emailInput.required = true;
form.appendChild(emailLabel);
form.appendChild(emailInput);

// Order
const orderLabel = document.createElement("label");
orderLabel.setAttribute("for", "order_input");
orderLabel.textContent = "Order:";
const orderTextarea = document.createElement("textarea");
orderTextarea.id = "order_input";
orderTextarea.name = "order";
form.appendChild(orderLabel);
form.appendChild(orderTextarea);

// Submit Button
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit Order";
form.appendChild(submitButton);

orderTab.appendChild(form);
main.appendChild(orderTab);

// PART 3 – Food Pictures Gallery
const galleryLink = document.createElement("a");
galleryLink.textContent = "Food Gallery";
galleryLink.href = "#gallery";
const galleryItem = document.createElement("li");
galleryItem.appendChild(galleryLink);
navList.appendChild(galleryItem);

const galleryTab = document.createElement("div");
galleryTab.id = "gallery";
galleryTab.className = "gallery";

const images = [
  { src: "images/pasta.jpg", alt: "Pasta" },
  { src: "images/salad.jpg", alt: "Salad" },
  { src: "images/pizza.jpg", alt: "Pizza" }
];

images.forEach(imgData => {
  const img = document.createElement("img");
  img.src = imgData.src;
  img.alt = imgData.alt;
  galleryTab.appendChild(img);
});

main.appendChild(galleryTab);

