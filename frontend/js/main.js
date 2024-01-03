const productList = [];

const form = document.querySelector("form");

const productPrice = document.getElementById("Product-Price");
const productName = document.getElementById("Product-Name");
const productQuentity = document.getElementById("Product-Quentity");
const mrp = document.getElementById("MRP");
const currentRate = document.getElementById("Current-Rate");
form.addEventListener("submit", (ele) => {
  ele.preventDefault();
  const Product = {
    Price: productPrice.value,
    Name: productName.value,
    Quentity: productQuentity.value,
    mrp: mrp.value,
    Rate: currentRate.value,
  };
  productList.push(Product);
  const productListData = JSON.stringify(productList);

  localStorage.setItem("productData", productListData);
});

// --------------------Products

const body = document.querySelector("body");
const dataArray = JSON.parse(localStorage.getItem("productData") || []);

const mainContainerOfProduct = document.createElement("div");
mainContainerOfProduct.classList.add("maiContainer");
body.appendChild(mainContainerOfProduct);

dataArray.forEach((element) => {
  const containerProduct = createAndAppendProduct(
    "div",
    "Product",
    mainContainerOfProduct
  );

  createAndAppendProduct(
    "h2",
    "ProductPrice",
    containerProduct,
    `<span id="Rupee">₹</span>${element.Price}<span id="Only">only</span>`
  );
  createAndAppendProduct(
    "p",
    "ProductName",
    containerProduct,
    `${element.Name}, ${element.Quentity}`
  );

  const containerOfPrice = createAndAppendProduct(
    "div",
    "price",
    containerProduct
  );

  createAndAppendProduct(
    "p",
    null,
    containerOfPrice,
    `MRP Rs : <del>${element.mrp}</del>`
  );
  createAndAppendProduct(
    "p",
    null,
    containerOfPrice,
    `Price : <span id="Rupee">₹</span>${element.Rate}`
  );

  // extra btns

  const extraBtnsContainer = createAndAppendProduct(
    "div",
    "extraBtnsContainer",
    containerProduct
  );

  const creatingBtns = () => {
    createAndAppendProduct("button", "editBtn", extraBtnsContainer, "Edit","editBtn");
    createAndAppendProduct("button", "deleteBtn", extraBtnsContainer, "Delete","deleteBtn");

    containerProduct.removeEventListener("mouseover", creatingBtns);
  };

  containerProduct.addEventListener("mouseover", creatingBtns);
});

// function to create element
function createAndAppendProduct(tag, className, parent, innerHTML,idName) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (idName) element.setAttribute("id",idName)
  if (innerHTML) element.innerHTML = innerHTML;
  parent.appendChild(element);
  return element;
}
