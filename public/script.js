const reviews_container = document.getElementById("reviews_container");

async function fetchData() {
  const response = await fetch("http://localhost:3000/data");
  const data = await response.json();

  data.forEach((data) => {
    const html = `
    <div class="review_type">
      <p>Type:</p>
      <p>${data.id}</p>
    </div>
    <div class="review_name">
      <p>Name:</p>
      <p>${data.rname}</p>
    </div>
    <div class="review_rating">
      <p>Rating:</p>
      <p>${data.Ratings}</p>
    </div>
    <div class="review_review">
      <p>Review:</p>
      <p>${data.Review}</p>
    </div>
  `;

    var div = document.createElement("div");
    div.classList.add("review");
    div.innerHTML = html;
    reviews_container.appendChild(div);
  });
}

fetchData();
