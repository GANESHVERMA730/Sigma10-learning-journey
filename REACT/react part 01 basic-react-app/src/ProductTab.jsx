import Product from "./Product.jsx";

function ProductTab() {
  let options = ["hi-tech", "durable", "fast"];
  return(
  <>
    <Product title="phone" price={20000} features={options}/>
    <Product title="laptop" price={45000}/>
    <Product title="keyboard" price={1200}/>
  </>
  );
}

export default ProductTab;