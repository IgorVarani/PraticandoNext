import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer id={styles.footer_home}>
            <div className={`${styles.container} layout_guide`}>
                <div id={styles.footer_icons}>
                    <img src="../imgs/Logo_footer.svg" alt="Logo do VH Burguer que contém como plano de fundo um hamburguer"
                        className={styles.logo_vhburguer_footer}/>
                    <div id={styles.icons}>
                        <a href=""><img src="../imgs/TikTok.svg" alt="Nosso Tiktok" /></a>
                        <a href=""><img src="../imgs/Facebook.svg" alt="Nosso Facebook" /></a>
                        <a href=""><img src="../imgs/Instagram.svg" alt="Nosso Instagram" /></a>
                        <a href=""><img src="../imgs/YouTube.svg" alt="Nosso YouTube" /></a>
                    </div>
                </div>
                <hr id={styles.linha}></hr>
                <p>Copyright © 2026 VH Burguer | Todos os direitos reservados</p>
            </div>
        </footer>
    )
}

export default Footer;