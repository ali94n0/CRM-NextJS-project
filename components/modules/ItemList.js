import React from "react";
import FormInput from "./FormInput";

function ItemList({ form, setForm }) {
  const { products } = form;

  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({ ...form, products: newProducts });
  };

  const removeHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({ ...form, products: newProducts });
  };

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", quantity: "" }],
    });
  };

  return (
    <div className="item-list">
      <p>Purchased products</p>
      <div>
        {products.map((product, index) => (
          <ProductItem
            product={product}
            onChange={(e) => changeHandler(e, index)}
            onClick={() => removeHandler(index)}
          />
        ))}
      </div>
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
}

export default ItemList;

function ProductItem({ product, onChange, onClick }) {
  return (
    <div className="form-input__list">
      <FormInput
        label={"Product Name"}
        type={"text"}
        name={"name"}
        value={product.name}
        onChange={onChange}
      />
      <FormInput
        label={"Price"}
        type={"text"}
        name={"price"}
        value={product.price}
        onChange={onChange}
      />
      <FormInput
        label={"Quantity"}
        type={"number"}
        name={"quantity"}
        value={product.quantity}
        onChange={onChange}
      />
      <button onClick={onClick}>Remove</button>
    </div>
  );
}
