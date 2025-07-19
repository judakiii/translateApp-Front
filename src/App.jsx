import React from "react";
import { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SvgBoxListOutlineIcon, SvgDirectSendOutlineIcon } from "@assets/icons";
import { Header } from "@components";
import { LanguageProvider } from "@context";
import { INITIAL_DATA } from "./utils";
import "./App.css";

const TranslatePreview = React.lazy(() => import("./pages/Preview"));
const TranslateManagement = React.lazy(() => import("./pages/Management"));

const LISTMENU = [
  {
    name: "Preview",
    link: "/",
    icon: <SvgBoxListOutlineIcon size={28} color="#888888" />,
  },
  {
    name: "Management",
    link: "/management",
    icon: <SvgDirectSendOutlineIcon size={28} color="#888888" />,
  },
];

function App() {
  useEffect(() => {
    const saved = localStorage.getItem("languageData");

    if (!saved) {
      localStorage.setItem("languageData", JSON.stringify(INITIAL_DATA));
    }
  }, []);

  return (
    <>
      <LanguageProvider>
        <BrowserRouter>
          <div className="w-full md:w-96 min-h-screen bg-third flex flex-col justify-center items-center relative">
            <Header list={LISTMENU} />
            <section className="w-full px-6 flex-grow bg-third flex flex-col justify-center items-center">
              <Suspense
                fallback={<div className="text-center p-4">Loading...</div>}
              >
                <Routes>
                  <Route path="*" element={<TranslatePreview />} />
                  <Route path="/management" element={<TranslateManagement />} />
                </Routes>
              </Suspense>
            </section>
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </>
  );
}

export default App;
