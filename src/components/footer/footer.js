import "./footer.css";

export const Footer = () => {
    return (
        <div className="border-top footer-container">
            <div className="container d-flex align-items-center justify-content-between p-3 footer-content">
                <img
                    className="footer-logo"
                    src="https://logos.flamingtext.com/Name-Logos/Movies-design-china-name.png"
                    alt="Logo"
                />
                <ul className="d-flex align-items-center gap-5 p-0 m-0 footer-nav">
                    <li className="nav-item fw-bold bg-white rounded p-2">
                        <a className="nav-link text-black fw-bold" href="#">
                            Reklama
                        </a>
                    </li>
                    <li className="nav-item fw-bold bg-white rounded p-2">DMCA</li>
                    <li className="nav-item fw-bold bg-white rounded p-2">Sayt qoidalari</li>
                    <li className="nav-item fw-bold bg-white rounded p-2">Qayta aloqa</li>
                    <li className="nav-item fw-bold bg-white rounded p-2">Yosh toifasi</li>
                </ul>
                <div className="footer-age">
                    <img
                        className="age-img"
                        src="https://uzmovi.com/images/age/eighteen.png"
                        alt="18+"
                    />
                </div>
            </div>
        </div>
    );
};
