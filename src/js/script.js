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

$("#cookie-popup button").click(function() {
  $("#cookie-popup").fadeOut();
});
