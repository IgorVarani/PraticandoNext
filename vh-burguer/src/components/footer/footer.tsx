import styles from "./footer.module.css"

const Footer = () =>{
    return(
        <footer id={styles.footer}>
            <div className={`${styles.container} layout_guide`}>
                <img id={styles.logo_footer} src="/imgs/Logo_Footer.svg" alt="Logo do VH Burguer" />
                <nav id={styles.nav_footer}>
                    <a href=""><img src="/imgs/TikTok.svg" alt="Nosso TikTok" /></a>
                    <a href=""><img src="/imgs/Facebook.svg" alt="Nosso Facebook" /></a>
                    <a href=""><img src="/imgs/Instagram.svg" alt="Nosso Instagram" /></a>
                    <a href=""><img src="/imgs/YouTube.svg" alt="Nosso YouTube" /></a>
                </nav>
                <hr id={styles.linha_direitos} />
                <p>Copyright © 2026 VH Burguer | Todos os direitos reservados</p>
            </div>
        </footer>
    )
}

export default Footer;