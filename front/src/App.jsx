import React from 'react'
import Home from './components/pages/Home/Home'
import {
    BrowserRouter as Router,
    Routes,
    Route,

} from "react-router-dom";
import NewWorkout from './components/pages/NewWorkout/NewWorkout';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/new-workout" element={<NewWorkout />} />
            </Routes>
        </Router>


    )
}

export default App