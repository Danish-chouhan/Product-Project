const mainContainer = createAndAppend("div", "class", "mainContainer", document.body);

const DataEntryForm = createAndAppend("form", "class", "DataEntryForm", mainContainer, null, null, "submit");
let MRP = createAndAppend("input", "type", "number", DataEntryForm, null, null, null, "MRP");
let productPrice = createAndAppend("input", "type", "number", DataEntryForm, null, null, null, "Product Price");
let productName = createAndAppend("input", "type", "text", DataEntryForm, null, null, null, "Product Name");
let productQuantity = createAndAppend("input", "type", "number", DataEntryForm, null, null, null, "Product Quantity");
let submitDataEntry = createAndAppend("input", "type", "submit", DataEntryForm, null, null, null, "submit");
const maincontainerOfProduct = createAndAppend("div","class","MainContainerOfProduct",mainContainer)
function createAndAppend(tag, attType, attName, parent, text, targetTag, event, placeholder, extraEvent) {
  const element = document.createElement(tag);

  if (!!attType && !!attName) {
    element.setAttribute(attType, attName);
  }
  if (!!placeholder) {
    element.setAttribute("placeholder", placeholder);
  }
  if (!!parent) {
    parent.append(element);
  }
  if (!!text) {
    element.innerText = text;
  }
  if (!!event || !!extraEvent) {
    (element || targetTag).addEventListener((event || extraEvent), listener);

    function listener(e) {
      e.preventDefault();
      e.stopPropagation();

      if (e.type === "submit") {
        console.log(e.target);
        if(e.target.classList[0]=== "DataEntryForm"){         
          const productContainer = createAndAppend("div", "class", "productContainer", maincontainerOfProduct, null, null,"mouseover");

          const productPrices = createAndAppend("div", "class", "productPrices", productContainer);
          const Mrp = createAndAppend("p", "class", "productMrp", productPrices, `MRP: ${MRP.value}`);
          const Price = createAndAppend("h1", "class", "productPrice", productPrices, `₹ ${productPrice.value} only`);
          const nameAndQuantity = createAndAppend("p", "class", "nameAndQuantity", productPrices, `${productName.value}, ${productQuantity.value} gm`);
        }
        
      }
      if (e.type === "mouseover") {
        const productContainerVar1 = document.querySelector(".productContainer");
        const buttonContainer = productContainerVar1.querySelector(".buttonContainer");
      
        if (!buttonContainer) {
          const buttonContainer = createAndAppend("div", "class", "buttonContainer", productContainerVar1);
          const editButton = createAndAppend("button", "class", "editButton", buttonContainer, "Edit", null, "click");
          const deleteBtn = createAndAppend("button", "class", "deleteButton", buttonContainer, "Delete", null, "click");
        }
      }
      if(e.type === "click"){
      if(e.target.classList[0] === "editButton"){
         
        const productContainerVar2 = document.querySelector(".productContainer")
          const innerItems = productContainerVar2.querySelectorAll(".productPrices > *");
          
          const popEditContainer = createAndAppend("div","class","container",mainContainer)
          const formPopContainer = createAndAppend("form","class","formPopContainer",popEditContainer,null,null,"sub")
          const cancelPopEdit = createAndAppend("button","class","cancelContainer",formPopContainer,"X")
          const mrpPopEdit = createAndAppend("input","type","number",formPopContainer)
          mrpPopEdit.setAttribute("class", "mrpPopEdit")
          const pricePopEdit = createAndAppend("input","type","number",formPopContainer)
          pricePopEdit.setAttribute("class", "pricePopEdit")
          const namePopEdit = createAndAppend("input","type","text",formPopContainer)
          namePopEdit.setAttribute("class", "namePopEdit")
          const quantityPopEdit = createAndAppend("input","type","number",formPopContainer)
          quantityPopEdit.setAttribute("class", "quantityPopEdit")
          const submitPopEdit = createAndAppend("input","type","submit",formPopContainer)
         submitPopEdit.setAttribute("class", "submitBtn")
          formPopContainer.addEventListener("submit",(e)=>{
            e.preventDefault()
            innerItems.forEach(item => {
              if (item.classList.contains("productMrp")) {
                item.innerText = `MRP: ${mrpPopEdit.value}`;
              }
              if (item.classList.contains("productPrice")) {
                item.innerText =`₹ ${pricePopEdit.value} only`;
              }
              if (item.classList.contains("nameAndQuantity")) {
                item.innerText = `${namePopEdit.value}, ${quantityPopEdit.value} gm`;
              }
            });
            popEditContainer.remove()
          })
      }
      if (e.currentTarget.classList[0] === "deleteButton") {
        // Code to delete productContainer
        const productContainerVar = document.querySelector(".productContainer");
        productContainerVar.remove();
      }
      }
    }
  }

  return element;
}
