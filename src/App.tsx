import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./config/constants";
import LoginPage from "./view/login";
import Layout from "./layout/layout";

function App() {
    return (
        <Routes>
            <Route path={'/login'} element={<LoginPage/>}/>
            {
                routes.map(route =>
                    <Route
                        key={route.id}
                        path={route.path}
                        element={
                            <Layout>
                                <route.component/>
                            </Layout>}
                    />
                )
            }
            <Route
                path={"/"}
                element={<Navigate to={'/login'} replace/>}
            />
        </Routes>
    );
}

export default App;
