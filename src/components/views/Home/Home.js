import React, { Component } from 'react';
import { Link } from 'react-router';

import Banner from './Banner';
import BigData from './BigData';
import Clients from './Clients';
import ContactForm from '../../common/ContactForm';
import CortanaServices from './CortanaServices';
import DataCenterModernization from './DataCenterModernization';
import Footer from '../../common/Footer';
import FooterBanner from './FooterBanner';
import Header from '../../common/Header';
import MiscFeatures from './MiscFeatures';
import OperationsManagement from './OperationsManagement';

export default class Home extends Component {
	render() {
		return (
			<div className="page text-center">
				<ContactForm />
				<Header />
				<main data-hijacking="off" data-animation="fixed" className="page-content">
					<Banner />
					<BigData />
					<section className="to-front bg-white">
						<hr className="hr" />
						<CortanaServices />
						<hr className="hr" />
						<DataCenterModernization />
						<hr className="hr" />
						<OperationsManagement />
						<hr className="hr" />
						<MiscFeatures />
						<FooterBanner />
						{/* <Clients /> */}
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}
