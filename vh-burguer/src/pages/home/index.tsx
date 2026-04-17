//? ESTRUTURA PADRÃO

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "./home.module.css"
import { Fragment } from "react/jsx-runtime"

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <main id={styles.main}>
                <section id={styles.banner}>
                    <h1>BEM-VINDO(A) AO VH BURGUER</h1>
                    <img src="../imgs/Foto_de_Hamburgueres.svg" alt="Um grupo com três hambúrgueres abaixo do título" />
                    <div id={styles.botoes}>
                        <button id={styles.btn_chamar}>Chamar Atendente</button>
                        <button id={styles.btn_ver}>Ver Cardápio</button>
                    </div>
                </section>

                <section id={styles.destaques}>
                    <div id={styles.container_esquerda}>
                        <article id={styles.mais_pedidos}>
                            <p className={styles.texto_article}>Os queridinhos da galera</p>
                            <h2 className={styles.h2_article}>MAIS PEDIDOS</h2>
                        </article>
                    </div>
                    <div id={styles.container_direita}>
                        <article id={styles.muito_bacon}>
                            <p className={styles.texto_article}>Lanches com</p>
                            <h2 className={styles.h2_article}>MUITO BACON</h2>
                        </article>
                        <article id={styles.super_combos}>
                            <p className={styles.texto_article}>Se tiver com muita fome</p>
                            <h2 className={styles.h2_article}>SUPER COMBOS</h2>
                        </article>
                    </div>
                </section>

                <section id={styles.cardapio}>
                    <h3>Cardápio</h3>
                </section>

                <section id={styles.unidades}>
                    <div id={styles.container_unidades}>
                        <img src="../imgs/Unidade.jpeg" alt="Uma foto retratando uma de nossas unidades" />
                        <h4>NOSSAS UNIDADES</h4>
                        <ul id={styles.lista_unidades}>
                            <li>Centro - Av. Aurora, 742</li>
                            <li>Jardim - Av. das Palmeiras, 1280</li>
                            <li>Norte - Av. Horizonte, 305</li>
                            <li>Sul - Av. Nova Esperança, 910</li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Home;