import React, { useState, useEffect } from "react";
import axios from "../../api/MovieApi";
import { useDispatch } from "react-redux";
import { APIKey } from "../../api/MovieApiKey";
import { addMovie } from "../../store/Reducer";
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss";

export default function Home() {
	const dispatch = useDispatch();

	const [search, setSearch] = useState("");

	useEffect(() => {
		const fetchMovies = async () => {
			const searchKey = search ? search : "Thor";
			const res = await axios.get(`?apikey=${APIKey}&s=Thor&type=movie`);

			setTimeout(() => {
				dispatch(addMovie(res.data.Search));
			}, 500);
		};
		fetchMovies();
	}, [search]);
	return (
		<div>
			<h3 style={{ margin: "1rem 0" }}>Movies</h3>
			<input
				type="text"
				placeholder="Search..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<MovieListing />
		</div>
	);
}
