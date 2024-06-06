import Footer from './Footer'
import Nav from './Nav'


export default function App({ children }) {
    return (
        <div>
            <Nav />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
