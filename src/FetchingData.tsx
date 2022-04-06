import React, { useState, useEffect } from "react";
import axios from "axios";
import SendingData from "./SendingData";
import { Typography } from "@mui/material";

const FetchingData = () => {
  const [post, setPost] = useState<any>([]);
  const [page, setPage] = useState<any>(0);
  const [noMore, setNoMore] = useState<any>(true);
  const fetching = async () => {
 
    axios
      .get(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
      )
      .then((res: any) => {
        setNoMore(res?.data?.nbPages >= page);
        const temp: any = [];
        res?.data?.hits?.map((i: any, index: number) => {
          temp.push({...i, id: i.objectID + "" + index});

        });
        setPage(page + 1);
        setPost([...post, ...temp]);
      });
  };

  useEffect(() => {
    fetching();
    return () => setPost([]);
  }, []);
  useEffect(() => {
    if (page > 0) {
      const timer = setInterval(() => {
        fetching();
      }, 10000);
      return () => clearInterval(timer);
    }
  }, [page,post]);

  return (
    <div data-testid="hide">
      <Typography
        variant="h5"
        style={{ textAlign: "center" }}
        data-testid="heading"
      >
        Posts
      </Typography>
      {post.length > 0 && (
        <SendingData post={post} fetching={fetching} noMore={noMore} />
      )}
    </div>
  );
};

export default FetchingData;
