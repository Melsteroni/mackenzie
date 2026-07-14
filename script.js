(function () {
  const CORRECT_PASSWORD = "hangry";
  // FormSubmit delivers mail to this address (free, no backend required).
  // First successful submit triggers a one-time confirmation email — check inbox & confirm.
  const NOTIFY_EMAIL = "melanie.frazier@gmail.com";

  const form = document.getElementById("password-form");
  const input = document.getElementById("password");
  const error = document.getElementById("error");
  const brand = document.getElementById("brand");
  const gate = document.getElementById("gate");
  const success = document.getElementById("success");
  const submitBtn = form.querySelector(".submit-btn");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    error.hidden = true;

    // Case-insensitive: Hangry, HANGRY, hangry, etc. all work
    const guess = input.value.trim().toLowerCase();
    if (guess !== CORRECT_PASSWORD) {
      error.hidden = false;
      input.select();
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Unlocking…";

    try {
      await fetch(`https://formsubmit.co/ajax/${NOTIFY_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "Scavenger hunt solved!",
          message:
            "Someone entered the correct password on the scavenger hunt page.",
          solved_at: new Date().toISOString(),
        }),
      });
    } catch {
      // Still show success — the hunt prize shouldn't fail if mail is delayed.
    }

    brand.textContent = "Congratulations";
    gate.hidden = true;
    success.hidden = false;
  });
})();
