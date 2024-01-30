import React from "react";
import * as blog from '@/app/features/blog/components/index'
import PageNation from "@/app/components/elements/PageNation";
import { createMetaData } from "@/app/utils/metaData";
import { getAllPosts } from "@/app/lib/notion";
import { Article } from "@/app/types/types";

const categoryPageList = async ({ params }: { params: { category: string; page: number } }) => {
  const currentCat = params?.category;
  const posts = await getAllPosts();

  const metaData = createMetaData(posts);

  //カテゴリーでフィルター
  const filteredData = metaData.filter((data: Article) =>
    data.category.find((cat: string) => cat === currentCat)
  );

  //記事を最新の６つまでに
  const numberOfPage = Math.floor(filteredData.length / 6) + (filteredData.length % 6 > 0 ? 1 : 0);
  const currentPage: number = params?.page;
  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;
  const postsByPage = filteredData.slice(startIndex, endIndex);

  return (
    <div className="h-auto xl:mx-40">
      <section className="w-full items-center px-3 ">
        <div className="my-7 text-center">
          <h1 className="font-PlayFairDisplay text-5xl">{currentCat}</h1>
        </div>
        <blog.ArticleList articles={postsByPage} normal={false} />
      </section>
      <PageNation numberOfPage={numberOfPage} tag={currentCat} currentPage={currentPage} />
    </div>
  );
};
export default categoryPageList;
