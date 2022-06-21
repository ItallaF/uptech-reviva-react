import { BannerContent, BannerContentText, BannerContentTitle } from './Styled/styledTextBanner';

export default function TextBanner() {
    return (
        <BannerContent>
            <BannerContentText>Fique por dentro de tudo que há de novidade da moda!</BannerContentText>
            <BannerContentTitle>Baixe já nosso manual de moda!</BannerContentTitle>
        </BannerContent>
    );
}