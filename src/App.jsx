import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Applayout from "./components/ui/Applayout";
import Main from "./pages/Main";
import Hotels from "./pages/Hotels";
import Hotel from "./components/Hotel";
import HotelLayout from "./components/ui/HotelLayout";
import Conference from "./components/ui/Conference";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            {/* <Route index element={<Navigate replace to="/" />} /> */}
            <Route path="/" element={<Main />} />
            <Route path="/hotels" element={<Hotels />}>
              <Route element={<HotelLayout />}>
                <Route path="/hotels/room" element={<Hotel />} />
                <Route path="/hotels/conference" element={<Conference />} />
                <Route path="/hotels/hotel" element={<Hotel />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
