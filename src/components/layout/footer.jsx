import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-section">
					<h3>About Us</h3>
					<p>
						We are dedicated to providing the best service and
						experience for our customers. Our mission is to make
						your journey with us memorable and enjoyable.
					</p>
				</div>

				<div className="footer-section">
					<h3>Quick Links</h3>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/news">News</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="footer-section">
					<h3>Contact Info</h3>
					<ul>
						<li>Email: info@example.com</li>
						<li>Phone: +1 234 567 890</li>
						<li>Address: 123 Street, City, Country</li>
					</ul>
				</div>

				<div className="footer-section">
					<h3>Follow Us</h3>
					<div className="social-links">
						<a href="#" className="social-link">
							<i className="fab fa-facebook"></i>
						</a>
						<a href="#" className="social-link">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="#" className="social-link">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="#" className="social-link">
							<i className="fab fa-linkedin"></i>
						</a>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<p>
					&copy; {new Date().getFullYear()} Your Company Name. All
					rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
