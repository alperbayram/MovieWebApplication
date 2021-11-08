import Link from "next/link";

function Populer({ data }) {
  return (
    <div className="container">
      <div className="populer-movie">
        {data.results.map((movie) => (
          <Link  href={`/movie/${movie.id}`}>
            <a className="populer-inner">
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                alt="moviename"
              />
              <div className="title-movie">
                <h6>{movie.title}</h6>
                <br />
                <p>{movie.release_date}</p>
              </div>
            </a>
          </Link>
        ))}
        <style jsx>
          {`
            .populer-movie {
              display: flex;
              flex-wrap: nowrap;
              margin: auto 0;
              min-height: 379px;
            }
            .populer-inner {
              position: relative;
              margin: 5px;
              text-decoration:none;
            }
            
            .title-movie {
              width: 100%;
              padding: 26px 10px 12px 10px;
              position: relative;
              white-space: normal;
              display: flex;
              align-content: flex-start;
              flex-wrap: wrap;
            }
            h6 {
              color: black;
              font-size: 16px;
              padding-right: 5px;
            }
            p {
              font-size: 16px;
              color: #00000099;
            }
            img {
              border-radius: 10px;
              height: 225px;
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Populer;

