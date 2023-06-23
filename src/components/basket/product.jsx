import React from "react";
import { store } from "../../redux/store";
import { delCartAc } from "../../redux/actions/cartAction";
import RemoveIcon from "../../assets/images/icons/remove";

function Product({ products }) {
  const handleCartItemDel = (id) => {
    store.dispatch(delCartAc({ id }));
  };

  console.log(products);

  return (
    <div className="basket__products-items">
      {products.map((item) => {
        return (
          <div className="basket__products-item" key={item.id}>
            <img
              src={item.img}
              className="basket__products-item-img"
              alt="basket__product"
            />
            <div className="basket__products-item-text">
              <div className="basket__products-item-span">
                <span className="basket__products-item-name">{item.name}</span>
                <span className="basket__products-item-price">
                  $ {item.price}
                </span>
              </div>
              <div className="basket__products-item-quantity">
                <button>-</button>
                <span>{item.quantity}</span>
                <button>+</button>
              </div>
            </div>
            <div className="basket__products-item-remove" onClick={() => handleCartItemDel(item.id)}>
              <RemoveIcon />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
