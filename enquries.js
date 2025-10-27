document.addEventListener("DOMContentLoaded", () => { //declaring enquiry form as a constant variable
    const enquiryForm = document.getElementById("enquiryForm");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", (e) => { //contents of form 
          e.preventDefault();
          const name = document.getElementById("name").Value.trim();
          const email = document.getElementById("email").value.trim();
          const service = document.getElementById("service").value.trim();
          const date = document.getElementById("date").value.trim();
          if (!name || !email || !service || !date) { // if there are missing values then we get an alert 
            alert("Please fill in all required fields");
            return;
          }
          let responseText = "";
          switch (service) {
            case "food":
                responseText = `Hi ${name}, our food assistance will be available on ${date}.`;
                break;
            case "volunteer":
                responseText = `thank you ${name}! Our volunteer coordinator will contact you soon,`;
                break;
            case "sponsor":
                responseText = `Thank you ${name} for your interest in sponsorship. We'll email you more info shortly.`;
                break;       
          }
          document.getElementById("enquiryResponse").textContent = responseText;
        });
        }})

const form = document.getElementById('enquiryForm');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent form from submitting normally

  // Get values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';

  let valid = true;

  // Name validation
  if (name === '') {
    document.getElementById('nameError').textContent = 'Please enter your name';
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Please enter your email';
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email';
    valid = false;
  }

  // Message validation
  if (message === '') {
    document.getElementById('messageError').textContent = 'Please enter your message';
    valid = false;
  }

  // If all fields are valid, create mailto link
  if (valid) {
    const mailtoLink = `mailto:recipient@example.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")")}`;
    window.location.href = mailtoLink;
  }
});


const products = [

  { id: 1, name: "feed a dog", },

  { id: 2, name: "adopt an animal", },

  { id: 3, name: "donation drive", },

  { id: 4, name: "animal play date ",  },

  { id: 5, name: "walk an animal",  },

];



const productContainer = document.getElementById('productContainer');

const searchInput = document.getElementById('searchInput');

const sortSelect = document.getElementById('sortSelect');



// Function to display products

function displayProducts(items) {

  productContainer.innerHTML = ''; // Clear previous content

  items.forEach(item => {

    const productDiv = document.createElement('div');

    productDiv.classList.add('product');

    productDiv.innerHTML = `

      <div class="product-name">${item.name}</div>

    

    `;

    productContainer.appendChild(productDiv);

  });

}



// Function to filter and sort products

function filterAndSortProducts() {

  let filteredProducts = products.filter(product =>

    product.name.toLowerCase().includes(searchInput.value.toLowerCase())

  );



  const sortValue = sortSelect.value;

  if (sortValue === 'name-asc') filteredProducts.sort((a,b) => a.name.localeCompare(b.name));

  if (sortValue === 'name-desc') filteredProducts.sort((a,b) => b.name.localeCompare(a.name));




  displayProducts(filteredProducts);

}



// Initial display

displayProducts(products);



// Event listeners

searchInput.addEventListener('input', filterAndSortProducts);

sortSelect.addEventListener('change', filterAndSortProducts);


