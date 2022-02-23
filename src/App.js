
import React from "react";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { PostsContextProvider } from "./components/context/posts-context";
import Navbar from "./components/navigation/Navbar";
import PageNotFound from "./components/pages/PageNotFound";
import { Footer } from "./components/layout/Footer";
import {Banner} from "./components/layout/Banner";
import Postlist from "./components/common/PostList";
import Main from "./components/layout/Main";

function App() {
  return (
    <div className="App">

      <PostsContextProvider>
      <BrowserRouter >
      <Navbar />
      <Main />
        <Routes>
          <Route path="/" element={<Navigate to="/all" />} />
          <Route path="/:category" element={<Postlist/>} />
         <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Banner />
      <Footer />
      </BrowserRouter>
      </PostsContextProvider>

    </div>
  );
}

export default App;
