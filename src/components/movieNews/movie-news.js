import { useNavigate } from "react-router-dom"
import "./movie-news.css"
import { Footer } from "../footer/footer";
export const News = () => {
    const navigate = useNavigate();
    return <div className="container h-100">
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img 
            style={{ width: "100px", height: "100px" }}
            className="navbar-brand object-cover rounded-5"
            src="https://logos.flamingtext.com/Name-Logos/Movies-design-china-name.png"
            alt="Logo"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto gap-3 mb-2 mb-lg-0">
            
              <li onClick={() => {navigate("/all")}} className="nav-item fw-bold bg-white rounded">
                <a className="nav-link text-black fw-bold" href="#">
                  Kinolar
                </a>
              </li>
              <li onClick={() => {navigate("/multfilms")}} className="nav-item bg-white rounded">
                <a className="nav-link text-black fw-bold" href="#">
                  Multfilm
                </a>
              </li>
              <li onClick={() => {navigate("/serials")}} className="nav-item fw-bold bg-white rounded">
                <a className="nav-link text-black fw-bold" href="#">
                  Seriallar
                </a>
              </li>
              <li onClick={() => {navigate("/news")}} className="nav-item fw-bold bg-white rounded">
                <a className="nav-link text-black fw-bold" href="#">
                  Kino yangiliklari
                </a>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                onChange={(e) => {searchFunc(e.target.value)}}
                className="form-control me-2 rounded"
                placeholder="Search..."
              />
            </form> */}
          </div>
        </div>
      </nav>
      <div className="d-flex align-items-center justify-content-center">
        <h1>Movie News</h1>
      </div>
        
       <div className="row bg-body-secondary py-2 mt-3">
     
        <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center">
        <img className="w-70" style={{height:"200px", objectFit:"cover"}} src="https://upload.wikimedia.org/wikipedia/ru/9/94/Воздух_2023.jpg" />
        </div>
        <div className="col-12 col-lg-9 d-fle align-items-center justify-content-center">
            <h1>Shamol</h1>
         <p className="fs-5">Film Ulug 'Vatan urushi yillarida sodir bo'ladi. 
            Og'ir janglar ketmoqda, nemis armiyasi oldinga 
            siljimoqda. Aralash aviatsiya polkiga ayol uchuvchilar 
            bo'linmasi keladi - juda yosh, otishmagan va urush nima 
            ekanligini yaxshi tushunmaydi. Qizlar erkaklar dunyosida qiynaladi, 
            lekin asta-sekin ular erkaklardan yomonroq kurasha olmasligini isbotlaydilar.
         </p>
        </div>
       </div>
       <div className="row bg-body-secondary py-2 mt-3">
        <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center">
        <img className="w-70" style={{height:"200px", objectFit:"cover"}} src="https://upload.wikimedia.org/wikipedia/ru/9/94/Воздух_2023.jpg" />
        </div>
        <div className="col-12 col-lg-9 d-fle align-items-center justify-content-center">
            <h1>Shamol</h1>
         <p className="fs-5">Film Ulug 'Vatan urushi yillarida sodir bo'ladi. 
            Og'ir janglar ketmoqda, nemis armiyasi oldinga 
            siljimoqda. Aralash aviatsiya polkiga ayol uchuvchilar 
            bo'linmasi keladi - juda yosh, otishmagan va urush nima 
            ekanligini yaxshi tushunmaydi. Qizlar erkaklar dunyosida qiynaladi, 
            lekin asta-sekin ular erkaklardan yomonroq kurasha olmasligini isbotlaydilar.
         </p>
        </div>
       </div>
       <div className="row bg-body-secondary py-2 mt-3">
        <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center">
        <img className="w-70" style={{height:"200px", objectFit:"cover"}} src="https://upload.wikimedia.org/wikipedia/ru/9/94/Воздух_2023.jpg" />
        </div>
        <div className="col-12 col-lg-9 d-fle align-items-center justify-content-center">
            <h1>Shamol</h1>
         <p className="fs-5">Film Ulug 'Vatan urushi yillarida sodir bo'ladi. 
            Og'ir janglar ketmoqda, nemis armiyasi oldinga 
            siljimoqda. Aralash aviatsiya polkiga ayol uchuvchilar 
            bo'linmasi keladi - juda yosh, otishmagan va urush nima 
            ekanligini yaxshi tushunmaydi. Qizlar erkaklar dunyosida qiynaladi, 
            lekin asta-sekin ular erkaklardan yomonroq kurasha olmasligini isbotlaydilar.
         </p>
        </div>
       </div>
       <div className="row bg-body-secondary py-2 mt-3">
        <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center">
        <img className="w-70" style={{height:"200px", objectFit:"cover"}} src="https://upload.wikimedia.org/wikipedia/ru/9/94/Воздух_2023.jpg" />
        </div>
        <div className="col-12 col-lg-9 d-fle align-items-center justify-content-center">
            <h1>Shamol</h1>
         <p className="fs-5">Film Ulug 'Vatan urushi yillarida sodir bo'ladi. 
            Og'ir janglar ketmoqda, nemis armiyasi oldinga 
            siljimoqda. Aralash aviatsiya polkiga ayol uchuvchilar 
            bo'linmasi keladi - juda yosh, otishmagan va urush nima 
            ekanligini yaxshi tushunmaydi. Qizlar erkaklar dunyosida qiynaladi, 
            lekin asta-sekin ular erkaklardan yomonroq kurasha olmasligini isbotlaydilar.
         </p>
        </div>
       </div>
       <div className="row bg-body-secondary py-2 mt-3">
        <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center">
        <img className="w-70" style={{height:"200px", objectFit:"cover"}} src="https://upload.wikimedia.org/wikipedia/ru/9/94/Воздух_2023.jpg" />
        </div>
        <div className="col-12 col-lg-9 d-fle align-items-center justify-content-center">
            <h1>Shamol</h1>
         <p className="fs-5">Film Ulug 'Vatan urushi yillarida sodir bo'ladi. 
            Og'ir janglar ketmoqda, nemis armiyasi oldinga 
            siljimoqda. Aralash aviatsiya polkiga ayol uchuvchilar 
            bo'linmasi keladi - juda yosh, otishmagan va urush nima 
            ekanligini yaxshi tushunmaydi. Qizlar erkaklar dunyosida qiynaladi, 
            lekin asta-sekin ular erkaklardan yomonroq kurasha olmasligini isbotlaydilar.
         </p>
        </div>
       </div>
       <Footer/>
    </div>
}