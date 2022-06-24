import { Menu, MenuButton, MenuLink, MenuList } from './styledNavbar';

export default function Navbar(){
    return (
        <Menu>
            <MenuList>
                <MenuButton >&#9776;</MenuButton>
                <MenuLink href="/">Página Inicial</MenuLink>
                <MenuLink href="#">Moda Masculina</MenuLink>
                <MenuLink href="#">Moda Feminina</MenuLink>
                <MenuLink href="#">Moda Infantil</MenuLink>
                <MenuLink href="#">Moda Manual da Moda</MenuLink>
            </MenuList>
    </Menu>
    )     
}
