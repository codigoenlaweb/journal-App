import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import ImageGaleryComponent from "../../components/ImageGaleryComponent";

export const NoteView = () => {
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
            28 de agosto. 2023
          </Typography>
        </Grid>
        <Grid item>
          <Button color="secondary" sx={{ paddingX: 2, paddingY: 1 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
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
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="what happened today"
          minRows={4}
          sx={{ border: "none", mb: 2 }}
        />
      </Grid>

      <ImageGaleryComponent />
    </>
  );
};
