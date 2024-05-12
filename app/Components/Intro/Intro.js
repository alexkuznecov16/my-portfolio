import React from 'react';
import './Intro.css';
// import {FaInstagram} from 'react-icons/fa';

export default function Intro() {
	return (
		<div className='Intro'>
			<div className='container'>
				<div className='Intro__inner'>
					<h1>
						Hi, I&apos;m
						<br />
						Programmer,
						<br />
						<span>Frontend</span> Developer
					</h1>
					<p>I Am Very Interested In The Development Field, Being A Developer Is One Of My Life Goals, I Want To Always Learn New Things And Be Stronger.</p>
					<div className='Intro--buttons'>
						<button title='Write Me' type='button'>
							Contact Me
						</button>
						<button title='Download Resume' type='button'>
							My Resume
						</button>
					</div>
					{/* <div className='Intro--socials'>
						<div className='Intro--socials__item'>
							<FaInstagram />
						</div>
						<div className='Intro--socials__item'>
							<FaInstagram />
						</div>
						<div className='Intro--socials__item'>
							<FaInstagram />
						</div>
						<div className='Intro--socials__item'>
							<FaInstagram />
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}
