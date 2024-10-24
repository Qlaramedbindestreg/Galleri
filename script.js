document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.querySelector(".close");
    const filterBtns = document.querySelectorAll(".filter-btn");
  
    // open modal
    images.forEach((img) => {
      img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImage.src = this.src;
      });
    });
  
    // close modal
    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // close modal when clicking outside the image
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  
    // filter images by category
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        event.preventDefault();
        const filter = this.dataset.filter;
  
        images.forEach((img) => {
          if (filter === "all" || img.dataset.category === filter) {
            img.style.display = "block";
          } else {
            img.style.display = "none";
          }
        });
  
        // add active state to the clicked button
        filterBtns.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
      });
    });
  });
  