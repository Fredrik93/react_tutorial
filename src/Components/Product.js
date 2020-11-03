import React from 'react'

function showProductInfo() {
    console.log("hehe")
}
function Product(props) {
    return (<div> <h3>{props.name}  </h3>  <button onClick={showProductInfo()} id="productInfo" className="btn lg btn-primary" >View Info</button></div>)
}
export default Product 