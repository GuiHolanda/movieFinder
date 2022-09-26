import React from 'react';

export default function Sugested() {
  return (
    <div className="d-flex flex-column m-auto p-3">
      <h2 className="title">Fan's Favorites</h2>
      <div className="row py-3 row-cols-1 justify-content-evenly row-cols-md-3 g-4">
        <div className="col sugestedCard">
          <div className="card h-100">
            <img
              src="https://m.media-amazon.com/images/M/MV5BOWQwOTA1ZDQtNzk3Yi00ZmVmLWFiZGYtNjdjNThiYjJhNzRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
              className="card-img-top "
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title footerFont">Top Gun Maverick</h5>
              <a
                target={'_blank'}
                className="d-flex align-items-center"
                href="https://www.imdb.com/video/vi2578694681/?ref_=hm_fanfav_tr_vp_2_pd_fp1"
              >
                <i className="bi bi-play-fill text-danger"></i>{' '}
                <p className="smallFont">Trailer</p>
              </a>
            </div>
          </div>
        </div>
        <div className="col sugestedCard">
          <div className="card h-100">
            <img
              src="https://m.media-amazon.com/images/M/MV5BZDBkZjRiNGMtZGU2My00ODdkLWI0MGYtNGU4MmJjN2MzOTkxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title footerFont">House of the Dragon</h5>
              <a
                target={'_blank'}
                className="d-flex align-items-center"
                href="https://www.imdb.com/video/vi2604712473/?ref_=hm_fanfav_tr_vp_1_pd_fp1"
              >
                <i className="bi bi-play-fill text-danger"></i>{' '}
                <p className="smallFont">Trailer</p>
              </a>
            </div>
          </div>
        </div>
        <div className=" sugestedCard">
          <div className="card h-100 ">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNDkyZThhNmMtZDBjYS00NDBmLTlkMjgtNWM2ZWYzZDQxZWU1XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title footerFont">Breaking Bad</h5>
              <a
                target={'_blank'}
                className="d-flex align-items-center"
                href="https://www.imdb.com/video/vi564706585/?ref_=hm_fanfav_tr_vp_12_pd_fp1"
              >
                <i className="bi bi-play-fill text-danger"></i>{' '}
                <p className="smallFont">Trailer</p>
              </a>
            </div>
          </div>
        </div>
        <div className="col sugestedCard">
          <div className="card h-100">
            <img
              src="https://m.media-amazon.com/images/M/MV5BYzMzNTJjYmMtZTkxNS00MjI4LWI3YmQtOTQ4MDZjZDJlZjQyXkEyXkFqcGdeQXVyNjc0NzQzNTM@._V1_SX300.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body ">
              <h5 className="card-title footerFont">Elvis</h5>
              <a
                target={'_blank'}
                className="d-flex align-items-center"
                href="https://www.imdb.com/video/vi4207002137/?ref_=hm_fanfav_tr_vp_8_pd_fp1"
              >
                <i className="bi bi-play-fill text-danger"></i>{' '}
                <p className="smallFont">Trailer</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
