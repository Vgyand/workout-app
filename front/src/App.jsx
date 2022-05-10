import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,

} from "react-router-dom";
import Error404 from './components/pages/404';
import { routes } from './dataRoutes';
import { useAuth } from './hooks/useAuth';

const App = () => {
    const { isAuth } = useAuth()
    return (
        <Router>
            <Routes>
                {routes.map(route => {
                    if (route.auth && !isAuth) {
                        return false
                    }

                    return (
                        <Route
                            path={route.path}
                            exact={route.exact}
                            key={`route ${route.path}`}
                            element={route.component}
                        />
                    )
                })}
                <Route path="*" element={<Error404 />} />


            </Routes>
        </Router>


    )
}

export default App