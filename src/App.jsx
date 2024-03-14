import { Hero,Product,Quality,Service,SpecialOffers,
    Footer,CustomerReviews,Subscribe } 
from './sections';
import NavBar from './components/NavBar'

export default function App(){
    return (
        <main className="relative">
                <NavBar />
            <section className="xl:padding-1 wide:padding-r padding-b">
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
            <section className="bg-black padding-x padding-t pb-8">
                <Footer />
            </section>
        </main>
    )
}