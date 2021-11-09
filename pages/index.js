import Head from "next/head";
import Layout from "../components/layout";
import Populer from "../components/populer";
import Link from "next/link";

function HomePage({ data, top }) {
  // console.log(data.results[0].title)
  console.log(top.id);
  return (
    <Layout>
      <Head>
        <title>Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        ></link>
      </Head>
      <div className="container p-5" id="homepage-background">
        <div className=" mb-4 rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Hoş Geldiniz.</h1>
            <p className="col-md-8 fs-4 fw-bold pb-4">
              Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
            </p>
            <label class="input-group ">
              <input
                className="form-control rounded-pill"
                id="homepage-input"
                name="name"
                type="text"
                placeholder="Film, Dizi, Kişi Ara..."
                autoComplete="name"
                aria-describedby="button-addon2"
                required
              />
              <button
                class="btn btn-outline-white ms-auto "
                type="submit"
                id="button-addon2"
              >
                Search
              </button>
            </label>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="d-flex">
          <h2 className="p-3 fs-3">Populer Filmler</h2>
          <div id="populer-film" className="d-none d-lg-block">
            <Link href="/" >
              <a>Yayın Akışı</a>
            </Link>
            <Link href="/">
              <a>Televizyonda</a>
            </Link>
            <Link href="/">
              <a>Kiralık</a>
            </Link>
            <Link href="/">
              <a>Sinemalarda</a>
            </Link>
          </div>
        </div>
        <div className="scrollmenu">
          <Populer data={data}></Populer>
        </div>
      </div>
      <div className="container pt-3 pb-3">
        <div className="d-flex">
          <h2 className="fs-3 p-3">Gösterimdeki Filmler</h2>
          <div id="populer-film" className="d-none d-lg-block">
            <Link href="/">
              <a>Filmler</a>
            </Link>
            <Link href="/">
              <a>TV</a>
            </Link>
          </div>
        </div>
        <div className="scrollmenu">
          <Populer data={top}></Populer>
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
    </Layout>
  );
}

export default HomePage;

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=477fc8a92de235c971a39fa80fe88c92&language=en-US&page=1`
  );
  const data = await res.json();

  const respons = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=477fc8a92de235c971a39fa80fe88c92&language=en-US&page=1
    `
  );
  const top = await respons.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data, top },
  };
}
