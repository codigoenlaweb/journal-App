import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isSaving: false,
  messageSaved: null,
  notes: [],
  active: null,
  // active: {
  //     id: 12345,
  //     date: 12345,
  //     title: '',
  //     body: '',
  //     imageUrls: [],
  // }
};
export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    creatingNewNote: (state, { payload }) => {
      state.isSaving = true;
    },
    setMessageSavedNull: (state, { payload }) => {
      state.messageSaved = null;
    },
    addNewEmptyNotes: (state, { payload }) => {
      state.notes.push(payload);
      state.isSaving = false;
    },
    setActiveNotes: (state, { payload }) => {
      state.active = payload;
    },
    setNotes: (state, { payload }) => {
      payload.notes.map((e) => state.notes.push(e));
    },
    setSaving: (state, { payload }) => {
      state.isSaving = true;
    },
    updateNote: (state, { payload }) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) =>
        note.id === payload.id ? payload : note
      );
      state.messageSaved = "Your note has been saved";
    },
    setPhotosToActiveNote: (state, { payload }) => {
      state.active.imageUrls = [...payload.imageUrls];
      state.isSaving = false;
      state.notes = state.notes.map((note) =>
        note.id === payload.id ? payload : note
      );
      state.messageSaved = "successfully uploaded images";
    },
    clearNoteLogout: (state, { payload }) => {
      state.active = null;
      state.notes = [];
      state.isSaving = false;
    },
    deleteNoteById: (state, { payload }) => {
      state.notes = state.notes.filter((note) => {
        if (note.id !== payload.id) return note;
      });
      state.active = null;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  addNewEmptyNotes,
  setActiveNotes,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  creatingNewNote,
  setMessageSavedNull,
  setPhotosToActiveNote,
  clearNoteLogout,
} = journalSlice.actions;
