    import React from "react";
    import '../index.css'

    const Navbar = ({ClassHeader="",ClassH1="",TextoH1="",ClassUl="",children}) => {
        return(
            <header className={ClassHeader}>
                <h1 className={ClassH1}>{TextoH1}</h1>
                <ul  className={ClassUl}>
                {children}
                </ul>
            </header>   
        )
    }

    export default Navbar;