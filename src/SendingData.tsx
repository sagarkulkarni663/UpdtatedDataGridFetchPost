import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import InfiniteScroll from "react-infinite-scroll-component";
import { TextField, Typography } from "@mui/material";

const columns: GridColDef[] = [
  { field: "title", headerName: "Title", width: 450 },
  { field: "url", headerName: "Url", width: 450 },
  { field: "created_at", headerName: "CreatedAt", width: 200 },
  { field: "author", headerName: "Author", width: 100 },
];

const SendingData = ({ post, fetching, noMore }: any) => {
  const navigation = useNavigate();
  const [search, setSearch] = useState<any>("");

  return (
    <div data-testid="main" style={{ padding: "1em" }}>
      <div style={{ textAlign: "end", paddingBottom: "0.5em" }}>
        <TextField
          label="search"
          placeholder="example title,author"
          value={search}
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
          data-testid="search"
        />
      </div>
      <InfiniteScroll
        dataLength={post.length}
        scrollThreshold={0.9}
        next={fetching}
        loader={
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Loading...
          </Typography>
        }
        hasMore={noMore}
        endMessage={
          <Typography variant="h5" style={{ textAlign: "center" }}>
            {" "}
            All posts are over
          </Typography>
        }
      >
        <DataGrid
           rows={post?.filter((item: any) => {
            const title = item.title
              .toLowerCase()
              .includes(search.toLowerCase());
            const Author = item.author
              .toLowerCase()
              .includes(search.toLowerCase());
              const Url = item?.url && item?.url
              .toLowerCase()
              .includes(search.toLowerCase());
              
            return title || Author ||Url
          })}
          columns={columns}
          autoHeight={true}
          onRowClick={(item) => navigation("fetching", { state: item.row })}
        />
      </InfiniteScroll>
    </div>
  );
};

export default SendingData;
