import React, { Component } from 'react';

export default class MiscFeatures extends Component {
	render() {
		return (
			<section className="section-90 section-md-110 section-md-bottom-170 inset-left-15 inset-right-15">
				<div className="range range-xs-center range-lg-left">
					<div className="cell-xs-12 cell-lg-6" style={{marginTop: '6em', marginLeft: '5em'}}>
						<div className="range">
							<div className="cell-xs-3">
								<div className="preview"><img src="/styles/images/tronix-data/data-management-1.jpg" width="370" height="240" className="img-responsive" />
									<p className="preview-title">Data Management</p>
								</div>
							</div>
							<div className="cell-xs-3 offset-top-40 offset-xs-top-0">
								<div className="preview"><img src="/styles/images/tronix-data/iot-1.jpg" width="370" height="240" className="img-responsive" />
									<p className="preview-title">Internet of Things</p>
								</div>
							</div>
							<div className="cell-xs-3 offset-top-40 offset-xs-top-0">
								<div className="preview"><img src="/styles/images/tronix-data/ai-1.jpg" width="370" height="240" className="img-responsive" />
									<p className="preview-title">Machine Learning</p>
								</div>
							</div>
							<div className="cell-xs-3 offset-top-40 offset-xs-top-0">
								<div className="preview"><img src="/styles/images/tronix-data/data-vis-1.jpg" width="370" height="240" className="img-responsive" />
									<p className="preview-title">Data Visualization</p>
								</div>
							</div>
						</div>
					</div>
					<div className="cell-xs-10 cell-sm-8 cell-lg-4 text-lg-left">
						<div className="inset-lg-left-100">
							<h3>How We Add Value</h3>
							<div className="offset-top-20">
								<p>
									By leveraging our knowledge of Data Warehousing and Business Intelligence and by drawing standard reports, we help businesses view their existing data in a more efficient way.<br /><br />Our data mining capabilities have helped businesses unearth a plethora of previously unseen information. Our expertise in Big Data have enabled our clients efficiently handle unstructured and semi structured data efficiently, thereby lowering their operational costs. Finally, our proficiency in Predictive Analytics and Machine Learning have helped companies forecast their foreseeable future and modify their business decisions.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
