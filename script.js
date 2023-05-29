var slideIndex = 0;
showSlides();
function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

function toggleImageSize(element) {
  var largerImageContainer = document.getElementById("largerImageContainer");
  var largerImage = document.getElementById("largerImage");
  if (largerImageContainer.style.display === "flex") {
    largerImageContainer.style.display = "none";
    largerImage.src = "";
  } else {
    largerImage.src = element.src;
    largerImageContainer.style.display = "flex";
  }
}

function toggleContent() {
  var para2 = document.querySelector('.para2');
  para2.style.display = (para2.style.display === 'none') ? 'block' : 'none';
}

document.addEventListener("DOMContentLoaded", function () {
  // Sample event data
  var events = [
    { event: "Birthday party", date: "June 15, 2023", image: "../IMAGES/image1.jpg" },
    { event: "Conference", date: "July 10, 2023", image: "../IMAGES/image2.jpg" }
    // Add more event records here
  ];

  // Get the table body
  var tableBody = document.querySelector("#eventTable tbody");

  // Generate table rows
  events.forEach(function (event) {
    var row = document.createElement("tr");
    var eventCell = document.createElement("td");
    var dateCell = document.createElement("td");
    eventCell.textContent = event.event;
    dateCell.textContent = event.date;
    row.appendChild(eventCell);
    row.appendChild(dateCell);
    tableBody.appendChild(row);
    // Attach click event listener to each row
    row.addEventListener("click", function () {
      // Update the selected image
      var selectedImage = document.getElementById("selectedImage");
      selectedImage.src = event.image;
      // Remove active class from all rows
      var rows = document.querySelectorAll("#eventTable tbody tr");
      rows.forEach(function (row) {
        row.classList.remove("active");
      });
      // Add active class to the clicked row
      row.classList.add("active");
    });
  });
  // Scroll left and right functionality
  var scrollLeftButton = document.getElementById("scrollLeft");
  var scrollRightButton = document.getElementById("scrollRight");
  var imageContainer = document.getElementById("imageContainer");
  scrollLeftButton.addEventListener("click", function () {
    imageContainer.scrollBy({
      left: -100,
      behavior: "smooth"
    });
  });
  
  scrollRightButton.addEventListener("click", function () {
    imageContainer.scrollBy({
      left: 100,
      behavior: "smooth"
    });
  });
});