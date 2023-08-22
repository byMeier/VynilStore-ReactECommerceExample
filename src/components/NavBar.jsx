import React from 'react'
import CartWidget from './CartWidget'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex, 
    Spacer,
    Box,
    } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <>  
        <Flex color='white'>
            <Box>
                <div className='brand'>
                    <h1>Vynil Store</h1>
                </div>
            </Box>
            <Box>
            <Menu>
                <MenuButton>
                    Categories
                </MenuButton>
                <MenuList>
                    <MenuItem>Category A</MenuItem>
                    <MenuItem>Category B</MenuItem>
                    <MenuItem>Category C</MenuItem>

                </MenuList>
            </Menu>
            </Box>
            <Box>
                <CartWidget/>
            </Box>
            </Flex>
        </>

    )
}

export default NavBar