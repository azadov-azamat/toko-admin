import React from 'react';
import {LayoutProps} from "./layout.props";
import Sidebar from "../components/sidebar/sidebar";

function Layout({children}: LayoutProps): JSX.Element {

    return (
        <div className={'flex w-full h-screen'}>
            <Sidebar/>
            <main className={'p-4 sm:ml-64 transition-transform duration-500 mt-10'}>{children}</main>
        </div>
    );
}

export default Layout;