'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React from 'react';
import {FaBug} from "react-icons/fa";

const NavBar = () => {

      const currentPath = usePathname();
      console.log(currentPath);

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
                                    className={`${link.href === currentPath ? 'text-zink-900' : 'text-zinc-500'} list hover:text-zinc-700 transition-colors`}
                              >{link.lable}</Link>
                        )}

                  </ul>
            </nav>
      );
}

export default NavBar;
