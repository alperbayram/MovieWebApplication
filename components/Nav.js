import Link from "next/link";
function Nav() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <style global jsx>{`
          nav {
            background-color: #032541;
          }
        `}</style>
        <div className="container-fluid">
          <div className="col-12 d-flex justify-content-around">
            <div className="d-flex align-self-center fw-bold">
              <Link href="/">
                <a className="d-flex align-items-center navbar-brand">
                  <img
                    src={
                      "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                    }
                    alt="Picture"
                    width={154}
                    height={20}
                  />
                </a>
              </Link>
              <div className="d-flex align-self-center fw-bold d-none d-sm-block">
                <Link href="/">
                  <a className="navbar-brand text-white fs-6">Filmler</a>
                </Link>
                <Link href="/about">
                  <a className="navbar-brand text-white fs-6">Diziler</a>
                </Link>
                <Link href="/">
                  <a className="navbar-brand text-white fs-6">Kişiler</a>
                </Link>
                <Link href="/about">
                  <a className="navbar-brand text-white fs-6">About</a>
                </Link>
              </div>
            </div>
            <div className="d-flex d-none d-lg-block">
              <Link href="/">
                <span className="navbar-brand align-self-center ">
                  <svg
                    height="27"
                    viewBox="0 0 27 27"
                    width="27"
                    className="p-1"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#ffffff"
                      id="plus"
                      d="M27,14v4a1,1,0,0,1-1,1H19v7a1,1,0,0,1-1,1H14a1,1,0,0,1-1-1V19H6a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1h7V6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v7h7A1,1,0,0,1,27,14Z"
                      fill="#fff"
                    />
                  </svg>
                </span>
              </Link>
              <Link href="/about">
                <a className="navbar-brand text-white border border-1 p-2 fs-6 fw-bold">
                  TR
                </a>
              </Link>
              <Link href="/">
                <span className="navbar-brand align-self-center">
                  <svg
                    height="27"
                    viewBox="0 0 27 27"
                    width="27"
                    className="p-1"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      id="bell"
                      d="M26,22.07037V23a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1v-.92963a2.00005,2.00005,0,0,1,.89062-1.66412l.32819-.21881A3.99993,3.99993,0,0,0,9,16.85925V13a7.00018,7.00018,0,0,1,5-6.70636V5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6.31073a7.31386,7.31386,0,0,1,5,6.98273v3.56579a3.99993,3.99993,0,0,0,1.78119,3.32819l.32819.21881A2.00005,2.00005,0,0,1,26,22.07037ZM14,27a2,2,0,0,0,4,0V26H14Z"
                      fill="#fff"
                    />
                  </svg>
                </span>
              </Link>
              <Link href="/">
                <a className="navbar-brand align-self-center rounded-circle border bg-primary p-1 ">
                  <span className="text-white p-2">A</span>
                </a>
              </Link>
              <Link href="/">
                <span className="navbar-brand align-self-center ">
                  <svg
                    height="27"
                    viewBox="0 0 27 27"
                    width="27"
                    className="p-1"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      id="search"
                      d="M27.207,24.37866,20.6106,17.78235a9.03069,9.03069,0,1,0-2.82825,2.82825L24.37878,27.207a1,1,0,0,0,1.41425,0l1.414-1.41418A1,1,0,0,0,27.207,24.37866ZM13,19a6,6,0,1,1,6-6A6.00657,6.00657,0,0,1,13,19Z"
                      fill="#fff"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
