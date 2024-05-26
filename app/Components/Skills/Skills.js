import React from 'react';
import './Skills.css';
import Image from 'next/image';
import {SiTypescript, SiJavascript, SiMysql, SiMobx, SiRedux, SiPython, SiSass, SiTailwindcss} from 'react-icons/si';
import {RiNextjsFill, RiReactjsFill, RiNodejsLine} from 'react-icons/ri';

export default function Skills() {
	const skillsData = [
		{
			name: 'Next.js / React.js',
			level: '70%',
			color: '#00f1ff',
			images: [<RiNextjsFill id='next' key='nextjs' />, <RiReactjsFill id='react' key='reactjs' />],
		},
		{
			name: 'MySQL',
			level: '60%',
			color: 'green',
			images: [<SiMysql id='mysql' key='mysql' />],
		},
		{
			name: 'TypeScript / JavaScript',
			level: '80%',
			color: 'red',
			images: [<SiTypescript id='typescript' key='typescript' />, <SiJavascript id='javascript' key='javascript' />],
		},
		{
			name: 'MobX / Redux',
			level: '60%',
			color: 'orange',
			images: [<SiMobx id='mobx' key='mobx' />, <SiRedux id='redux' key='redux' />],
		},
		{
			name: 'Node.js',
			level: '70%',
			color: '#0ec50e',
			images: [<RiNodejsLine id='node' key='nodejs' />],
		},
		{
			name: 'Python',
			level: '30%',
			color: 'deepskyblue',
			images: [<SiPython id='python' key='python' />],
		},
		{
			name: 'Sass / Tailwind',
			level: '80%',
			color: 'yellow',
			images: [<SiSass id='sass' key='sass' />, <SiTailwindcss id='tailwind' key='tailwind' />],
		},
	];
	return (
		<div data-aos='fade-up' id='skills' className='Skills'>
			<h2 className='section--title'>Skills</h2>
			<div className='container'>
				<div className='Skills__inner'>
					<div className='Skills__block'>
						{skillsData.map((item, index) => (
							<div className='Skill--item' style={{color: item.color}} key={index}>
								<span className='Skill--item--title'>
									{item.name}{' '}
									<div className='Skill--item--title__images'>
										{item.images.map((icon, index) => (
											<div key={index} className='icon'>
												{icon}
											</div>
										))}
									</div>
								</span>
								<div title={item.name} className='bar__block'>
									<div style={{width: item.level}} className='bar--item'></div>
								</div>
							</div>
						))}
					</div>
					<Image alt='laptop' className='Skills__image' width={300} height={400} src='/laptop.jpg'></Image>
				</div>
			</div>
		</div>
	);
}
