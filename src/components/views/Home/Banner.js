import React, { Component } from 'react';

export default class Banner extends Component {
	render() {
		return (
			<section className="context-dark">
				<div data-on="false" data-md-on="true" className="rd-parallax">
					<div data-speed="0.35" data-type="media" data-url="/styles/images/tronix-data/banner-4.jpg" className="rd-parallax-layer"></div>
					<div data-speed="0" data-type="html" className="rd-parallax-layer">
						<div className="shell">
							<div className="range">
								<div className="range range-xs-center range-md-left range-xs-middle section-cover section-90 text-md-left">
									<div className="cell-xs-10 cell-md-8">
										<h1 data-animation="fadeInUp" className="animateItem" style={{pointerEvents: 'none'}}>We Help You Make Better Decisions</h1>
										<p data-animation="fadeInUp" data-delay="0.1" data-duration="1" className="animateItem" style={{pointerEvents: 'none'}}>We leverage your data to unlock the true potential of your business.</p>
										<div className="offset-top-30 offset-md-top-60"><a href="javascript:;" data-animation="fadeInUp" data-delay="0.2" data-duration="1" className="btn btn-primary btn-sm animateItem" data-toggle="modal" data-target="#contactModal">GET STARTED</a></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
