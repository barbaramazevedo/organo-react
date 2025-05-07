import './Footer.css';

export const Footer = (props) => {
    return (
        <section className="bottom">
            <section className="icons">
                <ul>
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/images/fb.png" alt="Facebook" className="icon" />
                        </a>
                    </li>    
                    <li>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="/images/tw.png" alt="LinkedIn" className="icon" />
                        </a>
                    </li> 
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
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
        </section>
    )
}

export default Footer;