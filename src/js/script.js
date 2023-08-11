// Poczekaj, aż dokument HTML zostanie w pełni załadowany
document.addEventListener('DOMContentLoaded', function () {
  // Znajdź wszystkie wystąpienia komponentu Model Viewer na stronie
  const modelViewers = document.querySelectorAll('model-viewer');

  // Iteruj przez każdy komponent Model Viewer
  modelViewers.forEach(function (modelViewer) {
    // Sprawdź, czy komponent jest załadowany
    modelViewer.addEventListener('load', function () {
      // Wykonaj dowolne czynności po załadowaniu modelu
      console.log('Model został załadowany!');
    });

    // Sprawdź, czy wystąpił błąd podczas ładowania modelu
    modelViewer.addEventListener('error', function (event) {
      // Wyświetl komunikat o błędzie
      console.error('Wystąpił błąd podczas ładowania modelu:', event);
    });
  });
});

/*COOKIE POLICY */
$(document).ready(function() {
  // Check if the session cookie is set
  if (document.cookie.indexOf('cookiePolicyAccepted=true') === -1) {
    // Cookie policy not accepted, show the popup
    $("#cookie-popup").fadeIn();
  }

  $("#cookie-popup button").click(function() {
    // Set a session cookie to remember user's choice
    document.cookie = 'cookiePolicyAccepted=true; path=/';
    
    // Hide the cookie policy popup
    $("#cookie-popup").fadeOut();
  });
});

/*SEND FORM*/
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