import React from "react";

const RegionSelector = ({ regions, selectedRegion, setSelectedRegion }) => {
  return (
    <div className="region-selector">
      <h2>Select Region</h2>
      <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
        {regions.map((region, index) => (
          <option key={index} value={region.name}>
            {region.name.charAt(0).toUpperCase() + region.name.slice(1)}  {}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegionSelector;