import { BlogContent, BlogImageMain, BlogImageMainSize, BlogImageMainText, BlogSection, BlogSide, BlogTertiary, BlogTitle, BologImageSide, BologImageSideSize, BologImageSideText } from './styledBlog';


export default function Blog() {
    return (
        <BlogSection>
            <div>
                <BlogTitle>Na dúvida sobre combinar suas roupas e ficar incrível?
                    Confira nossas dicas em nosso blog.</BlogTitle>
                <BlogImageMain>
                    <BlogImageMainSize src={process.env.PUBLIC_URL + 'images/blog/ImageBlogPrincipal.jpg'} alt="mulher de vestido longo animal print onça" />
                </BlogImageMain>
                <BlogImageMainText>
                    O que fazer com o look que usou no carnaval? Confira
                    já como fazer uso dessas mesmas peças no inverso e
                    continuar na moda!
                </BlogImageMainText>
            </div>
            <BlogContent>
                <BlogSide>
                    <BologImageSide>
                        <BologImageSideSize src={process.env.PUBLIC_URL + 'images/blog/ImagemBlogSecundaria.jpg'} alt="Mãe com macacão curto manga longa e filha vestida com vestido preto estampado estrelas coloridas" />
                    </BologImageSide>
                    <div>
                        <BologImageSideText>
                            O que fazer com o look que usou no carnaval? Confira já
                            como fazer uso dessas mesmas peças no inverso e continuar na moda!
                        </BologImageSideText>
                    </div>
                </BlogSide>
                <BlogTertiary>
                    <BologImageSide>
                        <BologImageSideSize src={process.env.PUBLIC_URL + 'images/blog/ImagemBlogTerciaria.jpg'} alt="mulher vestida blusa branca manga longa cachecol shots jeans e bota couro marrom" />
                    </BologImageSide>
                    <BologImageSideText>
                        O que fazer com o look que usou no carnaval? Confira já
                        como fazer uso dessas mesmas peças no inverso e continuar na moda!
                    </BologImageSideText>
                </BlogTertiary>
            </BlogContent>
        </BlogSection>
    )
}