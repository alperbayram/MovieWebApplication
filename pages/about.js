import Head from "next/head";
import Layout from "../components/layout";

function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Merhaba Next.js!</h1>
      
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
    </Layout>
  );
}

export default About;
