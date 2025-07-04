import Link from 'next/link';
import { socialLinks } from '@/data/social-links';
import { FooterProps } from '@/types';

export default function Footer({ className = '' }: FooterProps) {
	return (
		<footer className={`text-left w-full px-10 text-white py-8 flex items-center justify-evenly select-none mt-16 flex-wrap ${className}`}>
			<div className='flex gap-4 my-3'>
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
			<p className='italic my-3'>
				&copy; {new Date().getFullYear()} hitheredevs by Azhar
			</p>
		</footer>
	);
}
