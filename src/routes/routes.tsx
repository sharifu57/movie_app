import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/baseLayout";
import HomePage from "../pages/navigation/homePage";
import SignIn from "../pages/authentication/signIn";
import DashboardLayout from "../layouts/dashboardLayout";

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
        element: <SignIn/>,
        // errorElement: <ErrorBoundary/>
    },
    {
        path: '/dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                index: true,
                element: <h1>Dashboard</h1>
            }
        ]
    }
])