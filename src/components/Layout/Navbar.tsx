import React from 'react'
import { Link } from 'gatsby';
import logo from '../../images/logo.svg';
import Mail from '../../images/mailicon.svg';
import Button from '../Button';
import { HiMenuAlt3 } from "@react-icons/all-files/hi/HiMenuAlt3";
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown";

const Navbar = () => {
    return (
        <div className='container'>
            <div className='md:flex hidden justify-between items-center py-8'>
                <div className='max-w-[120px] max-h-[102px]'>
                    <Link to={'/'}><img src={logo} alt='logo' /></Link>
                </div>
                <div className='flex gap-10 items-center'>
                    {links.map((item, index) => {
                        return (
                            <div className='rotate flex items-center cursor-pointer' key={index}>
                                <Link to={item.path}><span className='text-base font-bold hover:text-primary transition-all duration-300'>{item.link}</span></Link>
                                {item.link === 'Produits' && <span className='pl-1 pt-1'>{item.icon}</span>}
                            </div>
                        )
                    })}
                </div>
                <div className=''>
                    <Button text='Contactez Bitrustee' img={Mail} onClick={undefined} />
                </div>
            </div>
        </div>
    )
}

export default Navbar

const links = [
    {
        link: 'Services',
        path: '/services',
    },
    {
        link: 'Produits',
        path: '/produits',
        icon: <IoMdArrowDropdown />
    },
    {
        link: 'Blog',
        path: '/blog',
    },
]