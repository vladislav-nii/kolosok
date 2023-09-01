const predForm = document.getElementById("pred-form");

const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');
formData.append("avatar", fileField.files[0]);

predForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch("https://kolosok.onrender.com/upload", {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: formData,
  });
  const data = await response.json();
});
