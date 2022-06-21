import Logo from '../HeaderLogo/logo'
import { HeaderSection } from './styledHeaderIndex'
import Vector from '../HeaderVector/vector'

export default function Header() {
    return (
        <HeaderSection>
            <Logo />
            <Vector />
        </HeaderSection>
    );
}