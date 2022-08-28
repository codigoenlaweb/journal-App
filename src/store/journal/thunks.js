import { async } from "@firebase/util";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload } from "./api/fileUpload";
import {
  addNewEmptyNotes,
  setActiveNotes,
  creatingNewNote,
  setNotes,
  setSaving,
  updateNote,
  setPhotosToActiveNote,
  deleteNoteById,
} from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(creatingNewNote());
    const { id: uid } = getState().auth;
    const newDoc = doc(collection(getFirestore(), `${uid}/journal/notes`));
    const newNote = {
      id: newDoc.id,
      title: "",
      body: "",
      date: new Date().getTime(),
      imageUrls: [],
    };
    await setDoc(newDoc, newNote);

    dispatch(addNewEmptyNotes(newNote));
    dispatch(setActiveNotes(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { id } = getState().auth;
    if (!id) throw new Error("El uid del usuario no existe");

    const collectionRef = collection(getFirestore(), `${id}/journal/notes`);
    const docs = await getDocs(collectionRef);

    let notes = [];
    docs.forEach((doc) => {
      notes.push(doc.data());
    });
    dispatch(setNotes({ notes }));
  };
};

export const startSavedNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { id: uid } = getState().auth;
    const { active: noteActive } = getState().journal;

    const noteToFireStore = { ...noteActive };
    // delete noteToFireStore.id;
    const docRef = doc(getFirestore(), `${uid}/journal/notes/${noteActive.id}`);
    await setDoc(docRef, noteToFireStore, { merge: true });
    dispatch(updateNote(noteActive));
  };
};

export const startUploadFiles = (files = []) => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { active: noteActive } = getState().journal;
    const { id: uid } = getState().auth;
    const filesUploadPromises = [];

    for (const file of files) {
      filesUploadPromises.push(fileUpload(file));
    }
    const photoURL = await Promise.all(filesUploadPromises);

    const noteToFireStore = {...noteActive, imageUrls:[...noteActive.imageUrls,...photoURL]};

    const docRef = doc(getFirestore(), `${uid}/journal/notes/${noteActive.id}`);
    await setDoc(docRef, noteToFireStore, { merge: true });

    dispatch(setPhotosToActiveNote(noteToFireStore));
  };
};

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { active: noteActive } = getState().journal
    const { id: uid } = getState().auth;

    const docRef = doc(getFirestore(), `${uid}/journal/notes/${noteActive.id}`);
    await deleteDoc(docRef);

    dispatch(deleteNoteById(noteActive));
    return {ok: true};
  }
}