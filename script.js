
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

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("cname").value.trim;
            const email = document.getElementById("cemail").value.trim;
            const type = document.getElementById("ctype").value;
            const message = document.getElementById("message").value.trim();
            if (!name || !email || !type || !message) { // if there are missing values then we get an alert 
            alert("Please complete all fields");
            return;
            }
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                alert("Please enter a valid email address.");
                return
            }
            setTimeout(() => {
               document.getElementById("contactResponse").textContent = 
                  `Thank you ${name}, your ${type} message has been sent successfully!`;
            }, 1000);
        });
    }
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