import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../../Api";
import Spineer from "../Spineer/Spineer";

export default function ItemDetiles() {
  let x = useParams();
  console.log();
  const [Details, setDetails] = useState("");
  async function getDate() {
    let details = await getDetails(x.id, x.media);
    setDetails(details);
  }
  console.log(Details);

  useEffect(() => {
    getDate();
  }, []);
  return (
    <>
      {Details ? (
        <div className="container">
          <div className="row">
            <div className="col-md-4 py-3">
              <img
                className="w-100"
                src={`https://image.tmdb.org/t/p/w500${Details.poster_path}`}
                alt=""
              />
            </div>
            <div className="col-md-8 py-2">
              <h2>
                {Details.title}
                {Details.name}
              </h2>
              <h3 className="ph py-3">{Details.tagline}</h3>
              {Details.genres.map((value, index) => (
                <span key={index} className="badge bg-info p-2 mx-2">
                  {value.name}
                </span>
              ))}
              <ul className="py-3">
                <li className="py-2">Vote : {Details.vote_average}</li>
                <li className="py-2">Vote Count : {Details.vote_count}</li>
                <li className="py-2">Popularity : {Details.popularity}</li>
                <li className="py-2">
                  {Details.release_date > 0 ? Details.release_date : ""}
                </li>
              </ul>
              <h5 className="ph">{Details.overview}</h5>
            </div>
          </div>
        </div>
      ) : (
        <Spineer />
      )}
    </>
  );
}
