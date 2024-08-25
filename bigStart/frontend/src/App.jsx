import {useEffect} from "react";
import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import Layout from "./layout/index.jsx";
import Auth from "./pages/Auth/";
import SignUpPage from "./pages/Signup/index.jsx";
import LoginPage from "./pages/Signin/index.jsx";
import EmailVerificationPage from "./pages/EmailVerificationPage/index.jsx";
import Dashboard from "./pages/Dashboard/index.jsx";
import LoadingSpinner from "./components/LoadingSpinner/index.jsx";
import {useAuthStore} from "./store/authStore.js";

// protect routes that require authentication
const ProtectedRoute = ({children}) => {
    const {isAuthenticated, user} = useAuthStore();
    if(!isAuthenticated){
        return <Navigate to="/login" replace />;
    }
    if(!user.isVerified){
        return <Navigate to="/verify-email" replace />
    }

    return children;
}

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({children}) => {
    const {isAuthenticated, user} = useAuthStore();

    if(isAuthenticated && user.isVerified){
        return <Navigate to="/home" replace />
    }
    return children;
}


function App() {

    const {isCheckingAuth, checkAuth, isAuthenticated, user} = useAuthStore();

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);
    console.log(user)


  const router = createBrowserRouter([
    {
        path: "/",
        element: <Auth/>,
        children: [
            {
                path: "signup",
                element: <RedirectAuthenticatedUser> <SignUpPage/> </RedirectAuthenticatedUser>,
            },
            {
                path: "verify-email",
                element: <EmailVerificationPage/>,
            },
            {
                index: true,
                element: <LoginPage/>,
            }
        ]
    },
    {
        path: "/home",
        element: <Dashboard/> ,
    }
  ])

  return <RouterProvider router={router} />
}

export default App;
