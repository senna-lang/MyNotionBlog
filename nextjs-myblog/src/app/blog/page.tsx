// "use client";

import ArticleList from "../components/ArticleList";
import Aside from "../components/Aside";
import React from "react";


const blog = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/notion`, { next: { revalidate: 10 } });
  const posts = await res.json();
  const fourPosts = posts.slice(0,4);

  // console.log(posts);
  const metaData = fourPosts.map((post: any) => {
    const getTags = (tags:any) => {
      const allTags = tags.map((tag:any) => {
        return tag.name;
      });
      return allTags;
    };

    const meta = {
      id: post.properties.Name.title[0].plain_text,
      description: post.properties.Description.rich_text[0].plain_text,
      date: post.properties.Date.date.start,
      slug: post.properties.Slug.rich_text[0].plain_text,
      tags: getTags(post.properties.Tags.multi_select),
    };
    return meta;
  });
  // console.log(metaData);

  return (
    <div className="h-auto xl:flex xl:mx-36">
      <section className="w-full items-center px-3 xl:w-[70%]">
      <div className="text-center my-7">
        <h1 className="text-5xl font-playfairDisplay ">NEW POSTS</h1>
      </div>
        <ArticleList articles={metaData} normal={true}/>
      </section>
      <section className=" flex flex-col items-center px-3 xl:w-[30%]">
        <Aside />
      </section>
    </div>
  );
};

export default blog;