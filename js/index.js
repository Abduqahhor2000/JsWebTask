const button = document.getElementById("myButton");
const menuList = document.getElementById("navbar-sticky");

button.addEventListener("click", function () {
  const isOpen = button.getAttribute("aria-expanded");
  button.setAttribute("aria-expanded", isOpen === "true" ? "false" : "true");
  menuList.classList.toggle("hidden");
});

const renderProducts = (data) => {
  console.log(data);
  document.querySelector(".container").innerHTML = data?.map((item) => {
    return product(item);
  });
};

const getProducts = (q, currentPage, category) => {
  fetch(
    `https://dummyjson.com/products${
      q ? `/search?q=${q}&` : category ? `/categories/${category}?` : "?"
    }${`limit=20&skip=${(currentPage - 1) * 20}`}`
  ).then((res) => res.json())
    .then((data) => {
      renderProducts(data?.products)
    })
    .catch((e) => console.log(e));
};

getProducts("", 1, "");
