import {useRoutes} from "react-router-dom"
import ContactUs from "../compoment/contactUs"
import OurServices from "../compoment/ourServices"
import Home from "../compoment/home"
import React from 'react'
import NavBar from "../compoment/navBar"


const Route = () => {

    const element=useRoutes([

        {path:"/",element:<Home/>},
        {path:"/contact",element:<ContactUs/>},
        {path:"/services",element:<OurServices />}

    ])

  return (
    <div><NavBar/>{element}</div>
  )
}

export default Route