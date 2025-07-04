import { PageProps } from '@/types';
import Image from 'next/image';
import React from 'react';


const Caresy = ({ banner, icon }: PageProps) => {
	return (
		<>
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
				<span className='text-[4rem] -mt-14 z-50'>{icon}</span>
			</div>
			<div className='bg-gray-900 text-white flex flex-col items-left justify-center p-8 text-left w-full max-w-3xl'>
				<h1 className='text-4xl font-extrabold mb-8 max-sm:text-xl'>
					Software Developer Intern
				</h1>

				<p>
					<strong className='underline decoration-[0.5px] underline-offset-[3px]'>
						Company:
					</strong>{' '}
					Caresy
				</p>
				<p>
					<strong className='underline decoration-[0.5px] underline-offset-[3px]'>
						Location:
					</strong>{' '}
					Remote IN
				</p>
				<p>
					<strong className='underline decoration-[0.5px] underline-offset-[3px]'>
						Details:
					</strong>{' '}
					Coming Soon...
				</p>
			</div>
		</>
	);
};

export default Caresy;
