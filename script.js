(function () {
  const CORRECT_PASSWORD = "hangry";
  // Get a free access key: https://web3forms.com → enter melanie.frazier@gmail.com
  // Paste the key below (keep the quotes). Then commit & push.
  const WEB3FORMS_ACCESS_KEY = "e149b18c-332f-4c66-a8cd-150ba0f10443";

  const form = document.getElementById("password-form");
  const input = document.getElementById("password");
  const error = document.getElementById("error");
  const brand = document.getElementById("brand");
  const gate = document.getElementById("gate");
  const success = document.getElementById("success");
  const submitBtn = form.querySelector(".submit-btn");

  function showSuccess() {
    brand.textContent = "Congratulations";
    gate.hidden = true;
    success.hidden = false;
  }

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

    const keyReady =
      WEB3FORMS_ACCESS_KEY &&
      WEB3FORMS_ACCESS_KEY !== "PASTE_YOUR_ACCESS_KEY_HERE";

    if (keyReady) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: "Scavenger hunt solved!",
            from_name: "Mackenzie scavenger hunt",
            message:
              "Someone entered the correct password on the scavenger hunt page.",
            solved_at: new Date().toISOString(),
          }),
        });
        const result = await response.json();
        if (!result.success) {
          console.warn("Email notify failed:", result);
        }
      } catch (err) {
        console.warn("Email notify failed:", err);
        // Still show success — the hunt prize shouldn't fail if mail is delayed.
      }
    } else {
      console.warn(
        "Email not configured yet. Add your Web3Forms access key in script.js."
      );
    }

    showSuccess();
  });
})();
