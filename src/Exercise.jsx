import React from "react";
import UserCard from "./UserCard";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard 
          name="Tsaqif"
          email="Tsaqif@gmail.com"
          street="Jl. Merdeka No. 123"
          city="Jakarta" 
          />
          <UserCard 
          name="Akmal"
          email="Akmal@gmail.com"
          street="Jl. Sudirman No. 456"
          city="Bandung"
          />
          <UserCard 
          name="Ivan"
          email="Ivan@gmail.com"
          street="Jl. Diponegoro No. 789"
          city="Surabaya"
          />
        </div>
      </div>
    </>
  );
}

export default Exercise;