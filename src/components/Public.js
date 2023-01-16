import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">R Masters Group Dashboard</span></h1>
            </header>
            <main className="public__main">
                <p> This is the World of Automation and a programming haven for masters.</p>
                <p>Located in Atlanta, GA. We provide training to your programming bo or staff. Get ready to master your programming world.</p>
                <address className="public__addr">
                    RMI/RMG<br />
                    1917 Chase Common Ct.<br />
                    Peachtree City, GA 30071<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: RJ Moore</p>
            </main>
            <footer>
                <Link to="/login">Master Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public