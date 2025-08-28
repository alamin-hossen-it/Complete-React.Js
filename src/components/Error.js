import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError()
    
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 16px",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          background: "linear-gradient(to right, white, gray)",
          WebkitBackgroundClip: "text",
          color: "Black",
        }}
      >
        <span>{err.status}<p>{err.statusText}</p></span> 
      </h1>

      <div
        style={{
          height: "1px",
          width: "320px",
          borderRadius: "2px",
          background: "linear-gradient(to right, gray, black)",
          margin: "20px 0",
        }}
      ></div>

      <p style={{ fontSize: "1.25rem", color: "gray", maxWidth: "500px" }}>
        The page you are looking for does not exist or has been moved.
      </p>

      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          backgroundColor: "white",
          color: "#1E1E1E",
          padding: "10px 28px",
          borderRadius: "9999px",
          marginTop: "40px",
          fontWeight: "500",
          textDecoration: "none",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#0f9aebff")
        }
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "black")}
      >
     Back to Home
        <svg
          style={{ transition: "transform 0.2s" }}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417"
            stroke="#1E1E1E"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Error;
