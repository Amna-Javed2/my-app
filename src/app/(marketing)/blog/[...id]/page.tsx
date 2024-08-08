import React from "react";
import { blogs } from "@/constants";

//inline params ki type//func mei jaha type di uski jgh typename (InlineParams)
type InlineParams = {
  params: {
    id: string;
  };
};

const findBlogDetail = (id: number) => {
  console.log(id);
  return blogs.find((blog) => {
    return blog.id === id;
  });
};

function blog1({ params }: { params: { id: string } }) {
  console.log(params.id);
  const blog = findBlogDetail(Number(params.id));
  console.log(blog);
  return <div>Blog1 Detail (Dynamic Routes)
    <div>
      <h1 className="font-bold">{blog?.title}</h1>
      <p>{blog?.content}</p>
      <p className="font-semibold">Author: {blog?.author}</p>

    </div>
  </div>;
}

export default blog1;
