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
    const editBtn = createAndAppendProduct(
      "button",
      "editBtn",
      extraBtnsContainer,
      "Edit",
      "editBtn"
    );
   const deleteBtn = createAndAppendProduct(
      "button",
      "deleteBtn",
      extraBtnsContainer,
      "Delete",
      "deleteBtn"
    );
    editBtn.addEventListener("click", edit_Btn);
    deleteBtn.addEventListener("click",delete_Btn)
    function edit_Btn(){
      editBtn.removeEventListener("click", edit_Btn);

     const Editform = createAndAppendProduct("form","EditForm",body)
     createAndAppendProduct("input","productPrice",Editform,null,null,"number","productPrice")
     createAndAppendProduct("input","productName",Editform,null,null,"text","productName")
     createAndAppendProduct("input","productQuantity",Editform,null,null,"text","productQuantity")
     createAndAppendProduct("input","mrp",Editform,null,null,"number","mrp")
     createAndAppendProduct("input","currentRate",Editform,null,null,"number","currentRate")
     createAndAppendProduct("input","submit",Editform,null,null,"submit","submit")
    }
    function delete_Btn(){
      containerProduct.remove()
    }
    containerProduct.removeEventListener("mouseover", creatingBtns);
  };

  containerProduct.addEventListener("mouseover", creatingBtns);

});

// function to create element
function createAndAppendProduct(tag, className, parent, innerHTML, idName,type,placeholder) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (idName) element.setAttribute("id", idName)
  if (innerHTML) element.innerHTML = innerHTML;
  if (type) element.type = type;
  if (placeholder) element.setAttribute("placeholder",placeholder);
  parent.appendChild(element);
  return element;
}