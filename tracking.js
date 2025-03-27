// src/components/Tracking.js
import React, { useEffect, useState } from 'react';
import supabase from '../supabaseClient';

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch tracking number
    const fetchTrackingNumber = async () => {
      const { data, error } = await supabase
        .from('tracking_numbers') // Your table name
        .select('tracking_number') // Field to fetch
        .limit(1); // Optional: Limit to 1 record

      if (error) {
        setError(error.message);
      } else {
        setTrackingNumber(data[0]?.tracking_number);
      }
    };

    fetchTrackingNumber(); // Call the function
  }, []);

  return (
    <div>
      <h1>Tracking Number</h1>
      {error && <p>Error: {error}</p>}
      {trackingNumber ? (
        <p>{trackingNumber}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Tracking;
