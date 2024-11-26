'use client';

import * as React from 'react';
import {
	Star,
	Clock,
	RocketIcon,
	Paintbrush,
	Laptop2,
	Wrench,
	EyeOff,
	Code,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Link from 'next/link';
import Image from 'next/image';

// Projects data
const projectsData = {
	featured: [
		{
			title: 'Hithere Mail',
			description:
				'Client to read, reply, manage, summarize & send emails with AI features',
			link: 'https://mail.hitheredevs.com',
			tag: 'Consultation',
		},
		{
			title: 'Tweet Bot',
			description:
				'A tool to automate tweets about your progress on github, leetcode & other platforms.',
			link: 'https://tweet-bot.ayanmn18.live',
			tag: 'Design',
		},
	],
	past: [
		{
			title: 'Warmup Tool',
			description:
				' A tool to parse and categorize emails from Gmail and Outlook accounts, and respond to them automatically using AI.',
			link: 'https://github.com/hithere-devs/warmup-tool',
			tag: 'Development',
		},
		{
			title: 'You Reply',
			description:
				'AI-powered YouTube comment assistant. Elevate engagement and effortlessly craft compelling responses with AI technology.',
			link: 'https://github.com/hithere-devs/youreply',
			tag: 'Development',
		},
		{
			title: 'Autoflow',
			description:
				'Create your automated AI workflows with a simple drag and drop interface',
			link: 'https://github.com/hithere-devs/autoflow',
			tag: 'Custom Workspace',
		},
		{
			title: 'Movie App',
			description:
				'A react native app to search for movies and tv shows, and get details using IMDB APIs.',
			link: 'https://github.com/hithere-devs/movieapp',
			tag: 'Development',
		},
	],
};

const skillsData = {
	top: [
		{
			title: 'NodeJS',
			image:
				'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
		},
		{
			title: 'Express.js',
			image:
				'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
		},
		{
			title: 'SpringBoot',
			image:
				'https://img.shields.io/badge/springboot-%236DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white',
		},
		{
			title: 'React',
			image:
				'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
		},
		{
			title: 'Next JS',
			image:
				'https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white',
		},
		{
			title: 'React Native',
			image:
				'https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
		},
		{
			title: 'Docker',
			image:
				'https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white',
		},
		{
			title: 'Kubernetes',
			image:
				'https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white',
		},

		{
			title: 'Redis',
			image:
				'https://img.shields.io/badge/redis-%23DC382D.svg?style=for-the-badge&logo=redis&logoColor=white',
		},
		{
			title: 'AWS',
			image:
				'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white',
		},

		{
			title: 'PostgreSQL',
			image:
				'https://img.shields.io/badge/PostgreSQL-%234F5B93.svg?style=for-the-badge&logo=postgresql&logoColor=white',
		},
		{
			title: 'MongoDB',
			image:
				'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white',
		},
	],
	backend: [
		{
			title: 'NodeJS',
			image:
				'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
		},
		{
			title: 'Express.js',
			image:
				'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
		},
		{
			title: 'SpringBoot',
			image:
				'https://img.shields.io/badge/springboot-%236DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white',
		},
		{
			title: 'Redis',
			image:
				'https://img.shields.io/badge/redis-%23DC382D.svg?style=for-the-badge&logo=redis&logoColor=white',
		},
		{
			title: 'Kafka',
			image:
				'https://img.shields.io/badge/Kafka-000?style=for-the-badge&logo=apache-kafka&logoColor=white',
		},
		{
			title: 'MongoDB',
			image:
				'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white',
		},
		{
			title: 'PostgreSQL',
			image:
				'https://img.shields.io/badge/PostgreSQL-%234F5B93.svg?style=for-the-badge&logo=postgresql&logoColor=white',
		},
		{
			title: 'Oracle',
			image:
				'https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white',
		},
		{
			title: 'MySQL',
			image:
				'https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white',
		},
		{
			title: 'Swagger',
			image:
				'https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white',
		},
		{
			title: 'Postman',
			image:
				'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white',
		},
		{
			title: 'JWT',
			image:
				'https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens',
		},
	],
	frontend: [
		{
			title: 'React',
			image:
				'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
		},
		{
			title: 'Next JS',
			image:
				'https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white',
		},
		{
			title: 'React Native',
			image:
				'https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
		},
		{
			title: 'React Router',
			image:
				'https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white',
		},
		{
			title: 'Redux',
			image:
				'https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white',
		},

		{
			title: 'TailwindCSS',
			image:
				'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
		},
		{
			title: 'MUI',
			image:
				'https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white',
		},
		{
			title: 'Bootstrap',
			image:
				'https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white',
		},
		{
			title: 'Styled Components',
			image:
				'https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white',
		},
		{
			title: 'Semantic UI React',
			image:
				'https://img.shields.io/badge/Semantic%20UI%20React-%2335BDB2.svg?style=for-the-badge&logo=SemanticUIReact&logoColor=white',
		},
		{
			title: 'Chart.js',
			image:
				'https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white',
		},
		{
			title: 'Expo',
			image:
				'https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37',
		},
		{
			title: 'Threejs',
			image:
				'https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white',
		},
		{
			title: 'HTML5',
			image:
				'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
		},
		{
			title: 'CSS3',
			image:
				'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
		},
		{
			title: 'SASS',
			image:
				'https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white',
		},
	],
	devops: [
		{
			title: 'Docker',
			image:
				'https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white',
		},
		{
			title: 'Kubernetes',
			image:
				'https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white',
		},
		{
			title: 'AWS',
			image:
				'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white',
		},
		{
			title: 'Azure',
			image:
				'https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=azure-devops&logoColor=white',
		},
		{
			title: 'Google Cloud',
			image:
				'https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white',
		},
		{
			title: 'Firebase',
			image:
				'https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase',
		},
		{
			title: 'Heroku',
			image:
				'https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white',
		},
		{
			title: 'Netlify',
			image:
				'https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7',
		},
		{
			title: 'Vercel',
			image:
				'https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white',
		},
		{
			title: 'ArgoCD',
			image:
				'https://img.shields.io/badge/ArgoCD-%236D67D3.svg?style=for-the-badge&logo=argocd&logoColor=white',
		},
		{
			title: 'Nginx',
			image:
				'https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white',
		},
		{
			title: 'Apache',
			image:
				'https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white',
		},
		{
			title: 'Prometheus',
			image:
				'https://img.shields.io/badge/prometheus-%23E6522C.svg?style=for-the-badge&logo=prometheus&logoColor=white',
		},
		{
			title: 'Grafana',
			image:
				'https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white',
		},
		{
			title: 'Datadog',
			image:
				'https://img.shields.io/badge/Datadog-%236C4A8E.svg?style=for-the-badge&logo=datadog&logoColor=white',
		},
		{
			title: 'Splunk',
			image:
				'https://img.shields.io/badge/Splunk-%23000000.svg?style=for-the-badge&logo=splunk&logoColor=white',
		},
		{
			title: 'NewRelic',
			image:
				'https://img.shields.io/badge/NewRelic-%2300E5FF.svg?style=for-the-badge&logo=newrelic&logoColor=white',
		},
		{
			title: 'LINUX',
			image:
				'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black',
		},
		{
			title: 'Raspberry Pi',
			image:
				'https://img.shields.io/badge/-RaspberryPi-C51A4A?style=for-the-badge&logo=Raspberry-Pi',
		},
	],
	misc: [
		{
			title: 'Adobe XD',
			image:
				'https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6',
		},
		{
			title: 'Canva',
			image:
				'https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white',
		},
		{
			title: 'Figma',
			image:
				'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white',
		},
		{
			title: 'ESLint',
			image:
				'https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white',
		},
	],
	lang: [
		{
			title: 'TypeScript',
			image:
				'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
		},
		{
			title: 'JavaScript',
			image:
				'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
		},
		{
			title: 'C++',
			image:
				'https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white',
		},
		{
			title: 'Java',
			image:
				'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white',
		},
		{
			title: 'Python',
			image:
				'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54',
		},
	],
};

const skillSections = [
	{ title: 'Top Skills', key: 'top', icon: RocketIcon },
	{ title: 'Backend', key: 'backend', icon: Laptop2 },
	{ title: 'Frontend', key: 'frontend', icon: Paintbrush },
	{ title: 'DevOps', key: 'devops', icon: Wrench },
	{ title: 'Languages', key: 'lang', icon: Code },
	{ title: 'Misc', key: 'misc', icon: EyeOff },
];

interface TabsProps {
	variant: 'skills' | 'projects';
	className?: string;
}

export function CustomTabs({ variant, className }: TabsProps) {
	return (
		<div className={cn('w-full', className)}>
			{variant === 'skills' ? (
				<Tabs defaultValue='top' className='w-full'>
					<TabsList className='w-full justify-start h-auto bg-transparent border-b border-gray-800 rounded-none p-0 mb-2 flex flex-wrap'>
						{skillSections.map((section, index) => (
							<TabsTrigger
								value={section.key}
								key={index}
								className='data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none bg-transparent sm:px-4 sm:py-2 py-2 px-3 flex items-center justify-center'
							>
								{React.createElement(section.icon, {
									className: 'mr-2 h-4 w-4',
								})}
								{section.title}
							</TabsTrigger>
						))}
					</TabsList>
					{Object.entries(skillsData).map(([key, items]) => (
						<TabsContent key={key} value={key}>
							<div className='grid grid-cols-3 sm:grid-cols-6 gap-3 mt-5'>
								{items.map((item, index) => (
									<div
										key={index}
										className='bg-gray-900/50 border-gray-800 flex flex-col items-center'
									>
										<Image
											src={item.image}
											alt={item.title}
											width={120}
											height={28}
											className='w-[120px] h-7 rounded-md filter'
										/>
									</div>
								))}
							</div>
						</TabsContent>
					))}
				</Tabs>
			) : (
				<Tabs defaultValue='featured' className='w-full'>
					<TabsList className='w-full justify-start h-auto bg-transparent border-b border-gray-800 rounded-none p-0 mb-2'>
						<TabsTrigger
							value='featured'
							className='data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none bg-transparent px-4 py-2'
						>
							<Star className='mr-2 h-4 w-4' />
							Featured
						</TabsTrigger>
						<TabsTrigger
							value='past'
							className='data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none bg-transparent px-4 py-2'
						>
							<Clock className='mr-2 h-4 w-4' />
							Past Projects
						</TabsTrigger>
					</TabsList>
					{Object.entries(projectsData).map(([key, items]) => (
						<TabsContent key={key} value={key}>
							<div className='grid md:grid-cols-2 gap-4'>
								{items.map((item, index) => (
									<Link
										href={item.link}
										key={index}
										target='_blank'
										rel='noopener noreferrer'
									>
										<Card className='p-4 bg-gray-900/50 border-gray-800'>
											<h3 className='text-md font-medium mb-2 text-white'>
												{item.title}
											</h3>
											<p className='text-sm text-gray-400'>
												{item.description}
											</p>
										</Card>
									</Link>
								))}
							</div>
						</TabsContent>
					))}
				</Tabs>
			)}
		</div>
	);
}
