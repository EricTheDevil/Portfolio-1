import express from 'express';
import RestaurantsCtrl from './restaurants.controller.js';

const router = express.Router();

router.route('/e').get(RestaurantsCtrl.apiGetRestaurantCuisines);
router.route('/').get(RestaurantsCtrl.apiGetRestaurants);
router.route('/home').get(RestaurantsCtrl.apiGetProfile);

router.get('/name', (req, res) => {
	const data = {
		username: 'peterson',
		age: 5,
	};
	res.json(data);
});

export default router;
