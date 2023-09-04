document.addEventListener('DOMContentLoaded', function () {
  const openModalBtns = document.querySelectorAll('.sign-up.free-consultation');
  const modal = document.getElementById("modalform");
  const closeModal = document.getElementsByClassName("close")[0];

  openModalBtns.forEach(openModalBtn => {
    openModalBtn.onclick = function () {
      modal.style.display = "flex";
    };
  });

  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };


  function toggleMenu() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav-menu").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

  const menuBar = document.querySelector('.menu-bar');
  menuBar.addEventListener('click', toggleMenu);



  // SWITCHER JĘZYKOWY //
  const switcher = document.getElementById('language-toggle');
    
  switcher.addEventListener('change', function () {
    // Pobierz nazwę aktualnej strony
    const currentPageName = window.location.pathname.split('/').pop();
    let newPageName; // Deklarujemy zmienną poza blokami if/else
    
    // Sprawdź, czy strona jest już w formacie "-is.html"
    if (currentPageName.endsWith('-is.html')) {
      // Jeśli tak, usuń końcówkę "-is.html" z nazwy strony
      newPageName = currentPageName.replace('-is.html', '.html');
    } else {
      // W przeciwnym razie, dodaj końcówkę "-is.html" do nazwy strony
      newPageName = currentPageName.replace('.html', '-is.html');
    }

     // Opóźnij przekierowanie o 1 sekundę
     setTimeout(function() {
      // Buduj nowy URL na podstawie nazw stron
      const newURL = window.location.origin + window.location.pathname.replace(currentPageName, newPageName);
      
      // Przekieruj użytkownika na nową stronę
      window.location.href = newURL;
    }, 200); // 200 milisekund (0,2 sekundy)
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