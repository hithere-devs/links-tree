import Link from 'next/link';
import React from 'react';
import { socialLinks } from '@/data/social-links';

const Nav = () => {
	return (
		<div className='text-left w-full px-5 text-white py-2 flex items-center justify-between select-none'>
			<Link href={'/'}>
				<p className='italic'>hit here devs</p>
			</Link>
			<div className='flex gap-4'>
				{socialLinks.map((social) => (
					<Link
						key={social.name}
						href={social.url}
						className='hover:opacity-50'
						target='_blank'
						rel='noopener noreferrer'
					>
						<social.icon size={15} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Nav;
