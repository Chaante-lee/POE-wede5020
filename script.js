
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
