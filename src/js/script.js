//* MENU WRAPPER **//
// Get the SVG and dropdown elements
const svgIcon = document.querySelector('.bla');
const dropdownMenu = document.querySelector('.nav-wrapper');

// Add a click event listener to the SVG icon
svgIcon.addEventListener('click', function () {
    // Toggle the visibility of the dropdown menu
    dropdownMenu.classList.toggle('show-menu');
});

//*MODEL 3D*/
// Wait for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
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
});

/* COOKIE POLICY */
$(document).ready(function() {
  // Check if the session cookie is set
  if (document.cookie.indexOf('cookiePolicyAccepted=true') === -1) {
    // Cookie policy not accepted, show the popup
    $("#cookie-popup").fadeIn();
  }

  $("#cookie-popup button").click(function() {
    // Set a session cookie to remember the user's choice
    document.cookie = 'cookiePolicyAccepted=true; path=/';
    
    // Hide the cookie policy popup
    $("#cookie-popup").fadeOut();
  });
});

/* SEND FORM */
$(document).ready(function() {
  $('#contact-form').submit(function(e) {
      e.preventDefault();
      
      $.ajax({
          type: "POST",
          url: $(this).attr('action'),
          data: $(this).serialize(),
          success: function(response) {
              // Handle success (display a thank you message, for example)
              console.log(response); // Log the response from the server
          },
          error: function(xhr, status, error) {
              // Handle error
              console.error(error);
          }
      });
  });
});

/* Max number of words */
document.addEventListener('DOMContentLoaded', function() {
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

