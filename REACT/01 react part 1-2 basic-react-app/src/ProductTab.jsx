import Product from "./Product.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };

  return(
  <div style={styles}>
    <Product title="Logitech MX Master" idx={0}/>
    <Product title="Apple Pencil (2nd Gen)" idx={1}/>
    <Product title="Evofox 3000 DPI" idx={2}/>
    <Product title="Lenovo Ideapad Slim3" idx={3}/>
  </div>
  );
}

export default ProductTab;