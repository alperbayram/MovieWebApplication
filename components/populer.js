function Populer({ data }) {
  return (
    <div className="container">
    <div className="populer-movie">
      {data.results.map((movie) => (
        <div className="populer-inner">
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
              alt="moviename"
            />
            <h6>{movie.title}</h6>
          </div>
      ))}
      <style jsx>
        {`
          .populer-movie {
            display: flex;
            flex-wrap: wrap;
            margin: auto 0;
        }
        .populer-inner{
           
            width:25%;
            position:relative;
            
        }
        h6{
            color:#000;
            font-size:16px;
            bottom:0;
            left:0;
            padding-left:5px;
            padding-right:5px;

        }
        img{
            width:100%;
        }
          

        `}
      </style>
      </div>

    </div>
  );
}

export default Populer;
