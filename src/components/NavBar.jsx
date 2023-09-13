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
            <div className='flex shadow-md h-[65px]'>
            <Link to={"/"}>
                <div className='m-[14px]'>
                    <h1 className='text-3xl font-bold'>Vynil Store</h1>
                </div>
            </Link>
                <Box>
                    <Menu>
                        <MenuButton className='flex mt-[15px] place-self-center inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                            Categorías
                        </MenuButton>
                        <MenuList className='z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            <MenuItem className='text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50'>
                                <Link to={`/category/${"men's clothing"}`}>
                                    Ropa de Hombre
                                </Link>
                                </MenuItem>
                            <MenuItem className='text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50'>
                                <Link to={`/category/${"women's clothing"}`}>
                                    Ropa de Mujer
                                </Link>
                            </MenuItem>
                            <MenuItem className='text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50'>
                                <Link to={`/category/${"electronics"}`}>
                                    Electrónica
                                </Link>    
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <div className='flex m-[15px] self-end '>
                    <Link to={"/cart"}>
                        <CartWidget/>
                    </Link>
                    
                </div>
            </div>
        </>

    )
}

export default NavBar