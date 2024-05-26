'use client';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {MdMenu} from 'react-icons/md';
import {IoMdCloseCircleOutline} from 'react-icons/io';

import './Header.css';

export default function Header() {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.classList.add('menu-open');
		} else {
			document.body.classList.remove('menu-open');
		}
	}, [isMobileMenuOpen]);

	return (
		<header className='header'>
			<div className='container'>
				<div className='header__inner'>
					<div className='header--logo'>
						<h3>Alexander Kuznecov</h3>
					</div>
					<nav className='header--nav'>
						<div className='nav__item'>
							<Link href={'#'}>Home</Link>
						</div>
						<div className='nav__item'>
							<Link href={'#about'}>About Me</Link>
						</div>
						<div className='nav__item'>
							<Link href={'#services'}>Services</Link>
						</div>
						<div className='nav__item'>
							<Link href={'#skills'}>Skills</Link>
						</div>
						<div className='nav__item'>
							<Link href={'#works'}>Works</Link>
						</div>
						<div className='nav__item'>
							<Link href={'#contact'}>Contact</Link>
						</div>
					</nav>
					<MdMenu onClick={() => setMobileMenuOpen(true)} className='header--open' />
					<div className={`header__mobile ${isMobileMenuOpen ? 'open' : ''}`}>
						<div className='container'>
							<div className='header__mobile__inner'>
								<h3>Alexander Kuznecov</h3>
								<nav className='header__mobile--nav'>
									<div className='mobile--nav__item'>
										<Link href={'#'} onClick={() => setMobileMenuOpen(false)}>
											Home
										</Link>
									</div>
									<div className='mobile--nav__item'>
										<Link href={'#about'} onClick={() => setMobileMenuOpen(false)}>
											About Me
										</Link>
									</div>
									<div className='mobile--nav__item'>
										<Link href={'#services'} onClick={() => setMobileMenuOpen(false)}>
											Services
										</Link>
									</div>
									<div className='mobile--nav__item'>
										<Link href={'#skills'} onClick={() => setMobileMenuOpen(false)}>
											Skills
										</Link>
									</div>
									<div className='mobile--nav__item'>
										<Link href={'#works'} onClick={() => setMobileMenuOpen(false)}>
											Works
										</Link>
									</div>
									<div className='mobile--nav__item'>
										<Link href={'#contact'} onClick={() => setMobileMenuOpen(false)}>
											Contact
										</Link>
									</div>
								</nav>
							</div>
						</div>
						<IoMdCloseCircleOutline onClick={() => setMobileMenuOpen(false)} className='header--close' />
					</div>
				</div>
			</div>
		</header>
	);
}
