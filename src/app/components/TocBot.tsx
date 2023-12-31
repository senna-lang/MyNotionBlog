"use client";
import React from "react";
import tocbot from "tocbot";
import { useEffect } from "react";

const TocBot = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".post-detail",
      headingSelector: "h2,h3",
    });

    return () => tocbot.destroy();
  }, []);
  return (
    <div className="rounded-lg bg-white p-3 max-h-[80vh] overflow-y-auto">
      <h1 className=" font-bold text-xl mb-4 text-center font-sourceCodePro">Table Of Content</h1>
      <nav className="toc" />
    </div>
  );
};

export default TocBot;
