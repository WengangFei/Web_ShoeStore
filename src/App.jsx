import { Hero,Product,Quality,Service,SpecialOffers,
    Footer,CustomerReviews,Subscribe } 
from './sections';
import NavBar from './components/NavBar'

export default function App(){
    return (
        <main className="relative p-[80px] ">
                <NavBar />
            <section className="xl:padding-lg wide:padding-r padding-b">
                <Hero />
            </section>
            <section className="padding">
                <Product />
            </section>
            <section className="padding">
                <Quality />
            </section>
            <section className="padding-x py-10">
                <Service />
            </section>
            <section className="padding">
                <SpecialOffers />
            </section>
            <section className="bg-pale-blue padding">
                <CustomerReviews />
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
                <Subscribe />
            </section>
            <section className="bg-black text-white p-8">
                <Footer />
            </section>
        </main>
    )
}