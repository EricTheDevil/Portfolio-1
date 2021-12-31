import React, { useState, useEffect } from 'react';

import axios from 'axios';
import http from '../http-common';
import RestaurantDataService from '../Services/restaurants.js';

import { render } from '@testing-library/react';

// Not used
// Prototype for fetching data from back end api.

const Pop = (props) => {
	const [restaurants, setRestaurants] = useState([]);
	let d = new Date();
	useEffect(() => {
		getRestaurant();
	}, []);

	const getRestaurant = () => {
		RestaurantDataService.getAllRestaurants()
			.then((response) => {
				setRestaurants(response.data.restaurants);
				console.log('working');
			})
			.catch(() => {
				console.log('Not working');
				console.log(axios.data);
			});
	};
	/*
	const get = () => {
		RestaurantDataService.getPoop()
			.then((response) => {
				//setRestaurants(response.data.restaurants);
				console.log('working');
				console.log(response);
			})
			.catch(() => {
				console.log('Not working');
				console.log(axios.data);
			});
	};
*/
	return (
		<div className="Title">
			{/*restaurants.map((restaurant, i) => {
				const address = `${restaurant.address.building} ${restaurant.address.street}, ${restaurant.address.zipcode}`;
				return (
					<div className="col-lg-4 pb-1" key={restaurant._id}>
						<p> {restaurant._id}</p>
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{restaurant.name}</h5>
								<p className="card-text">
									<strong>Cuisine: </strong>
									{restaurant.borough}
									<br />
								</p>
							</div>
						</div>
					</div>
				);
			})*/}
		</div>
	);
};

export default Pop;
