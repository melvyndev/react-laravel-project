import React from "react";
interface Pageprops {
    title:string,
    button:string,
    children:React.ReactNode


}
const PageComponent : React.FC<Pageprops> = ({title,button='',children}) => {
    return (
        <div>
            <h1>{title}</h1>
            {button && <button>{button}</button>}
            {children}
        </div>
    )
}

export default PageComponent;
