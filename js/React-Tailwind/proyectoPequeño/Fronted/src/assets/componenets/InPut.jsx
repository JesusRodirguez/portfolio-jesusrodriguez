import React, { Children } from "react";



const InPut = (classNameDiv="",classNameLabel="",textLabel="",
    type="",classNameInPut="", children
) => {
    return(
        <div  className={classNameDiv}>
            <label className={classNameLabel}>{textLabel}</label>
            <input type={type} className={classNameInPut}/>
            {children}
        </div>
    )
}

export default InPut;