import React from "react";
import Offer from "./Offer";

function Listing({ offerList }) {
  return (
    <div className="item-list">
      {offerList.map((offerItem) => (
        <Offer key={offerItem.listing_id} {...offerItem} />
      ))}
    </div>
  );
}
export default Listing;
