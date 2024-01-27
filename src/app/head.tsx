import React from "react";
import { ColorSchemeScript } from "@mantine/core";

const Head = () => {
  return (
    <>
      <title>SENNA BLOG</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <script async src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/pace-js@latest/pace-theme-default.min.css"
      />
      <ColorSchemeScript />
    </>
  );
};

export default Head;
