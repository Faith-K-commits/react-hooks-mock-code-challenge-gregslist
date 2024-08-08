import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => setSearchQuery(query);
  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <ListingsContainer searchQuery={searchQuery} />
    </div>
  );
}

export default App;
