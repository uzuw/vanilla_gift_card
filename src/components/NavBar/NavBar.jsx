import React from "react";
import { NavbarMenu } from "../../mockData/data";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";




const Navbar = () => {
  const [open,setOpen] = React.useState(false);
  return <nav>
    <div className="container flex justify-between items-center py-8">
      <div className="text-2xl flex items-center gap-2 font-bold py-8">
        <p>redeem</p>
        <p className="text-secondary">hub</p>
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center gap-6 text-gray-600">
          {NavbarMenu.map((item) => {
           return (
             <li key={item.id}>
              <a href={item.link} className="inline-block py-1 px-3 hover:text-primary font-semibold">{item.title}</a>
             </li>
           );
          })}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
          <CiSearch />
        </button>
        <button className="hove:bg-primary font-semibold hover:text-primary rounded-md bordefr-2 border-primary px-6 py-2 duration-200 hidden md:block">
          login
        </button>
      </div>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        <MdMenu className="text-4xl"/>
        </div>
    </div>

  </nav>

}
export default Navbar