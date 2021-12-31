import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
	return (
		<div className="NavBar">
			<nav className="nav">
				<div className="profile">
					<img
						src={
							'https://cdn.shopify.com/s/files/1/0220/9497/0980/products/Axolotl---Ambystoma-mexicanum_720x.jpg?v=1571152418'
						}></img>
				</div>
				<ul className="nav-items">
					<li className="nav-item">
						<NavLink to="/" exact activeClassName="active">
							Sup
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/about" exact activeClassName="active">
							About
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/portfolio" exact activeClassName="active">
							Portfolio
						</NavLink>
					</li>
				</ul>
				<footer className="footer">
					<p>@Copyright;</p>
				</footer>
			</nav>
		</div>
	);
}
export default NavBar;
