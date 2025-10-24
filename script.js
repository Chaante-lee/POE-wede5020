
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

const form = document.getElementById('contactForm');

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

// ====== GALLERY LIGHTBOX FUNCTIONALITY ======
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

if (galleryImages.length > 0) {
  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
      currentIndex = index;
    });
  });
}

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Navigate images
function showImage(index) {
  if (index >= galleryImages.length) index = 0;
  if (index < 0) index = galleryImages.length - 1;
  lightboxImg.src = galleryImages[index].src;
  currentIndex = index;
}

nextBtn.addEventListener("click", () => showImage(currentIndex + 1));
prevBtn.addEventListener("click", () => showImage(currentIndex - 1));

// Close on background click
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
}); 

function changeColor() {
  document.getElementById("coloredText").style.color = "orange";
}