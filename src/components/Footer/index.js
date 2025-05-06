import './Footer.css';

export const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="icons">
                <a href="https://facebook.com" target="_blank">
                    <img src="/images/fb.png" alt="Facebook" className="icon" />
                </a>
                <a href="https://linkedin.com" target="_blank">
                    <img src="/images/tw.png" alt="LinkedIn" className="icon" />
                </a>
                <a href="https://instagram.com" target="_blank">
                    <img src="/images/ig.png" alt="Instagram" className="icon" />
                </a>
            </div>
            <div className="logo">
                <img src="/images/logo.png" alt="Footer banner of organo page"></img>
                
            </div>
            <div className='developer'>
                <p>Developed by Bárbara Azevedo.</p>
            </div>
        </footer>
    )
}

export default Footer;