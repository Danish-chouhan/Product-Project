const form = document.querySelector("form")



const productPrice = document.getElementById("Product-Price")
const productName = document.getElementById("Product-Name")
const productQuentity = document.getElementById("Product-Quentity")
const mrp = document.getElementById("MRP")
const currentRate = document.getElementById("Current-Rate")
form.addEventListener("submit",(ele)=>{
  ele.preventDefault()
  const Product = {
      Price : productPrice.value,
      Name : productName.value,
      Quentity : productQuentity.value,
      mrp : mrp.value,
      Rate : currentRate.value
  }
  const productJSON = JSON.stringify(Product);

  localStorage.setItem("productData", productJSON);

  console.log("Product saved in local storage:", Product);
})