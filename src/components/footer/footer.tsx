import style from './footer.module.scss';


export default function Footer(){
    return(
        <footer className={style.rodape}>
        <div className={style.rodape__logo}>
            <h1 className={style.logo__titulo}>Reviva Fashion</h1>
            <p className={style.logo__texto}>by RCHLO</p>
        </div>
        <section className={style.conteudo__rodape}>  
        <section className={style.rodape__menu}>
            <h4>Menu</h4>
            <nav>
                <li className={style.rodape__itens__menu}><a href="#">Página Inicial</a></li>
                <li className={style.rodape__itens__menu}><a href="#">Moda Masculina</a></li>
                <li className={style.rodape__itens__menu}><a href="#">Moda Feminina</a></li>
                <li className={style.rodape__itens__menu}><a href="#">Moda Infantil</a></li>
                <li className={style.rodape__itens__menu}><a href="#">Moda Manual da Moda</a></li>
            </nav>     
        </section>
        <section className={style.rodape__Redes}>
            <h4>Siga nas redes Sociais</h4>
            <div className={style.rodape__link__redeSociais}>
                <a href="https://www.facebook.com/Lojas.Riachuelo"><svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.5 16C31.5 7.4375 24.5625 0.5 16 0.5C7.4375 0.5 0.5 7.4375 0.5 16C0.5 23.7362 6.16813 30.1488 13.5781 31.3125V20.4806H9.64062V16H13.5781V12.585C13.5781 8.70062 15.8906 6.555 19.4325 6.555C21.1287 6.555 22.9025 6.8575 22.9025 6.8575V10.67H20.9475C19.0225 10.67 18.4219 11.865 18.4219 13.0906V16H22.7206L22.0331 20.4806H18.4219V31.3125C25.8319 30.1488 31.5 23.7362 31.5 16Z" fill="white"/>
                </svg></a>
                <a href="https://www.instagram.com/riachuelo"><svg width="28" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.7106 6.48225C28.7309 6.7665 28.7309 7.05081 28.7309 7.33506C28.7309 16.0051 22.132 25.9949 10.0711 25.9949C6.35531 25.9949 2.90356 24.9188 0 23.0508C0.527937 23.1117 1.0355 23.132 1.58375 23.132C4.64969 23.132 7.47206 22.0965 9.72587 20.33C6.84262 20.2691 4.42637 18.3808 3.59387 15.7818C4 15.8426 4.40606 15.8833 4.8325 15.8833C5.42131 15.8833 6.01019 15.802 6.55837 15.6599C3.55331 15.0508 1.29944 12.4112 1.29944 9.22338V9.14219C2.1725 9.6295 3.18781 9.93406 4.26388 9.97463C2.49738 8.79694 1.34006 6.78681 1.34006 4.51269C1.34006 3.29444 1.66488 2.17769 2.23344 1.20306C5.46187 5.18275 10.3147 7.78169 15.7563 8.066C15.6548 7.57869 15.5938 7.07113 15.5938 6.5635C15.5938 2.94925 18.5177 0.00512695 22.1522 0.00512695C24.0405 0.00512695 25.7461 0.797002 26.9441 2.07619C28.4263 1.79194 29.8476 1.24369 31.1065 0.49244C30.6191 2.01531 29.5836 3.2945 28.2232 4.10663C29.5431 3.96456 30.8222 3.599 31.9999 3.09144C31.1066 4.39088 29.9898 5.54819 28.7106 6.48225Z" fill="white"/>
                </svg></a>
                <a href="https://twitter.com/riachuelo"><svg width="24" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0062 7.81245C10.0312 7.81245 6.82498 11.0187 6.82498 14.9937C6.82498 18.9687 10.0312 22.1749 14.0062 22.1749C17.9812 22.1749 21.1875 18.9687 21.1875 14.9937C21.1875 11.0187 17.9812 7.81245 14.0062 7.81245ZM14.0062 19.6624C11.4375 19.6624 9.33748 17.5687 9.33748 14.9937C9.33748 12.4187 11.4312 10.3249 14.0062 10.3249C16.5812 10.3249 18.675 12.4187 18.675 14.9937C18.675 17.5687 16.575 19.6624 14.0062 19.6624ZM23.1562 7.5187C23.1562 8.44995 22.4062 9.1937 21.4812 9.1937C20.55 9.1937 19.8062 8.4437 19.8062 7.5187C19.8062 6.5937 20.5562 5.8437 21.4812 5.8437C22.4062 5.8437 23.1562 6.5937 23.1562 7.5187ZM27.9125 9.2187C27.8062 6.97495 27.2937 4.98745 25.65 3.34995C24.0125 1.71245 22.025 1.19995 19.7812 1.08745C17.4687 0.956201 10.5375 0.956201 8.22498 1.08745C5.98748 1.1937 3.99999 1.7062 2.35624 3.3437C0.712488 4.9812 0.206238 6.9687 0.0937377 9.21245C-0.0375122 11.5249 -0.0375122 18.4562 0.0937377 20.7687C0.199988 23.0124 0.712488 24.9999 2.35624 26.6374C3.99999 28.2749 5.98123 28.7874 8.22498 28.8999C10.5375 29.0312 17.4687 29.0312 19.7812 28.8999C22.025 28.7937 24.0125 28.2812 25.65 26.6374C27.2875 24.9999 27.8 23.0124 27.9125 20.7687C28.0437 18.4562 28.0437 11.5312 27.9125 9.2187ZM24.925 23.2499C24.4375 24.4749 23.4937 25.4187 22.2625 25.9124C20.4187 26.6437 16.0437 26.4749 14.0062 26.4749C11.9687 26.4749 7.58748 26.6374 5.74998 25.9124C4.52498 25.4249 3.58124 24.4812 3.08749 23.2499C2.35624 21.4062 2.52499 17.0312 2.52499 14.9937C2.52499 12.9562 2.36249 8.57495 3.08749 6.73745C3.57499 5.51245 4.51873 4.5687 5.74998 4.07495C7.59373 3.3437 11.9687 3.51245 14.0062 3.51245C16.0437 3.51245 20.425 3.34995 22.2625 4.07495C23.4875 4.56245 24.4312 5.5062 24.925 6.73745C25.6562 8.5812 25.4875 12.9562 25.4875 14.9937C25.4875 17.0312 25.6562 21.4124 24.925 23.2499Z" fill="white"/>
                </svg></a>
                <a href="https://www.youtube.com/user/lojasriachuelo"><svg width="32" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.3535 3.75519C33.9609 2.27706 32.8043 1.11294 31.3357 0.717875C28.6738 0 18 0 18 0C18 0 7.32626 0 4.66432 0.717875C3.19576 1.113 2.03913 2.27706 1.64657 3.75519C0.933319 6.43437 0.933319 12.0243 0.933319 12.0243C0.933319 12.0243 0.933319 17.6141 1.64657 20.2933C2.03913 21.7714 3.19576 22.8871 4.66432 23.2821C7.32626 24 18 24 18 24C18 24 28.6738 24 31.3357 23.2821C32.8043 22.8871 33.9609 21.7714 34.3535 20.2933C35.0667 17.6141 35.0667 12.0243 35.0667 12.0243C35.0667 12.0243 35.0667 6.43437 34.3535 3.75519ZM14.5091 17.0994V6.94906L23.4303 12.0244L14.5091 17.0994Z" fill="white"/>
                </svg></a>
            </div>
        </section>
        <section className={style.rodape__contato}>
            <h4>Entre em contato</h4>
            <p className={style.rodape__contato__conteudo}>Contato</p>
            <p className={style.rodape__contato__conteudo}>reviva@riachuelo.com.br</p>
            <p className={style.rodape__contato__conteudo}>WhatsApp<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3668 3.17227C14.5664 1.36758 12.1687 0.375 9.6207 0.375C4.36133 0.375 0.0816406 4.65469 0.0816406 9.91406C0.0816406 11.5941 0.519922 13.2355 1.35352 14.6836L0 19.625L5.05742 18.2973C6.44961 19.0578 8.01797 19.4574 9.61641 19.4574H9.6207C14.8758 19.4574 19.25 15.1777 19.25 9.91836C19.25 7.37031 18.1672 4.97695 16.3668 3.17227ZM9.6207 17.8504C8.19414 17.8504 6.79766 17.468 5.58164 16.7461L5.29375 16.5742L2.29453 17.3605L3.09375 14.4344L2.90469 14.1336C2.10977 12.8703 1.69297 11.4137 1.69297 9.91406C1.69297 5.54414 5.25078 1.98633 9.625 1.98633C11.7434 1.98633 13.7328 2.81133 15.2281 4.31094C16.7234 5.81055 17.643 7.8 17.6387 9.91836C17.6387 14.2926 13.9906 17.8504 9.6207 17.8504ZM13.9691 11.9121C13.7328 11.7918 12.5598 11.216 12.3406 11.1387C12.1215 11.057 11.9625 11.0184 11.8035 11.259C11.6445 11.4996 11.1891 12.0324 11.0473 12.1957C10.9098 12.3547 10.768 12.3762 10.5316 12.2559C9.13086 11.5555 8.21133 11.0055 7.2875 9.41992C7.04258 8.99883 7.53242 9.02891 7.98789 8.11797C8.06523 7.95898 8.02656 7.82148 7.96641 7.70117C7.90625 7.58086 7.4293 6.40781 7.23164 5.93086C7.03828 5.4668 6.84063 5.53125 6.69453 5.52266C6.55703 5.51406 6.39805 5.51406 6.23906 5.51406C6.08008 5.51406 5.82227 5.57422 5.60312 5.81055C5.38398 6.05117 4.76953 6.62695 4.76953 7.8C4.76953 8.97305 5.62461 10.1074 5.74063 10.2664C5.86094 10.4254 7.4207 12.8316 9.81406 13.8672C11.3266 14.5203 11.9195 14.5762 12.6758 14.4645C13.1355 14.3957 14.0852 13.8887 14.2828 13.3301C14.4805 12.7715 14.4805 12.2945 14.4203 12.1957C14.3645 12.0883 14.2055 12.0281 13.9691 11.9121Z" fill="white"/>
                </svg>
            </p>
            <p className={style.rodape__contato__conteudo}>11 2123-3321<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9656 16.6289L20.9666 20.9601C20.8263 21.5724 20.2881 22.0008 19.6578 22.0008C8.81719 22 0 13.1828 0 2.3418C0 1.71188 0.428355 1.17305 1.0407 1.03341L5.37195 0.0343838C6.00273 -0.111796 6.64727 0.215626 6.90938 0.812977L8.90828 5.47508C9.14195 6.02422 8.98434 6.66402 8.52242 7.04129L6.20898 8.89883C7.66906 11.8731 10.0873 14.2914 13.0625 15.7523L14.9566 13.4406C15.3299 12.9774 15.9745 12.8171 16.5236 13.055L21.1857 15.0534C21.7465 15.3484 22.1117 16.0016 21.9656 16.6289Z" fill="white"/>
                </svg>
            </p>
        </section>
        <section className={style.newsletter}>
            <h4>Assine nossa newsletter</h4>
            <input type="text" className={style.rodape__newsletter} placeholder="Assine o newsletter" name="assine" />
            <button className={style.newletter__botao}>Assine Já</button>
        </section>
        </section>
    </footer>
    )
}