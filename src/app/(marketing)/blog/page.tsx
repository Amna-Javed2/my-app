import React from "react";
import Link from "next/link";
import { blogs } from "@/constants";

function blog() {
  return (
    <div className="flex gap-5 py-10">
      {blogs.map((blog, index) => (
        <Link key={blog.id} href={`/blog/${blog.id}`}>
          BlogDetails
        </Link>
      ))}

      {/* <Link href={"/blog/blog1/123"}>Blog1</Link>
      <Link href={"/blog/blog2"}>Blog2</Link>
      <Link href={"/blog/blog3"}>Blog3</Link>
      <Link href={"/blog/blog4"}>Blog4</Link>
      <Link href={"/blog/blog5"}>Blog5</Link>
      <Link href={"/blog/blog6"}>Blog6</Link> */}
    </div>
  );
}

export default blog;
