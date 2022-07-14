import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "../auth/routes/AuthRoute";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
        {/* login and register */}
        <Route path="/auth/*" element={<AuthRoute />}/>

        {/* journalApp */}
        <Route path="/*" element={<JournalRoutes />}/>
    </Routes>
  )
}
