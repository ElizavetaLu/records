import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Band from "./pages/band/Band";
import Member from "./pages/member/Member";
import Album from "./pages/album/Album";
import RootLayout from "./layouts/root/RootLayout";


function App() {

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Main />} />
        <Route path="band" element={<Band />} />
        <Route path="member" element={<Member />} />
        <Route path="album" element={<Album />} />
      </Route>
    </Routes>
  )
}

export default App
