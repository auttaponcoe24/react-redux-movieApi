import React, { useState, useEffect } from "react";
import "./MovieDetail.scss";
import axios from "../../api/MovieApi";
import { APIKey } from "../../api/MovieApiKey";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
	const { id } = useParams();
	const [movie, setMovie] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchDetail = async () => {
			try {
				const res = await axios.get(
					`?apikey=${APIKey}&i=${id}&plot=full`
				);
				setMovie(res.data);
				setLoading(true);
			} catch (err) {
				console.log(err);
			}
		};
		fetchDetail();
	}, []);
	return (
		<div>
			{loading ? (
				<div className="movie-detail-con">
					<div className="movie-detail-img">
						<img src={movie.Poster} alt={movie.Title} />
					</div>
					<div className="movie-detail-info">
						<h3>{movie.Title}</h3>
						<p style={{ margin: "2rem 0" }}>{movie.Plot}</p>
						<div>
							<strong>Released : {movie.Released}</strong>
						</div>
					</div>
				</div>
			) : (
				<div>
					<h4 style={{ margin: "1rem 0" }}>Loading...</h4>
				</div>
			)}
		</div>
	);
}
