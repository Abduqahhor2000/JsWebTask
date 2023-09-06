const button = document.getElementById("myButton");
const menuList = document.getElementById("navbar-sticky");

button.addEventListener("click", function () {
  const isOpen = button.getAttribute("aria-expanded");
  button.setAttribute("aria-expanded", isOpen === "true" ? "false" : "true");
  menuList.classList.toggle("hidden");
});

const renderProducts = (data, currentPage, q, category, func) => {
  let content;
  if (data?.products?.length) {
    content = data
      ?.products?.map((item) => {
        return product(item);
      })
      ?.join("");
  } else {
    content = `<h1 class="text-black text-2xl">Not found</h1>`;
  }

  document.querySelector(".container").innerHTML = content;
};

const getProducts = (q, currentPage, category) => {
  fetch(
    `https://dummyjson.com/products${
      q ? `/search?q=${q}&` : category ? `/categories/${category}?` : "?"
    }${`limit=20&skip=${(currentPage - 1) * 20}`}`
  )
    .then((res) => res.json())
    .then((data) => {
      renderProducts(data, currentPage, q, category, getProducts);
    })
    .catch((e) => console.log(e));
};

function handleChange(event) {
  const value = event.target.value;
  getProducts(value, 1, "");
}

const input = document.querySelector("#search-navbar");
input.addEventListener("keyup", handleChange);

getProducts("", 1, "");
