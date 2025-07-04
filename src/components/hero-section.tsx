import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Calendar, File } from 'lucide-react';
import Link from 'next/link';
import banner from '@/app/banner.png';
import { CONTACT_INFO } from '@/lib/constants';
import { HeroSectionProps } from '@/types';

export default function HeroSection({ className = '' }: HeroSectionProps) {
	return (
		<div className={className}>
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
						href={CONTACT_INFO.calendly}
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
						href={CONTACT_INFO.resume}
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
			</div>
		</div>
	);
}
