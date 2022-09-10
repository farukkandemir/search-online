import SearchResults from "./components/SearchResults";
import {Routes, Route, Navigate} from "react-router-dom";
import NewsResults from "./components/NewsResults";
import ImagesResults from "./components/ImagesResults";
import VideosResults from "./components/VideosResults";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="container">
      <Header />
      <SearchBar />

      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/news" element={<NewsResults />} />
        <Route path="/image" element={<ImagesResults />} />
        <Route path="/video" element={<VideosResults />} />
      </Routes>
    </div>
  );
}

export default App;
