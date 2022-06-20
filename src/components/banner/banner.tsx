import LogoBanner from './logo_banner';
import TextBanner from './text_banner';
import { BannerSection } from './Styled/styledBanner';

export default function Banner(){
    return(
        <BannerSection>
            <TextBanner />
            <LogoBanner />
        </BannerSection>
    )
}