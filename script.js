let messageShown = false;

  const cards = document.querySelectorAll("#cards .card");
  const messageBox = document.getElementById("hover-message");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      if (!messageShown) {
        messageBox.style.display = "block";
        messageShown = true;

        // Optional: hide after 5 seconds
        setTimeout(() => {
          messageBox.style.display = "none";
        }, 5000);
      }
    });
  });
