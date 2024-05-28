import React, {useState} from 'react'
import Logoimg from '../assets/logo.png'
import { navItems } from '../constants'
import { Menu, X } from 'lucide-react'

function Navbar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src={Logoimg} alt="Logo image" className='h-10 mr-2 w-10' />
                    <span className="text-xl tracking-light">VirtualR</span>
                </div>

                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((items, index) => (
                        <li key={index}>
                            <a href={items.href}>{items.label}</a>
                        </li>
                    ))}                
                </ul>

                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="" className="py-2 px-3 border rounded-md">Sign-in</a>
                    <a href="" className="bg-gradient-to-l from-orange-400 to-orange-900 py-2 px-3 border rounded-md">Create an Account</a>
                </div>

                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {mobileDrawerOpen && (<div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <ul>
                    {navItems.map((items, index) => (
                        <li key={index} className='py-4 text-center'>
                            <a href={items.href}>{items.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex space-y-6 flex-col">
                    <a href="#" className="py-2 px-3 border rounded-md text-center">
                        Sign In
                    </a>
                    <a
                        href="#"
                        className="py-2 px-3 rounded-md bg-gradient-to-l from-orange-400 to-orange-900"
                    >
                        Create an account
                    </a>
                </div>
            </div>
        )
}
        </div>
    </nav>
  )
}

export default Navbar