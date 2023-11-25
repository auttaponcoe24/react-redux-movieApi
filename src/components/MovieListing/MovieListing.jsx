import React from "react";
import "./MovieListing.scss";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";

export default function MovieListing() {
	const { movies } = useSelector((state) => state.movies);

	return (
		<div className="movie-container">
			{movies &&
				movies.map((movie) => (
					<MovieCard key={movie.imdbID} movie={movie} />
				))}
		</div>
	);
}
