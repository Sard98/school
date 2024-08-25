import { useEffect } from "react"
import {Outlet} from "react-router-dom";
import FloatingShape from "../../components/FloatingShape/index.jsx";
import {Route, Routes} from "react-router-dom";
import { Toaster } from "react-hot-toast";


export default function Auth(){

    return (
        <div className="min-h-screen bg-gradient-to-br
            from-gray-900 via-green-900 to-emerald-900 flex items-center
            justify-around relative overflow-hidden">
            <FloatingShape color='bg-green-500' size='w-64 h-64' top='-5%' left="10%" delay={0} />
            <FloatingShape color='bg-green-500' size='w-48 h-48' top='70%' left="80%" delay={5} />
            <FloatingShape color='bg-green-500' size='w-32 h-32' top='40%' left="-10%" delay={2} />
            <Outlet/>
            <Toaster />
        </div>
    )
}