import React from "react";
function Offer({ url, MainImage, title, currency_code, price, quantity }) {
  let slicedTitle =
    title?.length > 50 ? title.slice(0, 50) + "..." : title?.length;

  let classesQuantity =
    (quantity <= 10 && `level-low`) ||
    (quantity <= 20 && `level-medium`) ||
    (quantity > 20 && `level-high`) ||
    null;

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage?.url_570xN} alt={slicedTitle} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{slicedTitle}</p>
        <p className="item-price">
          {(currency_code === "USD" && "$") || (currency_code === "EUR" && "€")}
          {price + " "}
          {currency_code !== "USD" && currency_code !== "EUR" && currency_code}
        </p>

        <p className={`item-quantity ${classesQuantity}`}>{quantity} left</p>
      </div>
    </div>
  );
}

export default Offer;
