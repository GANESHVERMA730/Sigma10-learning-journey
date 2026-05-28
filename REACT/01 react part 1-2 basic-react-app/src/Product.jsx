import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrices = ["12,345", "11,364", "1,534", "999"];
  let newPrices = ["10,000", "9,990", "12,000", "7000"];
  let Description = [
    ["RGB color lights", "premium color"],
    ["Designed for ipad Pro", "intutive surface"],
    ["smooth performance", "up to 30000 DPI"],
    ["power efficient", "better battery life"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{Description[idx][0]}</p>
      <p>{Description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
