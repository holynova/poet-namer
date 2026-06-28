import React from "react";
import { Header } from "./components/Header/Header";
import NamerPage from "./pages/NamerPage/NamerPage";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentKey="namer" />
      <main className="pt-16 py-6">
        <NamerPage />
      </main>
    </div>
  );
};

export default App;
