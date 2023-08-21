document.addEventListener('DOMContentLoaded', function () {
  const openModalBtn = document.getElementById("openModalBtn");
  const modal = document.getElementById("modalform");
  const closeModal = document.getElementsByClassName("close")[0];

  openModalBtn.onclick = function () {
      modal.style.display = "flex";
  }

  closeModal.onclick = function () {
      modal.style.display = "none";
  }

  window.onclick = function (event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };

  // MENU WRAPPER
  // Get the SVG and dropdown elements
  const svgIcon = document.querySelector('.bla');
  const dropdownMenu = document.querySelector('.nav-wrapper');

  // Add a click event listener to the SVG icon
  svgIcon.addEventListener('click', function () {
    // Toggle the visibility of the dropdown menu
    dropdownMenu.classList.toggle('show-menu');
  });

  // MODEL 3D
  // Find all occurrences of the Model Viewer component on the page
  const modelViewers = document.querySelectorAll('model-viewer');

  // Iterate through each Model Viewer component
  modelViewers.forEach(function (modelViewer) {
    // Check if the component is loaded
    modelViewer.addEventListener('load', function () {
      // Perform any actions after the model is loaded
      console.log('Model has been loaded!');
    });

    // Check if an error occurred during model loading
    modelViewer.addEventListener('error', function (event) {
      // Display an error message
      console.error('An error occurred during model loading:', event);
    });
  });

  // COOKIE POLICY
  // Check if the session cookie is set
  if (document.cookie.indexOf('cookiePolicyAccepted=true') === -1) {
    // Cookie policy not accepted, show the popup
    const cookiePopup = document.getElementById('cookie-popup');
    cookiePopup.style.display = 'block';
  }

  // Get the button inside the cookie popup
  const cookieButton = document.querySelector('#cookie-popup button');

  // Add a click event listener to the button
  cookieButton.addEventListener('click', function () {
    // Set a session cookie to remember the user's choice
    document.cookie = 'cookiePolicyAccepted=true; path=/';

    // Hide the cookie policy popup
    const cookiePopup = document.getElementById('cookie-popup');
    cookiePopup.style.display = 'none';
  });

  // SEND FORM
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', contactForm.getAttribute('action'), true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        // Handle success (display a thank you message, for example)
        console.log(xhr.responseText); // Log the response from the server
      } else {
        // Handle error
        console.error('An error occurred:', xhr.statusText);
      }
    };

    xhr.onerror = function () {
      // Handle network error
      console.error('Network error occurred');
    };

    xhr.send(formData);
  });

  // Max number of words
  // Get all elements with the class "article"
  const articles = document.querySelectorAll('.article-body');

  // Define the maximum number of words to display
  const maxWords = 25;

  // Loop through each article
  articles.forEach(article => {
    // Find the <p> element within the article
    const paragraph = article.querySelector('p');

    // Check if the paragraph exists
    if (paragraph) {
      // Split the text into words
      const words = paragraph.textContent.trim().split(' ');

      // Limit the number of words if it exceeds the maximum
      if (words.length > maxWords) {
        const truncatedText = words.slice(0, maxWords).join(' ') + '...';
        paragraph.textContent = truncatedText;
      }
    }
  });
});