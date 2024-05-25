import React, { useState, useEffect } from "react";
import axios from "axios";

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const userId = "665206a7a967420ad7e41682"; // ID from the database

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setError("Error fetching user details");
      }
    };
  
    fetchUser();
  }, [userId]);
  
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Display other user details as needed */}
    </div>
  );
};

export default UserDetails;
