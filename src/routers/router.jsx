import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from "../pages/home.jsx"
import {Old} from "../pages/old.jsx"

export const MyRoutes = () => (
    <BrowserRouter>
    	<Routes>
        	<Route path="/" element={<Home/>}/>
            <Route path="/old" element={<Old/>}/>
        </Routes>
    </BrowserRouter>
)