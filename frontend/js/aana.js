const mainContainer = createAndAppend("div", "class", "mainContainer", document.body);

const DataEntryForm = createAndAppend("form", "class", "DataEntryForm", mainContainer, null, null, "submit");
let MRP = createAndAppend("input", "type", "number", DataEntryForm, null, null, null, "MRP");
let productPrice = createAndAppend("input", "type", "number", DataEntryForm, null, null, null, "Product Price");
let productName = createAndAppend("input", "type", "text", DataEntryForm, null, null, null, "Product Name");
let productQuantity = createAndAppend("input", "type", "number", DataEntryForm, null, null, null, "Product Quantity");
let submitDataEntry = createAndAppend("input", "type", "submit", DataEntryForm, null, null, null, "submit");

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
        const productContainer = createAndAppend("div", "class", "productContainer", mainContainer, null, null);

        const productPrices = createAndAppend("div", "class", "productPrices", productContainer);
        const Mrp = createAndAppend("p", "class", "productMrp", productPrices, `MRP: ${MRP.value}`);
        const Price = createAndAppend("h1", "class", "productPrice", productPrices, `₹ ${productPrice.value} only`);
        const nameAndQuantity = createAndAppend("p", "class", "nameAndQuantity", productPrices, `${productName.value}, ${productQuantity.value} gm`);

        // Add mouseover event listener to productContainer
        productContainer.addEventListener("mouseover", handleMouseOver);

        // Function to handle mouseover event
        function handleMouseOver() {
          // Check if the buttonContainer already exists
          const buttonContainer = productContainer.querySelector(".buttonContainer");

          // If it doesn't exist, create it
          if (!buttonContainer) {
            const buttonContainer = createAndAppend("div", "class", "buttonContainer", productContainer);
            const editButton = createAndAppend("button", "class", "editButton", buttonContainer, "Edit");

            // Add click event listener to the edit button
            editButton.addEventListener("click", handleEditButtonClick);

            function handleEditButtonClick() {
              const innerItems = productContainer.querySelectorAll(".productPrices > *");
              innerItems.forEach(item => {
                console.log(item.innerText);
              });
            }
          }
        }
      }
    }
  }

  return element;
}
