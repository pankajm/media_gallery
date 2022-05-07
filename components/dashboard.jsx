import React, { useEffect, useState } from "react";
import Head from "next/head";
import ImageContainer from "./imageContainer";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { paginate } from "../lib/utils";

const Dashboard = ({ mediaData }) => {
  const [type, setType] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(Math.floor(mediaData.length / 12));

  useEffect(() => {
    setCurrent(1);
    type === "all"
      ? setFilteredImages(paginate(mediaData, 1, 12))
      : setFilteredImages(
          paginate(
            mediaData.filter((image) => image.type === type),
            1,
            12
          )
        );
    if (type !== "all") {
      setCount(
        Math.floor(mediaData.filter((image) => image.type === type).length / 12)
      );
    } else {
      setCount(Math.floor(mediaData.length / 12));
    }
  }, [type]);

  const onChange = (event, page) => {
    const filteredMediaData =
      type !== "all"
        ? mediaData.filter((media) => media.type === type)
        : mediaData;
    const pageItems = paginate(filteredMediaData, page, 12);
    setCurrent(page);
    setFilteredImages(pageItems);
    console.log(pageItems, page);
  };

  return (
    <div>
      <Head>
        <title>Media Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="tags">
        <TagButton clasName="tag" name={"all"} handleSetTag={setType} />
        <TagButton name={"image"} handleSetTag={setType} />
        <TagButton name={"video"} handleSetTag={setType} />
      </div>
      <div className="pagination">
        <div style={{ margin: "auto" }}>
          <Stack spacing={2}>
            <Pagination
              color="primary"
              count={count}
              variant="outlined"
              shape="rounded"
              defaultPage={1}
              onChange={onChange}
              page={current}
            />
          </Stack>
        </div>
      </div>

      <ImageContainer filteredImages={filteredImages} type={type} />
    </div>
  );
};

const TagButton = ({ name, handleSetTag }) => {
  return (
    <button className="tag" onClick={() => handleSetTag(name)}>
      {name.toUpperCase()}
    </button>
  );
};

export default Dashboard;
