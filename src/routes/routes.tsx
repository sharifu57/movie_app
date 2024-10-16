import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/baseLayout";
import HomePage from "../pages/navigation/homePage";
import SignIn from "../pages/authentication/signIn";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            }
        ]
    },
    {
        path: '/signIn',
        element: <SignIn/>
    },
    // {
    //     path: '/*',
    //     element: <h1>Page not found</h1>
    // }
])