import axios from 'axios';

export function sendMail(data) {
	$.ajax({ // eslint-disable-line
		url: 'http://tronixdata.com/api/sendmail',
		type: 'POST',
		dataType: 'json',
		data: {
			to: 'joonmopark94@gmail.com',
			from: `${data.name} ${data.email}`,
			subject: `${data.name} - Message from TronixData.com Contact Form`,
			text: `${data.message} \n\n Phone number: ${data.number}`
		}
	});
}
