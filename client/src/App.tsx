import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./authentication/Signup";
import Login from "./authentication/Login";
import ProfileLinksSection from "./features/links/ProfileLinksSection";
import { LinksProvider } from "./contexts/LinksContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <LinksProvider>
        <Routes>
          <Route path="/" index element={<Navigate replace to="signup" />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="devlinks-api/v1/users">
            <Route path="verify-email" element={<Signup />} />
          </Route>
          <Route path="profile" element={<ProfileLinksSection />} />
        </Routes>
        <Toaster
          position="bottom-right"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#fff",
              color: "#0c0e16",
            },
          }}
        />
      </LinksProvider>
    </QueryClientProvider>
  );
}

export default App;
