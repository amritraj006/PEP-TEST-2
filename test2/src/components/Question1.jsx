import React, { useEffect, useState } from "react";
import axios from "axios";

const Question1 = () => {
  const [data, setData] = useState("Fetching...");
  const [loading, setLoading] = useState(false);
  const url = "https://catfact.ninja/fact";

  const apiCall = async () => {
    try {
        setLoading(true);
        const res = await axios.get(url);
        const fact = res.data.fact;
        setData(fact);
     } catch (error) {
        console.error("Error fetching cat fact:", error);
        setData("❌ Failed to load cat fact. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);


  return (
    <div className="min-h-screen grid place-items-center bg-gray-200 p-4">
  <div className="w-full max-w-md rounded-lg bg-gray-100 p-5 shadow-md text-center">
    <h2 className="text-xl font-bold text-gray-800">
      🐱 Random Cat Fact
    </h2>

    <p className="mt-3 min-h-[80px] text-gray-700 px-2">
      {loading ? "Loading new fact..." : data}
    </p>

    <button
      onClick={apiCall}
      disabled={loading}
      className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? "Fetching..." : "Get New Fact"}
    </button>
  </div>
</div>
  );
};


export default Question1;


