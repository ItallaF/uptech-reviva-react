import Contact from '../FooterContact/contact';
import MenuFooter from '../MenuFooter/menu_footer';
import MediaSocial from '../SocialMediaFoter/social_media';
import { Footersection } from './styledContentFooter';
import Subscription from '../SubscritionFooter/subscription';


export default function ContentFooter(){
    return(
        <Footersection>  
        <MenuFooter />
        <MediaSocial />
        <Contact />
        <Subscription />
        </Footersection>
    );
}