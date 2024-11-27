import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Nav = () => {
	return (
		<div className='text-left w-full px-5 text-white py-2 flex items-center justify-between select-none'>
			<Link href={'/'}>
				<p className='italic'>hit here devs</p>
			</Link>
			<div className='flex gap-4'>
				<Link
					href={'https://x.com/hithere_devs'}
					className='hover:opacity-50'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Twitter size={15} />
				</Link>
				<Link
					href={'https://github.com/hithere-devs'}
					className='hover:opacity-50'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Github size={15} />
				</Link>
				<Link
					href={'https://linkedin.com/in/hithere-devs'}
					target='_blank'
					rel='noopener noreferrer'
					className='hover:opacity-50'
				>
					<Linkedin size={15} />
				</Link>
				<Link
					href={'https://instagram.com/malik_258'}
					className='hover:opacity-50'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Instagram size={15} />
				</Link>
			</div>
		</div>
	);
};

export default Nav;
