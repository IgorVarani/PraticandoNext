import styles from "./header.module.css";

const Header = () =>{
    return(
        <header id={styles.header}>
            <div className={`${styles.container} layout_guide`}>
                <img id={styles.logo} src="/imgs/Logo_VH_Burguer.svg" alt="Logo do VH Burguer" />
                <nav id={styles.nav_menu}>
                    <a href="">Destaques</a>
                    <a href="">Cardápio</a>
                    <a href="">Unidades</a>
                    <a href="">Login</a>
                </nav>
                <button id={styles.btn_icon}>
                <img src="/imgs/Icon_Hamburguer.svg" alt="Ícone que representa um hambúrguer clicável" />
                </button>
            </div>
        </header>
    )
}

export default Header;