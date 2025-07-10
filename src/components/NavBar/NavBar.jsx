import React from "react";
import { NavbarMenu } from "../../mockData/data";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";


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
        <Link
  to="/auth"
  className="font-semibold text-primary border-2 border-primary px-6 py-2 rounded-md hidden md:block hover:bg-primary hover:text-white transition duration-200"
>
  Login
</Link>

      </div>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        <MdMenu className="text-4xl"/>
        </div>
    </div>

  </nav>

}
export default Navbar