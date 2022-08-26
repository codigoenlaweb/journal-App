import { Navigate, Route, Routes } from "react-router-dom";
import { ChekingAuth } from "../auth/pages/ChekingAuth";
import { AuthRoute } from "../auth/routes/AuthRoute";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") {
    return <ChekingAuth />;
  }

  return (
    <Routes>
      {
        status === "authenticated"
        ? <Route path="/*" element={<JournalRoutes />} /> /* journalApp */
        : <Route path="/auth/*" element={<AuthRoute />} /> /* login and register */
      }
      <Route path="/*" element={ <Navigate to='/auth/login' /> } />

    </Routes>
  );
};
