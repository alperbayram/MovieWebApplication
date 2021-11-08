import Head from "next/head";
import Layout from "../components/layout";

function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">About Page</h1>
            <p
              className="col-lg-10 fs-4 text-left"
              style={{ textAlign: "justify" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-light">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign up
              </button>
              <hr className="my-4" />
              <small className="text-muted">
                By clicking Sign up, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">Why do we use it?</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              >
                Dark
              </button>
              <button
                type="button"
                className="btn btn-outline-light btn-lg px-4"
              >
                Secondary
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">Pricing</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Free</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $0<small class="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button
                  type="button"
                  class="w-100 btn btn-lg btn-outline-primary"
                >
                  Sign up for free
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $15<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">
                  Get started
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-white bg-primary border-primary">
                <h4 className="my-0 fw-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $29<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;

/** 
 
      <div className="container">
        <div className="horizontal-scroll-wrapper squares">
          <div>item 1</div>
          <div>item 2</div>
          <div>item 3</div>
          <div>item 4</div>
          <div>item 5</div>
          <div>item 6</div>
          <div>item 7</div>
          <div>item 8</div>
          <style jsx>
            {`
              ::-webkit-scrollbar {
                width: 2px;
                height: 2px;
              }
              ::-webkit-scrollbar-button {
                width: 2px;
                height: 2px;
              }

              div {
                box-sizing: border-box;
                border: solid #5b6dcd 5px;
                padding: 5px;
              }

              .horizontal-scroll-wrapper {
                position: static;
                display: block;
                top: 0;
                left: 0;
                width: 100%;
                height: 300px;
                margin: 0;
                background: #abc;
                overflow-y: auto;
                overflow-x: hidden;
                transform-origin: right top;
              }
              .horizontal-scroll-wrapper > div {
                display: block;
                background: #cab;
                padding: 5px;
                transform: rotate(-360deg);
                transform-origin: right top;
              }
              .squares {
                padding: 300px 0 0 0;
              }
              .squares > div {
                width: 250px;
                height: 250px;
                margin: 10px 0;
              }
            `}
          </style>
        </div>
      </div>

      <div className="container pt-5">
        <div className="scrollmenu">
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
          <a>lorem</a>
        </div>
        <style jsx>
          {`
            div.scrollmenu {
              background-color: #333;
              overflow: auto;
              white-space: nowrap;
            }
            div.scrollmenu a {
              display: inline-block;
              color: white;
              text-align: center;
              padding: 14px;
              height:200px;
              width:300px;
              text-decoration: none;
            }
            div.scrollmenu a:hover {
              background-color: #777;
            }
          `}
        </style>
      </div>
 
*/
