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


// const row = document.querySelector('.row');
// const arrowLeft = document.querySelector('.arrow-left');
// const arrowRight = document.querySelector('.arrow-right');

// arrowLeft.addEventListener('click', function () {
//     row.scrollLeft -= 200;
// });

// arrowRight.addEventListener('click', function () {
//     row.scrollLeft += 200;
// });

document.getElementById('event-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values entered by the user
    var title = document.getElementById('event-title').value;
    var date = document.getElementById('event-date').value;
    var description = document.getElementById('event-description').value;
    var imageFile = document.getElementById('event-image').files[0];

    // Create a new event object
    var eventObj = {
      title: title,
      date: date,
      description: description,
      imageFile: imageFile
    };

    // Call the function to display the event
    displayEvent(eventObj);

    // Reset the form fields
    document.getElementById('event-title').value = '';
    document.getElementById('event-date').value = '';
    document.getElementById('event-description').value = '';
    document.getElementById('event-image').value = '';
  });

  // Function to display the event in the event list
  function displayEvent(eventObj) {
    var eventList = document.getElementById('event-list');

    // Create the event container
    var eventContainer = document.createElement('div');
    eventContainer.classList.add('event');

    // Create the event image
    var imageElement = document.createElement('img');
    imageElement.alt = eventObj.title;
    imageElement.classList.add('event-image');

    // Read the image file and set it as the image source
    var reader = new FileReader();
    reader.onload = function(event) {
      imageElement.src = event.target.result;
    };
    reader.readAsDataURL(eventObj.imageFile);

    // Create the event details container
    var detailsContainer = document.createElement('div');
    detailsContainer.classList.add('event-details');

    // Create the event title
    var titleElement = document.createElement('h3');
    titleElement.textContent = eventObj.title;

    // Create the event date
    var dateElement = document.createElement('p');
    dateElement.textContent = 'Date: ' + eventObj.date;

    // Create the event description
    var descriptionElement = document.createElement('p');
    descriptionElement.textContent = eventObj.description;

    // Append the elements to the details container
    detailsContainer.appendChild(titleElement);
    detailsContainer.appendChild(dateElement);
    detailsContainer.appendChild(descriptionElement);

    // Append the image and details containers to the event container
    eventContainer.appendChild(imageElement);
    eventContainer.appendChild(detailsContainer);

    // Append the event container to the event list
    eventList.appendChild(eventContainer);
  }

  // Scroll buttons functionality
  var scrollButtonLeft = document.querySelector('.scroll-button-left');
  var scrollButtonRight = document.querySelector('.scroll-button-right');
  var eventList = document.getElementById('event-list');

  scrollButtonLeft.addEventListener('click', function() {
    eventList.scrollBy({
      left: -320,
      behavior: 'smooth'
    });
  });

  scrollButtonRight.addEventListener('click', function() {
    eventList.scrollBy({
      left: 320,
      behavior: 'smooth'
    });
  });







