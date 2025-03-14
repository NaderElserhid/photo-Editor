import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import HomePage from "./router/homePage/homePage";
import CreatePage from "./router/createPage/createPage";
import PostPage from "./router/postPage/postPage";
import AuthPage from "./router/authPage/authPage";
import SearchPage from "./router/searchPage/searchPage";
import ProfilePage from "./router/profilePge/profilePage";
import MainLayout from "./layouts/mainLayout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/pin/:id" element={<PostPage />} />
          <Route path="/:username" element={<ProfilePage />} />
          <Route path="/:search" element={<SearchPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
