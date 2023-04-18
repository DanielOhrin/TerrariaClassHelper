import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Potions from "./potions/Potions"

function ApplicationViews() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />

                <Route path="potions" element={<Potions />} />
            </Route>
        </Routes>
    )
}

export default ApplicationViews