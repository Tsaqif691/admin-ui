import React from "react";
import PostCard from "./PostCard";
import { staticPosts } from "./postsData"; 

function Exercise() {
  return (
    <div className="min-h-screen bg-special-mainBg p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-special-red2">
        Post Cards
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 w-[95%] mx-auto">
        {staticPosts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
}

export default Exercise;