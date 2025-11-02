// ===== Mobile menu toggle =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("navLinks");
const openIcon = menuToggle.querySelector(".open");
const closeIcon = menuToggle.querySelector(".close");
const navLinkItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  // Toggle icons
  const isOpen = navLinks.classList.contains("show");
  openIcon.style.display = isOpen ? "none" : "inline";
  closeIcon.style.display = isOpen ? "inline" : "none";
});

// Close menu when clicking a nav link
navLinkItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    openIcon.style.display = "inline";
    closeIcon.style.display = "none";
  });
});


// ===== Contact form validation + send to Formspree =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // stop form from submitting immediately

    // Get field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Regular expressions for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    // Validation logic
    if (name === '') {
      alert('Please enter your name.');
      return;
    }
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!phonePattern.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
    if (message === '') {
      alert('Please enter your message.');
      return;
    }

    // ✅ If everything is valid — send data to Formspree
    try {
      const response = await fetch("https://formspree.io/f/xwpwwnjj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.ok) {
        alert(`✅ Thank you, ${name}! Your message has been sent successfully.`);
        contactForm.reset();
      } else {
        alert("❌ Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Network error — please check your connection.");
    }
  });
}


//loader code
 window.addEventListener("load", () => {
      const loader = document.getElementById("loader");
      const content = document.getElementById("content");

      // Safety check: ensure both exist
      if (!loader || !content) {
        console.error("Loader or content element missing!");
        return;
      }

      // Show content and hide loader
      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.display = "none";
        content.style.display = "block";
      }, 1500); // Loader visible for 1.5s
    });


// nav highlight    
    // Select all nav links
const navbarLinks = document.querySelectorAll("ul li a");

// Loop through and add click event
navbarLinks.forEach(link => {
  link.addEventListener("click", function() {
    // Remove 'active' from all links
    navbarLinks.forEach(l => l.classList.remove("active"));
    // Add 'active' to the clicked one
    this.classList.add("active");
  });
});