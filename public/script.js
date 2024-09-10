// public/script.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("predictionForm");
  const modal = document.getElementById("resultModal");
  const resultElement = document.getElementById("result");
  const resultImage = document.getElementById("resultImage");
  const closeBtn = document.querySelector(".close");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const age = document.getElementById("age").value;
    const sex = document.getElementById("sex").value;
    const cp = document.getElementById("cp").value;
    const trestbps = document.getElementById("trestbps").value;
    const chol = document.getElementById("chol").value;
    const fbs = document.getElementById("fbs").value;
    const restecg = document.getElementById("restecg").value;
    const thalach = document.getElementById("thalach").value;
    const exang = document.getElementById("exang").value;
    const oldpeak = document.getElementById("oldpeak").value;
    const slope = document.getElementById("slope").value;
    const ca = document.getElementById("ca").value;
    const thal = document.getElementById("thal").value;

    // Prepare data to send to the backend
    const data = {
      age: age,
      sex: sex,
      cp: cp,
      trestbps: trestbps,
      chol: chol,
      fbs: fbs,
      restecg: restecg,
      thalach: thalach,
      exang: exang,
      oldpeak: oldpeak,
      slope: slope,
      ca: ca,
      thal: thal,
    };

    try {
      // Send data to the Express server, which will forward it to the Flask API
      const response = await fetch("/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json(); // Get the response from the Express server
      console.log(result);

      // Display result in the modal
      resultElement.textContent = result.prediction;

      // Set an image based on the result prediction
      let imageUrl;
      if (result.prediction === "The Person has Heart Disease") {
        imageUrl = "/images/high-risk-image.png"; // Replace with actual image URL
      } else if (result.prediction === "Low Risk") {
        imageUrl = "/images/low-risk-image.png"; // Replace with actual image URL
      } else {
        imageUrl = "/images/default-image.png"; // Replace with a default image URL
      }
      resultImage.src = imageUrl;

      // Show the modal
      modal.style.display = "block";
    } catch (error) {
      console.error("Error:", error);
      resultElement.innerText = "Error making prediction";
      resultImage.src = ""; // Clear any previous image
      modal.style.display = "block";
    }
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
