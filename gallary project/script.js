// script.js

document.addEventListener("DOMContentLoaded", function() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.getElementById("lightbox-content");
  const closeBtn = document.querySelector(".close");

  galleryItems.forEach(item => {
      item.addEventListener("click", function() {
          const imgSrc = item.querySelector("img").src;
          lightboxContent.src = imgSrc;
          lightbox.style.display = "block";
      });
  });

  closeBtn.addEventListener("click", function() {
      lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", function(event) {
      if (event.target === lightbox) {
          lightbox.style.display = "none";
      }
  });
});
