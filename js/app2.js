const predForm = document.getElementById("pred-form");

const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');
formData.append("avatar", fileField.files[0]);

predForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch("http://127.0.0.1:3000/upload", {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: formData,
  });
  const data = await response.json();
});
