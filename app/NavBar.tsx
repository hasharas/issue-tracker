'use client';
import classNames from 'classnames';
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
                                    className={classNames({
                                          'text-blue-500': link.href === currentPath,
                                          'text-zinc-600': link.href !== currentPath
                                    })}
                              >{link.lable}</Link>
                        )}

                  </ul>
            </nav>
      );
}

export default NavBar;
