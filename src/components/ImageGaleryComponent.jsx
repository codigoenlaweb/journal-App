import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { IconButton } from "@mui/material";
import { UploadOutlined } from "@mui/icons-material";

export default function ImageGaleryComponent({ images }) {
  if (images.length >= 1) {
    return (
      <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight={240}>
        {images.map((item) => (
          <ImageListItem key={item}>
            <img
              src={`${item}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  } else {
    return (
      <>
        <article className=" bg-neutral-200 rounded-lg w-full flex justify-center items-center py-8">
          <h4 className="text-gray-500 font-bold text-2xl">
            Upload images by pressing the button{" "}
            <UploadOutlined sx={{color: 'rgb(107 114 128 / var(--tw-text-opacity))', fontSize: '36px'}} />
          </h4>
        </article>
      </>
    );
  }
}
