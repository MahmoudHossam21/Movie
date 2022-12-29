import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../img/img.jpg";
export default function Items(props) {
  let {
    title,
    poster_path,
    overview,
    vote_average,
    id,
    media_type,
    name,
    profile_path,
  } = props.data;
  return (
    <>
      <div className="col-md-2">
        <div>
          <div className="items">
            {poster_path ? (
              <img
                className="w-100"
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt=""
              />
            ) : profile_path === null ? (
              <img className="w-100" src={img1} alt="" />
            ) : (
              <img
                className="w-100"
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt=""
              />
            )}
            <Link to={`/details/${id}/${media_type}`}>
              <div className="overLay d-flex text-center align-items-center">
                {overview ? (
                  <p className="ph">
                    {overview.split(" ").slice(0, 10).join(" ")}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </Link>
            {vote_average ? (
              <div className="vote p-2">
                {" "}
                <i className="fa-solid fa-star text-yellow mx-1 "></i>
                {vote_average.toFixed(1)}
              </div>
            ) : (
              ""
            )}{" "}
          </div>
          <div>
            <h6 className="my-3">
              {title} {name}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
