import "../../../styles/Tailwind.css"

import NavbarTemplate from "@/componentes-views/layout/NavBarTemplate"
import HeroSection from "@/componentes-views/layout/HeroSection"
import ServicesSection from "@/componentes-views/sections/ServicesSection"
import Footer from "@/componentes-views/layout/Footer"
import Dragon from "@/componentes-views/Effect/EffectDragon"

export default function PaginaPrincipal (){
    return(
        <div className="bg-black text-blac">
            <NavbarTemplate/>
            <main className="pt-20">
                <HeroSection
                titulo="Bienvenido"
                subtitulo="¿Listo para el Party?"
                textoBoton="Reserva"
                linkBoton="/#"/>
                <ServicesSection/>
            </main>
            <Footer/>
        </div>
    )
}