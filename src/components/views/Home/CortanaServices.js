import React, { Component } from 'react';

export default class CortanaServices extends Component {
	render() {
		return (
			<section style={{paddingTop: '4em'}}>
				<div className="shell">
					<div className="range range-xs-center offset-top-30">
						<div className="cell-xs-12 cell-md-10">
							<h3>Cortana Analytics</h3>
							<p style={{color: 'black'}}>Microsoft Cortana Intelligence Suite is a fully managed big data and advanced analytics platform. It can transform your data into intelligent action and open up your blind spots to a blur of business potential. We can help you use the Cortana Intelligence Suite for Information management, Big Data stores, Machine Learning, and then present the results using dashboards and visualizations.</p>
						</div>
					</div>
					<div className="range range-xs-center text-left offset-top-60 offset-md-top-90">
						<div className="cell-sm-6 cell-xs-10 cell-md-4">
							<div className="unit unit-horizontal">
								<div className="unit-left"><i className="fa fa-cogs fa-4x"></i></div>
								<div className="unit-body">
									<div>
										<h5>Microsoft Cognitive Services</h5>
									</div>
									<div className="offset-top-10">
										<p className="small">Build apps with powerful algorithms using just a few lines of code. They work across devices and platforms such as iOS, Android, and Windows, keep improving, and are easy to set up.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="cell-sm-6 cell-xs-10 cell-md-4">
							<div className="unit unit-horizontal">
								<div className="unit-left"><i className="fa fa-windows fa-4x"></i></div>
								<div className="unit-body">
									<div>
										<h5>Microsoft Bot Framework</h5>
									</div>
									<div className="offset-top-10">
										<p className="small">Build and connect intelligent bots to interact with your users naturally wherever they are — from your website or app to text/SMS, Skype, Slack, Facebook Messenger, Office 365 mail, Teams and other popular services.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="cell-sm-6 cell-xs-10 cell-md-4">
							<div className="unit unit-horizontal">
								<div className="unit-left"><i className="fa fa-skype fa-4x"></i></div>
								<div className="unit-body">
									<div>
										<h5>Skype Bot Platform</h5>
									</div>
									<div className="offset-top-10">
										<p className="small">Enhance your Skype experience in its own way, bringing a new dimension into your everyday Skype chats by helping turn your ideas and plans into actions.</p>
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
