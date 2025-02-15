import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router";
import Home from "./pages/home";
import ShowCases from "./pages/showcases";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";


export default function App() {
  const [screenLoading, setScreenLoading] = useState(true);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 1000);
  }, []);

  
  const queryClient = new QueryClient()
  if (screenLoading) {
    return <Loader />
  } else {

    return (
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="welcome-to-my-garage" element={<ShowCases />} />
        </Routes>
      </QueryClientProvider>
    );
  }

}
