import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {
  const [isfavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isfavorite);
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {isfavorite ? (
          <button
            onClick={handleFavorite}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{listing.description}</strong>
        <span> {listing.location}</span>
        <button
          onClick={() => onDelete(listing.id)}
          className="emoji-button delete"
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
