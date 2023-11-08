const whatsInside = [
  "Deep insights into the tech trends reshaping industries",
  "Actionable tips and strategies to acquire these skills",
  "Proven methods to boost your income potential",
];

const whatsInsideListItems = whatsInside
  .map((data) => {
    return `<li>
    <span>
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
    <path d="M2.5 6.82031L4.5 8.82031L9.5 3.82031" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </span>
    <p>${data}</p>
    </li>`;
  })
  .join("");

document.querySelector(".whatsInsideList").innerHTML = whatsInsideListItems;

function displayModal(event) {
  event.preventDefault();

  const modal = document.querySelector(".modal");
  modal.classList.add("active");
}

function removeModal() {
  event.preventDefault();

  const modal = document.querySelector(".modal");
  modal.classList.remove("active");
}
