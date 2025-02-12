import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router";
import Home from "./pages/home";
import ShowCases from "./pages/showcases";



export default function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="welcome-to-my-garage" element={<ShowCases/>}/>
      </Routes>
    </QueryClientProvider>
  );
}
