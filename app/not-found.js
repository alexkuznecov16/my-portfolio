import Link from 'next/link';

const NotFound = () => {
	return (
		<body>
			<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '130px'}}>
				<h2>Page not be found</h2>
				<p>Could not find requested resource</p>
				<Link href={'/'}>Back</Link>
			</div>
		</body>
	);
};

export default NotFound;
