import { Button } from '@/components/ui/button';

import {
	ArrowRight,
	Calendar,
	File,
	Github,
	Instagram,
	Linkedin,
	Twitter,
} from 'lucide-react';
import banner from './banner.png';
import riLogo from './ri.png';
import oia from './oia.png';
import jv from './jv.png';
import caresy from './caresy.png';
import sad from './sad.png';

import { CustomTabs } from '@/components/custom-tabs';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav';

export default function Home() {
	const companies = [
		{
			name: 'Reachinbox.ai',
			role: 'Associate Backend Developer',
			logo: riLogo,
		},
		{
			name: 'Openinapp',
			role: 'Junior Backend Developer',
			logo: oia,
		},
		{
			name: 'JarvIoT',
			role: 'Software Developer Intern (Frontend)',
			logo: jv,
		},
		{
			name: 'Caresy',
			role: 'Software Developer Intern (Backend)',
			logo: caresy,
		},
		{
			name: 'Saddweb',
			role: 'Freelancing',
			logo: sad,
		},
	];

	return (
		<div className='flex flex-col items-center justify-center'>
			{/* Nav */}
			<Nav />

			<div className='relative w-full h-[25vh]'>
				<Image
					src={banner}
					alt='Banner'
					fill
					className='object-cover'
					priority
				/>
				<div className='absolute inset-0 bg-black bg-opacity-50' />
			</div>
			<div className='flex flex-col items-left w-full max-w-3xl px-7 select-none'>
				<span className='text-[4rem] -mt-14 z-50'>👨🏻‍💻</span>
			</div>
			<div className='bg-gray-900 text-white flex flex-col items-left justify-center p-8 text-left w-full max-w-3xl'>
				<h1 className='text-4xl font-bold mb-14'>hi there devs! 👋👨🏻‍💻</h1>
				<p>
					I&apos;m{' '}
					<strong className='font-medium underline decoration-[0.5px] underline-offset-[3px]'>
						Azhar
					</strong>{' '}
					<strong className='font-medium'>Mahmood</strong>, a{' '}
					<strong className='font-medium underline decoration-[0.5px] underline-offset-[3px]'>
						Full Stack Developer
					</strong>{' '}
					and <strong className='font-medium'>DevOps Engineer</strong> with
					expertise in building scalable applications. I specialize in{' '}
					<strong className='font-medium underline decoration-[0.5px] underline-offset-[3px]'>
						React, Node.js
					</strong>
					, Spring Boot, and cloud technologies.
				</p>
				<div className='flex items-center gap-4'>
					<Link
						href={'https://calendly.com/mywritingfrenzy/30min'}
						target='_blank'
						rel='noopener noreferrer'
					>
						<Button
							variant='outline'
							className='aspect-square max-sm:p-0 bg-gray-900 w-36 mt-10 border-[0.2px] border-gray-700 hover:bg-gray-800 hover:text-white select-none'
						>
							<Calendar
								className='opacity-60 sm:-ms-1 sm:me-2 mb-[1px]'
								size={16}
								strokeWidth={2}
								aria-hidden='true'
							/>
							<span className=''>Book a call</span>
						</Button>
					</Link>
					<Link
						href={
							'https://drive.google.com/file/d/1TiXyjE4jeqJ-um9DsWftEZEW-tYYBZyi/view'
						}
						target='_blank'
						rel='noopener noreferrer'
					>
						<Button
							variant='outline'
							className='aspect-square max-sm:p-0 bg-gray-900 w-32 mt-10 border-[0.2px] border-gray-700 hover:bg-gray-800 hover:text-white select-none'
						>
							<File
								className='opacity-60 sm:-ms-1 sm:me-2 mb-[1px]'
								size={16}
								strokeWidth={2}
								aria-hidden='true'
							/>
							<span className=''>Resume</span>
						</Button>
					</Link>
				</div>
				<div className='h-10' />
				<CustomTabs variant='projects' />
				<div className='h-14' />
				<div>
					<h1 className='font-medium sm:text-xl text-lg mb-8'>
						What it&apos;s like for me, working at a company! 🏢
					</h1>
					<div className='flex flex-col gap-4'>
						{' '}
						{companies.map((company, index) => (
							<Link
								key={index}
								href={`/${company.role
									.split(' ')
									.join('-')
									.toLowerCase()}-${company.name
									.split(' ')
									.join('-')
									.toLowerCase()
									.split('.')
									.join('-')}`}
							>
								<div className='flex hover:opacity-80 group cursor-pointer text-gray-400 items-center'>
									<Image
										src={company.logo}
										alt='Reachinbox Logo'
										className='w-5 h-5 mr-3 mt-[2px]'
									/>
									<p className='underline decoration-[0.5px] underline-offset-[3px] max-sm:w-[30rem]'>
										{company.role} at {company.name}
									</p>
									<ArrowRight
										size={20}
										strokeWidth={2}
										className='ml-1 mt-[2px] -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-in-out max-sm:ml-2 max-sm:mb-0'
									/>
								</div>
							</Link>
						))}
					</div>
				</div>
				<div className='h-14' />
				<CustomTabs variant='skills' />
			</div>
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
}
