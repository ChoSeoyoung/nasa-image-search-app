import React from 'react';

import ResponsiveAppbar from './ResponsiveAppbar';
import Footer from './Footer';

function Layout(props){
    const {children,} = props;
    return(
        <React.Fragment>
            <ResponsiveAppbar></ResponsiveAppbar>
            {children}
            <Footer></Footer>
        </React.Fragment>
    )
}

export default Layout;

