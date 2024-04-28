import React from "react";
interface Pageprops {
    title:string,
    button:string,
    children:React.ReactNode


}
const PageComponent : React.FC<Pageprops> = (title,button='',children) => {
    return (
        <div>
            
        </div>
    )
}

export default PageComponent;