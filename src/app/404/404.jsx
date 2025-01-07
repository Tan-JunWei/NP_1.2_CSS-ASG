import React from "react";

export default function Test404() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={{ fontSize: "3rem", color: "red" }}>404 - Page Not Found</h1>
      <p style={{ fontSize: "1.5rem" }}>Oops! The page you're looking for doesn't exist.</p>
      <button 
        style={{ 
          marginTop: "20px", 
          padding: "10px 20px", 
          fontSize: "1rem", 
          backgroundColor: "blue", 
          color: "white", 
          border: "none", 
          borderRadius: "5px", 
          cursor: "pointer" 
        }}
        onClick={() => window.location.href = "/"}
      >
        Back to Home
      </button>
    </div>
  );
}
