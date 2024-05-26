import React from 'react';
import './Services.css';
import Link from 'next/link';

export default function Services() {
	const services = [
		{title: 'Full-stack Web Development', description: 'Creating robust web applications from frontend to backend using Next.js/React.js and Node.js/Express.js.'},
		{title: 'Database Management', description: 'Designing, optimizing, and managing databases with MySQL.'},
		{title: 'Type-Safe Programming', description: 'Developing reliable and maintainable code with TypeScript.'},
		{title: 'API Development', description: 'Designing and integrating scalable APIs with RESTful architecture.'},
		{title: 'Version Control & Collaboration', description: 'Managing code versions and collaborating with Git.'},
		{title: 'Scripting & Automation', description: 'Automating tasks and developing scripts with Python.'},
		{title: 'State Management', description: 'Efficiently managing application state with MobX and Redux.'},
		{title: 'Dev Tools & Workflow Optimization', description: 'Streamlining development processes with tools like Nodemon and Webpack.'},
		{title: 'Testing & Debugging', description: 'Ensuring code quality and reliability with Jest and Postman.'},
		{title: 'UI/UX Design & Prototyping', description: 'Designing user interfaces and creating prototypes with Photoshop and Figma.'},
		{title: 'Development Environment Setup', description: 'Configuring and optimizing the Visual Studio Code editor for development.'},
		{title: 'Training & Consultation', description: 'Providing personalized training sessions and consultations on web development technologies and best practices.'},
	];
	return (
		<div data-aos='fade-up' id='services' className='Services'>
			<h2 className='section--title'>Services</h2>
			<div className='container'>
				<div className='Services__inner'>
					{services.map(service => (
						<Link title='Click for feedback' href={'mailto:alexander.kuznecov16@gmail.com'} className='Services--item' key={service.title}>
							<h3>{service.title}</h3>
							<p>{service.description}</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
