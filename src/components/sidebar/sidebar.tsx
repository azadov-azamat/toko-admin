import React, {useEffect, useState} from 'react';
import {CabinetNavigation} from "../../config/navigation";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "@material-tailwind/react";

function Sidebar() {

    const navigate = useNavigate()
    const [position, setPosition] = useState(0)
    const [openToggle, setOpenToggle] = useState(false)

    const toggle = () => setOpenToggle(!openToggle)

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])

    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        setPosition(winScroll)
    }

    return (
        <>
            <Button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar"
                    aria-controls="default-sidebar" type="button" onClick={toggle}
                    className={`flex ${position !== 0 || !openToggle ? 'fixed' : ''} ${!openToggle ? 'left-1/2' : ''} h-10 p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden bg-gray-100`}>
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd"
                          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </Button>
            <aside id="default-sidebar"
                   className={`fixed top-0 border left-0 z-40 w-64 h-screen transition-transform ${!openToggle ? '-translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
                   aria-label="Sidebar">
                <div className="flex flex-col justify-between h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <div className="">
                        <Link to={'/dashboard'} className="flex items-center pl-2.5 mb-5">
                            <img src="https://static-00.iconduck.com/assets.00/tokopedia-icon-512x512-7g3rko3i.png"
                                 className="h-6 mr-3 sm:h-7"
                                 alt="toko Logo"/>
                            <span
                                className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Toko dashboard</span>
                        </Link>
                        <ul className="space-y-2 font-medium">
                            {
                                CabinetNavigation.map(item =>
                                    <li key={item.id}>
                                        <Link to={item.navLink}
                                              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <span className="ml-3">{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="footer flex justify-center">
                        <Button color="red" onClick={()=> navigate('/login')}>Log out</Button>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;