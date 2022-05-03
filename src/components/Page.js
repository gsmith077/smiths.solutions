import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useMarkdown } from "../hooks/useMarkdown";
import rehypeRaw from 'rehype-raw'

const TITLE = "smiths.solutions";

const Page = ({ slug, title }) => {
  const [loading, markdown] = useMarkdown(slug);

  useEffect(() => {
    document.title = `${TITLE} :: ${title || slug}`;
  }, [slug, title]);

  if (!markdown && !loading) return <Page slug={"lost"} title="404" />;
  return <ReactMarkdown children={markdown} rehypePlugins={[rehypeRaw]} />;
};

export default Page;
