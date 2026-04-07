'use client'



import { Lang, navbarData } from '@/data/data'
import logo from '@/public/logo.png'
import { setLang, setNavbar } from '@/redux/counterSlice'
import { RootState } from '@/redux/store'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { RiMenu3Fill } from "react-icons/ri";
import { IconButton } from '@mui/material'



function Navbar() {

    const dispatch = useDispatch()

    const { lang, isNavbarOpen } = useSelector((state: RootState) => state.counter)

    const endpoints = navbarData[lang as keyof typeof navbarData]

    const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setLang(e.target.value as Lang))
    }

    const pathname = usePathname()






    return (
        <div id="mainNavbar">

            <Link href={'/'} id="logo-wrapper">
                <Image id='logoPic' src={logo} alt='logo' />

            </Link>


            <div id='main-endpoints-navbar-wrapper' className={`center ${isNavbarOpen ? 'opened' : ''}`}>
                {Object.values(endpoints.main).map((item) => (
                    <Link className={`mainEndpoint ${pathname == item.href ? 'active' : ''}`} key={item.href} href={item.href}>
                        {item.label}
                    </Link>
                ))}
                <div id='menu-top-endpoints-navbar-wrapper' className='center'>
                    <select value={lang} onChange={handleLangChange} className="menu-lang-select">
                        <option value="az">AZ</option>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                    </select>
                    {Object.values(endpoints.top).map((item) => (
                        <Link className='menu-topEndpoint' key={item.href} href={item.href}>
                            {item.label}
                        </Link>
                    ))}



                </div>



            </div>

            <div id='top-endpoints-navbar-wrapper' className='center'>
                <select value={lang} onChange={handleLangChange} className="lang-select">
                    <option value="az">AZ</option>
                    <option value="en">EN</option>
                    <option value="ru">RU</option>
                </select>
                {Object.values(endpoints.top).map((item) => (
                    <Link className='topEndpoint' key={item.href} href={item.href}>
                        {item.label}
                    </Link>
                ))}



            </div>

            <IconButton id='menuToggle-wrapper' onClick={() => {
                dispatch(setNavbar())
            }} >
                <RiMenu3Fill id='menu-icon' />
            </IconButton>

        </div>
    )
}

export default Navbar