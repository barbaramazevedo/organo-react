import './Footer.css';

export const Footer = (props) => {
    return (
        <footer className="footer">
            <section className="icons">
                <ul>
                    <li>
                        <a href="https://facebook.com" target="_blank">
                            <img src="/images/fb.png" alt="Facebook" className="icon" />
                        </a>
                    </li>    
                    <li>
                        <a href="https://linkedin.com" target="_blank">
                            <img src="/images/tw.png" alt="LinkedIn" className="icon" />
                        </a>
                    </li> 
                    <li>
                        <a href="https://instagram.com" target="_blank">
                            <img src="/images/ig.png" alt="Instagram" className="icon" />
                        </a>
                    </li> 
                </ul>    
            </section>
            <section>
                <img src="/images/logo.png" alt="Footer banner of organo page"></img>
            </section>
            <section>
                <p>Developed by Bárbara Azevedo.</p>
            </section>
        </footer>
    )
}

export default Footer;