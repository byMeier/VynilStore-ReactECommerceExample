import React from 'react'
import CartWidget from './CartWidget'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <>  
            <div className='flex shadow-md h-[65px]'>
                <div className='m-[14px]'>
                    <h1 className='text-3xl font-bold'>Vynil Store</h1>
                </div>
                <Box>
                    <Menu>
                        <MenuButton className='flex mt-[15px] place-self-center inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                            Categorías
                        </MenuButton>
                        <MenuList className='z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            <MenuItem className='text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50'>Categoría 1</MenuItem>
                            <MenuItem className='text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50'>Categoría 2</MenuItem>
                            <MenuItem className='text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50'>Categoría 3</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <div className='flex m-[15px] self-end '>
                    <CartWidget/>
                </div>
            </div>
        </>

    )
}

export default NavBar