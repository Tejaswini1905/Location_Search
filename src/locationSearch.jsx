import React, { useState } from "react";
import axios from "axios";
import "./LocationSearch.css";

function LocationSearch() {
  const [query, setQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Function to fetch locations from OpenStreetMap
  const fetchLocations = async () => {
    if (!query) {
      alert("Please enter a location!");
      return;
    }

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;

    try {
      const response = await axios.get(url);
      setLocations(response.data);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  // When a user selects a location
  const handleSelectLocation = (location) => {
    setSelectedLocation({
      name: location.display_name,
      latitude: location.lat,
      longitude: location.lon,
    });
    setQuery(location.display_name);
    setLocations([]); // Hide suggestions after selection
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", }}>
      <h2>Search Locations</h2>
      <input
        type="text"
        placeholder="Enter location..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginRight: "10px",
          backgroundColor:"#d1d1d1",
          color:"black"
        }}
      />
      <button
        onClick={fetchLocations}
        style={{
          padding: "10px 15px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      {/* Display location suggestions */}
      <ul style={{ listStyleType: "none", padding: 0, cursor: "pointer" }}>
        {locations.map((location, index) => (
          <li
            key={index}
            onClick={() => handleSelectLocation(location)}
            style={{
              margin: "5px 0",
              padding: "5px",
              borderBottom: "1px solid #ddd",
            }}
          >
            {location.display_name}
          </li>
        ))}
      </ul>

      {/* Display Selected Location's Coordinates */}
      {selectedLocation && (
        <div style={{ marginTop: "20px" }}>
          <h3>Selected Location:</h3>
          <p><strong>Name:</strong> {selectedLocation.name}</p>
          <p><strong>Latitude:</strong> {selectedLocation.latitude}</p>
          <p><strong>Longitude:</strong> {selectedLocation.longitude}</p>
        </div>
      )}
    </div>
  );
}

export default LocationSearch;
