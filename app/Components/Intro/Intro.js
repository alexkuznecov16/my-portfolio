import React from 'react';
import './Intro.css';
import Link from 'next/link';
// import {FaInstagram} from 'react-icons/fa';

export default function Intro() {
	return (
		<div data-aos='fade-up' className='Intro'>
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
						<Link href={'https://t.me/kznws'} className='button' title='Write Me'>
							Contact Me
						</Link>
						<Link href={'/resume_FRONTEND_alexander-kuznecov.pdf'} download={true} className='button' title='Download Resume'>
							My Resume
						</Link>
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
