import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<footer className="section-50 page-footer bg-gray-darkest context-dark to-front">
				<div className="shell text-sm-left">
					<div className="range range-xs-center">
						<div className="cell-md-4 cell-sm-push-1 text-center text-md-left">
							<div className="footer-brand reveal-inline-block"><a href="#"><img src="/styles/images/tronix-data/logo-1.png" width="197" height="32" alt="" style={{marginTop: '-7px'}} className="img-responsive reveal-inline-block" /></a></div>
						</div>
						<div className="cell-sm-5 cell-md-2 cell-sm-push-2 offset-sm-top-30 offset-md-top-0">
							<div>
								<h5>Follow Us</h5>
							</div>
							<div className="offset-top-7">
								<hr className="hr" />
							</div>
							<ul className="list list-unstyled">
								<li><a href="https://twitter.com/TronixData" target="_blank">Twitter</a></li>
								<li><a href="https://www.linkedin.com/company/tronix-data" target="_blank">LinkedIn</a></li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
