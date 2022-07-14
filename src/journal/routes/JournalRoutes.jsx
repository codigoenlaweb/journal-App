import { Navigate, Route, Routes } from "react-router-dom"
import { JournalLayout } from "../layouts/JournalLayout"


export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<JournalLayout />} />
        <Route path="/*" element={ <Navigate to="/" />} />
    </Routes>
  )
}
