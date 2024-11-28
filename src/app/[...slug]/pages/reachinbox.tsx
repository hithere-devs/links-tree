import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { PageProps } from './types';
import BlogHeader from '@/components/blog-header';

const Reachinbox = ({ banner, icon }: PageProps) => {
	const detailRows = [
		{
			label: 'Company',
			value: 'Reachinbox',
			icon: '📧',
		},
		{
			label: 'Location',
			value: 'Bangalore, India',
			icon: '📍',
		},
		{
			label: 'Duration',
			value: '4 months, May - Sept 2024',
			icon: '⏳',
		},
	];

	return (
		<>
			<BlogHeader
				banner={banner}
				icon={icon}
				detailRows={detailRows}
				title='Associate Backend Developer'
			/>
			{/*  Summary of the Intern */}
			<div className='bg-gray-900  flex flex-col items-left justify-center px-8 text-left w-full max-w-3xl text-sm text-gray-300'>
				<h2 className='text-2xl font-bold mb-4 text-white'>Summary</h2>
				<p className='mb-4 text-justify'>
					During my internship at Reachinbox, I had the opportunity to work on
					several exciting projects that significantly enhanced my backend
					development skills. I was responsible for developing and maintaining
					APIs, optimizing database queries, and ensuring the overall
					performance and scalability of the backend systems. This experience
					allowed me to gain hands-on experience with Node.js, Express.js, and
					MongoDB, and I was able to contribute to the successful deployment of
					several key features.
				</p>
				<p className='mb-4 text-justify'>
					One of the highlights of my internship was collaborating with a
					talented team of developers and learning from their expertise. I
					participated in code reviews, sprint planning, and daily stand-ups,
					which helped me understand the importance of effective communication
					and teamwork in a professional setting. Overall, my internship at
					Reachinbox was an invaluable experience that provided me with the
					skills and knowledge needed to excel in my future career as a backend
					developer.
				</p>
			</div>
			<div className='bg-gray-900  flex flex-col items-left justify-center px-8 text-left w-full max-w-3xl text-sm text-gray-300'>
				<h2 className='text-2xl font-bold mb-4 text-white'>
					How did I get the Job?
				</h2>
				<p className='mb-4 text-justify'>
					During my internship at Reachinbox, I had the opportunity to work on
					several exciting projects that significantly enhanced my backend
					development skills. I was responsible for developing and maintaining
					APIs, optimizing database queries, and ensuring the overall
					performance and scalability of the backend systems. This experience
					allowed me to gain hands-on experience with Node.js, Express.js, and
					MongoDB, and I was able to contribute to the successful deployment of
					several key features.
				</p>
				<p className='mb-4 text-justify'>
					One of the highlights of my internship was collaborating with a
					talented team of developers and learning from their expertise. I
					participated in code reviews, sprint planning, and daily stand-ups,
					which helped me understand the importance of effective communication
					and teamwork in a professional setting. Overall, my internship at
					Reachinbox was an invaluable experience that provided me with the
					skills and knowledge needed to excel in my future career as a backend
					developer.
				</p>
			</div>
			<div className='bg-gray-900  flex flex-col items-left justify-center px-8 text-left w-full max-w-3xl text-sm text-gray-300'>
				<h2 className='text-2xl font-bold mb-4 text-white'>
					Techstack I worked on!
				</h2>
				<p className='mb-4 text-justify'>
					During my internship at Reachinbox, I had the opportunity to work on
					several exciting projects that significantly enhanced my backend
					development skills. I was responsible for developing and maintaining
					APIs, optimizing database queries, and ensuring the overall
					performance and scalability of the backend systems. This experience
					allowed me to gain hands-on experience with Node.js, Express.js, and
					MongoDB, and I was able to contribute to the successful deployment of
					several key features.
				</p>
				<p className='mb-4 text-justify'>
					One of the highlights of my internship was collaborating with a
					talented team of developers and learning from their expertise. I
					participated in code reviews, sprint planning, and daily stand-ups,
					which helped me understand the importance of effective communication
					and teamwork in a professional setting. Overall, my internship at
					Reachinbox was an invaluable experience that provided me with the
					skills and knowledge needed to excel in my future career as a backend
					developer.
				</p>
			</div>
			<div className='bg-gray-900  flex flex-col items-left justify-center px-8 text-left w-full max-w-3xl text-sm text-gray-300'>
				<h2 className='text-2xl font-bold mb-4 text-white'>
					Challenges faced during work!
				</h2>
				<p className='mb-4 text-justify'>
					During my internship at Reachinbox, I had the opportunity to work on
					several exciting projects that significantly enhanced my backend
					development skills. I was responsible for developing and maintaining
					APIs, optimizing database queries, and ensuring the overall
					performance and scalability of the backend systems. This experience
					allowed me to gain hands-on experience with Node.js, Express.js, and
					MongoDB, and I was able to contribute to the successful deployment of
					several key features.
				</p>
				<p className='mb-4 text-justify'>
					One of the highlights of my internship was collaborating with a
					talented team of developers and learning from their expertise. I
					participated in code reviews, sprint planning, and daily stand-ups,
					which helped me understand the importance of effective communication
					and teamwork in a professional setting. Overall, my internship at
					Reachinbox was an invaluable experience that provided me with the
					skills and knowledge needed to excel in my future career as a backend
					developer.
				</p>
			</div>
			<div className='bg-gray-900  flex flex-col items-left justify-center px-8 text-left w-full max-w-3xl text-sm text-gray-300'>
				<h2 className='text-2xl font-bold mb-4 text-white'>
					What did I learn overall!
				</h2>
				<p className='mb-4 text-justify'>
					During my internship at Reachinbox, I had the opportunity to work on
					several exciting projects that significantly enhanced my backend
					development skills. I was responsible for developing and maintaining
					APIs, optimizing database queries, and ensuring the overall
					performance and scalability of the backend systems. This experience
					allowed me to gain hands-on experience with Node.js, Express.js, and
					MongoDB, and I was able to contribute to the successful deployment of
					several key features.
				</p>
				<p className='mb-4 text-justify'>
					One of the highlights of my internship was collaborating with a
					talented team of developers and learning from their expertise. I
					participated in code reviews, sprint planning, and daily stand-ups,
					which helped me understand the importance of effective communication
					and teamwork in a professional setting. Overall, my internship at
					Reachinbox was an invaluable experience that provided me with the
					skills and knowledge needed to excel in my future career as a backend
					developer.
				</p>
			</div>
		</>
	);
};

export default Reachinbox;
