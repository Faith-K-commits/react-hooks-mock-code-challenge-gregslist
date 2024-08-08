import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchQuery }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((data) => setListings(data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setListings(listings.filter((listing) => listing.id !== id));
        } else {
          throw new Error("Failed to delete listing");
        }
      })
      .catch((error) => console.log(error));
  };

  const filteredListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <ul className="cards">
        {filteredListings.map((listing) => (
          <li>
            <ListingCard
              key={listing.id}
              listing={listing}
              onDelete={handleDelete}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
