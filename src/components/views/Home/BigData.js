import React, { Component } from 'react';

export default class BigData extends Component {
	render() {
		return (
			<section className="section-animate to-front bg-white">
				<div className="section-animate-wrapper section-md-110 section-65 section-md-0">
					<div style={{height: '100%'}} className="shell section-relative reveal-md-flex range-md-middle">
						<div data-items="1" data-stage-padding="0" data-dots="true" data-margin="10" data-dots-each="1" data-loop="false" data-output-counter="#current-counter1" className="owl-carousel owl-carousel-default">
							<div className="item" style={{marginBottom: '2em'}}>
								<div className="range range-xs-center range-xs-middle">
									<div className="cell-sm-6 cell-lg-8 cell-sm-push-2 text-md-right">
										<div className="img-carousel"><img src="/styles/images/tronix-data/big-data-growth.jpg" data-animation="fadeIn" className="img-responsive animateItem max-width-75p" /></div>
									</div>
									<div className="cell-sm-6 cell-lg-4 text-sm-left cell-sm-push-1">
										<h3 data-animation="fadeInUp" className="animateItem">The Answer is in the Data</h3>
										<div className="offset-top-20">
											<p data-animation="fadeInUp" data-delay="0.1" data-duration="1" className="animateItem">With the right approach,  right tools and the right people you can rectify the past, assess the present and not just predict the future, but also posses the ability change it.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="item" style={{marginBottom: '2em'}}>
								<div className="range range-xs-center range-xs-middle">
									<div className="cell-sm-6 cell-lg-8 cell-sm-push-2 text-md-right">
										<div className="img-carousel"><img src="/styles/images/tronix-data/big-data-value.jpg" className="img-responsive max-width-75p" /></div>
									</div>
									<div className="cell-sm-6 cell-lg-4 text-sm-left cell-sm-push-1">
										<h3 className="test">Tried and Tested Expertise</h3>
										<div className="offset-top-20">
											<p>Tailoring - that is one of our bigger advantages. As the adage goes, Tailored beats one-size-fits-all. If you’ve got a data science opportunity for which off-the-shelf solutions probably don’t exist yet, we can tailor an approach to the specific needs, culture, and goals of the problem at hand.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div id="current-counter1" data-animation="fadeIn" className="carousel-counter-container animateItem">
							<div className="current-counter"></div>
							<div className="count"></div>
							<div className="carousel-count"></div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
