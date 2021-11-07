import Nav from "./Nav";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Moviewebapp</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Nav />
      <main>{children}</main>
      <div id="footer">
        <div className="container ">
          <footer className="row row-cols-5 py-5 ">
            <div className="col justify-content-end">
              <a className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                <img
              src={'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'}
              alt="Picture"
                width={130} 
                height={94} 
            />
              </a>
              <p className="text-muted"> alper bayram © 2021</p>
            </div>



            <div className="col">
              <h5>TEMEL</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 ">TMDB Hakkında</a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 ">Bize Ulaşın</a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 ">Destek Forumları</a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 ">API</a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 ">Sistem Durumu</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h5 >KATKIDA BULUNUN</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 ">Katılım Başvuru Kitabı</a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 ">3'üncü Parti Uygulamalar</a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 ">Yeni Film Ekle</a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 ">Yeni Dizi Ekle</a>
                </li>
                
              </ul>
            </div>

            <div className="col">
              <h5>TOPLULUK</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 ">Rehberler</a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 ">Tartışmalar</a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 ">Öne Çıkanlar</a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 ">Twitter</a>
                </li>
                
              </ul>
            </div>
            <div className="col">
            <h5>YASAL</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 ">Kullanım Koşulları</a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 ">API Kullanım Şartları</a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 ">Gizlilik Politikası</a>
                </li>
                
              </ul>
              </div>
          </footer>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default Layout;
