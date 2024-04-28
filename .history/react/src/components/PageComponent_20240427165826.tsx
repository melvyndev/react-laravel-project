import React from "react";
interface Pageprops {
    title:string,
    button:string,
    children:React.ReactNode


}
const PageComponent : React.FC<Pageprops> = ({title,button='',children}) => {
    return (
        <div>
           

            <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
        {button && <button>{button}</button>}
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      {title} content

      </div>
    </main>
        </div>
    )
}

export default PageComponent;
