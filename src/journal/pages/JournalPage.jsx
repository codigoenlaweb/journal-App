import { AddOutlined } from "@mui/icons-material";
import { IconButton, Select } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";
import { JournalLayout } from "../layouts/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.journal);

  const onStartNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <>
      <JournalLayout>
        {!!active ? <NoteView /> : <NothingSelectedView />}
      </JournalLayout>

      <IconButton
        size="large"
        disabled={isSaving}
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
        onClick={onStartNewNote}
      >
        <AddOutlined size="30" />
      </IconButton>
    </>
  );
};
