import { getPages } from "./getDataFromApi.js";
import fs from "fs";
import fm from "front-matter";
import { marked } from "marked";

const renderer = new marked.Renderer();

renderer.paragraph = (input) => {
  const hasImage = input.startsWith("<figure");
  return hasImage ? input : `<p>${input}</p>`;
};

export async function pageData(uri) {
  const pagesCollection = getPages("content/pages");
  const pageData = pagesCollection.find((page) => page.uri === uri);
  const segments = [];
  const pieces = uri.split("/");

  const pathData = pieces.map((segment) => {
    segments.push(segment);
    return pagesCollection.find((page) => page.uri === segments.join("/"));
  });

  const siteFile = fs.readFileSync("content/pages/globals/site.md");
  const siteData = fm(siteFile.toString()).attributes;

  return {
    ...pageData,
    site: siteData,
    path: pathData,
  };
}
