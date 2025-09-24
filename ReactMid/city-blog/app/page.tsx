import Image from "next/image";
import { Routes,Route } from 'react-router';
import HomePage from './Pages/HomePage';
import GamesPage from './Pages/GamesPage';
import BlogPage from './Pages/BlogPage';

export default function Home() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path='/games' element={<GamesPage></GamesPage>}></Route>
      <Route path='/blog' element={<BlogPage></BlogPage>}></Route>
    </Routes>
  );
}
