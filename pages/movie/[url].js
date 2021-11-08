import Layout from "../../components/layout";
import Link from "next/link";
import ReactPlayer from "react-player";

export default function FilmDetay({ data, video }) {
  //console.log(data);
  console.log(video);
  console.log(data);
  return (
    <Layout>
      <div
        className="detail-background"
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/original${data.backdrop_path})`,
        }}
      ></div>
      <div className="container" id="container-detail">
        <div className="d-flex">
          <div className="p-5">
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data.poster_path}`}
            />
          </div>
          <div className="pt-5 ">
            <h3 className="">
              {data.title}({data.release_date.slice(0, 4)})
            </h3>
            <p className="">Film Tür : {data.genres[0].name}</p>
            <p className="">Film Tarih : {data.release_date}</p>
            <p className="">Üye Puanları : {data.vote_average}</p>
            <p className="tagline">{data.tagline}...</p>
            <p className="">
              Film özet :<br /> {data.overview}
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <Link href={`https://www.youtube.com/watch?v=${video.results[0].key}`}>
          <a className="text-decoration-none">
            <h1 className="text-black m-2 ">Fragman</h1>
            <h3>{video.results[0].name}</h3>
          </a>
        </Link>

        <div className="d-flex justify-content-center m-3">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${video.results[0].key}`}
            playing={"playing"}
            controls={"controls"}
          />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.url}?api_key=477fc8a92de235c971a39fa80fe88c92&language=tr-TR`
  );
  const resp = await fetch(
    `https://api.themoviedb.org/3/movie/${params.url}/videos?api_key=477fc8a92de235c971a39fa80fe88c92&language=tr-TR`
  );
  const video = await resp.json();
  const data = await res.json();
  if (!video) {
    return {
      notFound: true,
    };
  }

  return {
    props: { video, data },
  };
}
