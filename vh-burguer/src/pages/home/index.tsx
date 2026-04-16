//? ESTRUTURA PADRÃO

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { Fragment } from "react/jsx-runtime"

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <main>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Home;