// src/App.js
import React, { useState } from "react";
import Header from "./components/Header";
import MaterialForm from "./components/MaterialForm";
import MaterialRecommendations from "./components/MaterialRecommendations";
import { alternatif } from "./data/data";

const App = () => {
  const [recommendations, setRecommendations] = useState([]);

  const calculateWeightedProduct = (criteria) => {
    return alternatif
      .map((alt) => {
        const scores = Object.keys(criteria).map((key) =>
          Math.pow(alt.value[key], criteria[key])
        );
        const wpScore = scores.reduce((a, b) => a * b, 1);
        return { ...alt, wpScore };
      })
      .sort((a, b) => b.wpScore - a.wpScore);
  };

  const handleFormSubmit = (criteria) => {
    const recommendedMaterials = calculateWeightedProduct(criteria);
    setRecommendations(recommendedMaterials);
  };

  return (
    <div className="App">
      <Header />
      <div className="p-5 text-lg">Kriteria Material Produk</div>
      <MaterialForm onFormSubmit={handleFormSubmit} />
      <MaterialRecommendations recommendations={recommendations} />
    </div>
  );
};

export default App;
