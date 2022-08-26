import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { JournalLayout } from "../layouts/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        <NothingSelectedView />
        {/* <NoteView /> */}
      </JournalLayout>

      <IconButton
          size="large"
          sx={{
            color: "white",
            backgroundColor: "error.main",
            ":hover": {
              backgroundColor: "error.main",
              opacity: 0.8,
              boxShadow: "0px 4px 6px #272727, 0px 2px 4px #272727",
            },
            position: "fixed",
            right: 50,
            bottom: 50,
          }}
        >
          <AddOutlined size="30" />
        </IconButton>
    </>
  );
};
