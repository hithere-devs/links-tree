'use client';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import banner from './banner.png';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Reachinbox from './pages/reachinbox';
import Openinapp from './pages/openinapp';
import Jarviot from './pages/jarviot';
import Caresy from './pages/caresy';
import Saddweb from './pages/saddweb';

import oiaBanner from './banners/oia-banner.png';
import Nav from '@/components/nav';

const Page = () => {
	// render based on the slug
	const slug = usePathname().split('/')[1];
	console.log(slug);

	const [curPage, setCurPage] = useState('');

	useEffect(() => {
		switch (slug) {
			case 'associate-backend-developer-reachinbox-ai':
				setCurPage('reachinbox');
				break;
			case 'junior-backend-developer-openinapp':
				setCurPage('openinapp');
				break;
			case 'software-developer-intern-(frontend)-jarviot':
				setCurPage('jarviot');
				break;
			case 'software-developer-intern-(backend)-caresy':
				setCurPage('caresy');
				break;
			case 'freelancing-saddweb':
				setCurPage('saddweb');
				break;
			default:
				// redirect it to the 404 page
				break;
		}
	}, []);

	return (
		<div className='flex flex-col items-center justify-center'>
			<Nav />
			{curPage === 'reachinbox' && <Reachinbox icon='🚀' banner={banner} />}
			{curPage === 'openinapp' && <Openinapp icon='🏋🏻‍♂️' banner={oiaBanner} />}
			{curPage === 'jarviot' && <Jarviot icon='🎨' banner={banner} />}
			{curPage === 'caresy' && <Caresy icon='🧐' banner={banner} />}
			{curPage === 'saddweb' && <Saddweb icon='💰' banner={banner} />}

			<footer className='text-left w-full px-10 text-white py-8 flex items-center justify-evenly select-none mt-16 flex-wrap'>
				<div className='flex gap-4 my-3'>
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
				<p className='italic my-3'>
					&copy; {new Date().getFullYear()} hitheredevs by Azhar
				</p>
			</footer>
		</div>
	);
};

export default Page;
