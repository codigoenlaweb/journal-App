import { Delete, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageGaleryComponent from "../../components/ImageGaleryComponent";
import { useForm } from "../../hooks/useForm";
import { setActiveNotes, setMessageSavedNull } from "../../store/journal/journalSlice";
import { startDeletingNote, startSavedNote, startUploadFiles } from "../../store/journal/thunks";
import Swal from 'sweetalert2'

export const NoteView = () => {
  const { active: noteActive, messageSaved, isSaving } = useSelector((state) => state.journal);
  const { title, body, date, onInputChange, formState } = useForm(noteActive);
  const dateString = useMemo(() => {
    const dateFormat = new Date(date)
    return `${dateFormat.getFullYear()}/${dateFormat.getMonth()}/${dateFormat.getDate()}`
  }, [date]);
  const dispatch = useDispatch();

  const inputFileRef = useRef()

  useEffect(() => {
    if (messageSaved != null) {
      Swal.fire({
        icon: 'success',
        title: messageSaved,
        showConfirmButton: false,
        timer: 1500
      })
      dispatch(setMessageSavedNull())
    }
  }, [messageSaved])

  const onSaveNote = () => {
    dispatch(startSavedNote())
  }

  useEffect(() => {
    dispatch(setActiveNotes(formState));
  }, [formState]);

  const onFileInputChange = ({target}) => {
    if (target.files.length === 0) return;
    dispatch(startUploadFiles(target.files))
  }

  const onAlertDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete note!',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startDeletingNote())
      }
    }).then((result) => {
      if (result.ok) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 1 }}
      >
        <Grid item>
          <Typography fontSize={32} fontWeight="light">
            {dateString}
          </Typography>
        </Grid>
        
        <Grid item>
          <input type="file" multiple onChange={onFileInputChange} ref={inputFileRef} style={{display:"none"}}/>

          <IconButton color="secondary" disabled={isSaving} onClick={onAlertDelete}>
            <Delete />
          </IconButton>

          <IconButton color="secondary" disabled={isSaving} onClick={() => inputFileRef.current.click()}>
            <UploadOutlined />
          </IconButton>

          <Button color="secondary" sx={{ paddingX: 2, paddingY: 1 }} onClick={onSaveNote}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Saved
          </Button>
        </Grid>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="enter title"
          label="Title"
          sx={{ border: "none", mb: 1 }}
          value={title}
          name="title"
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="what happened today"
          minRows={4}
          sx={{ border: "none", mb: 2 }}
          value={body}
          name="body"
          onChange={onInputChange}
        />
      </Grid>

      <ImageGaleryComponent images={noteActive.imageUrls}/>
    </>
  );
};
