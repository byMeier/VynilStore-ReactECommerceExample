import React from 'react'
import CartWidget from './CartWidget'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <>  
            <div className="bg-creamy flex w-full shadow-md">
                <Link to={"/"}>
                    <div className='m-[14px]'>
                        <img className="delay-300 hover:drop-shadow-lg" src="../img/logo.png" alt="Logo" width="150px"/>
                    </div>
                </Link>
                <div className='flex justify-between w-full'>
                    <Box className='self-start self-center'>
                        <Menu>
                            <MenuButton className='flex inline-flex w-full gap-x-1.5 rounded-md ring-transparent bg-bluely px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-sbluely'>
                                Music & Appareal
                            </MenuButton>
                            <MenuList className='z-10 mt-2 w-56 origin-top-right rounded-md bg-bluely shadow-lg  ring-transparent  focus:outline-none'>
                                <Link to={`/category/${"vynil"}`}>
                                    <MenuItem className='text-gray-700 block px-4 py-2 text-sm rounded-md hover:bg-sbluely'>
                                        Vinyl
                                    </MenuItem>
                                </Link>
                                <Link to={`/category/${"cd"}`}>
                                    <MenuItem className='text-gray-700 block px-4 py-2 text-sm rounded-md hover:bg-sbluely'>
                                            CD
                                    </MenuItem>
                                </Link>
                                <Link to={`/category/${"merch"}`}>
                                    <MenuItem className='text-gray-700 block px-4 py-2 text-sm rounded-md hover:bg-sbluely'>
                                            Merch
                                    </MenuItem>
                                </Link>   
                            </MenuList>
                        </Menu>
                    </Box>
                    <div className='flex justify-end '>
                            <CartWidget/>
                    </div>
                </div>
            </div>
        </>

    )
}

export default NavBar