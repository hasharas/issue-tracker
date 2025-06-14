import Link from 'next/link';
import React from 'react';
import {FaBug} from "react-icons/fa";

const NavBar = () => {


      const links = [
            {lable: 'Dashbord', href: '/'},
            {lable: 'Issues', href: '/issues'}
      ];

      return (
            <nav className='nav flex space-x-7 py-3 h-16 border-b items-center px-4'>
                  <Link href="/" className='logo text-2xl'><FaBug /></Link>
                  <ul className='ullist flex space-x-7'>

                        {links.map(link =>
                              <Link
                                    key={link.href}
                                    href={link.href}
                                    className='list text-[#92653c] hover:text-[#b28255] transition-colors'
                              >{link.lable}</Link>
                        )}

                  </ul>
            </nav>
      );
}

export default NavBar;
