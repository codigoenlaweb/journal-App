import { Typography } from "@mui/material";
import React from "react";
import {JournalLayout} from "../layouts/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        <NothingSelectedView />
        {/* <NoteView /> */}
      </JournalLayout>

    </>
  );
};
