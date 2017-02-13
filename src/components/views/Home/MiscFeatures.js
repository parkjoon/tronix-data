import React, { Component } from 'react';

export default class MiscFeatures extends Component {
	render() {
		return (
			<section className="section-90 section-md-110 inset-left-15 inset-right-15" style={{paddingBottom: '3em', paddingTop: '3em'}}>
				<div className="row">
					<div className="range range-xs-center offset-top-30">
						<div className="cell-xs-11 cell-md-9">
							<h3>What We Do</h3>
							<p style={{color: 'black'}}>
								By leveraging our knowledge of Data Warehousing and Business Intelligence and by drawing standard reports, we help businesses view their existing data in a more efficient way.
							</p>
							<p style={{color: 'black'}}>
								Our data mining capabilities have helped businesses unearth a plethora of previously unseen information. Our expertise in Big Data have enabled our clients efficiently handle unstructured and semi structured data efficiently, thereby lowering their operational costs. Finally, our proficiency in Predictive Analytics and Machine Learning have helped companies forecast their foreseeable future and modify their business decisions.
							</p>
						</div>
					</div>
				</div>
				<div className="row" style={{marginTop: '5em'}}>
					<div className="col-md-12">
						<div className="col-xs-3">
							<div className="preview"><img src="/styles/images/tronix-data/data-management-1.png" width="370" height="240" className="img-responsive" />
								<p className="preview-title">Data Management</p>
							</div>
						</div>
						<div className="col-xs-3">
							<div className="preview"><img src="/styles/images/tronix-data/iot-1.jpg" width="370" height="240" className="img-responsive" />
								<p className="preview-title">Internet of Things</p>
							</div>
						</div>
						<div className="col-xs-3">
							<div className="preview"><img src="/styles/images/tronix-data/ai-1.jpg" width="370" height="240" className="img-responsive" />
								<p className="preview-title">Machine Learning</p>
							</div>
						</div>
						<div className="col-xs-3">
							<div className="preview"><img src="/styles/images/tronix-data/data-vis-1.jpg" width="370" height="240" className="img-responsive" />
								<p className="preview-title">Data Visualization</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
