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
import { projectsData } from '@/data/projects';
import { skillsData } from '@/data/skills';
import { TabsProps, Skill, Project } from '@/types';

const skillSections = [
	{ title: 'Top Skills', key: 'top', icon: RocketIcon },
	{ title: 'Backend', key: 'backend', icon: Laptop2 },
	{ title: 'Frontend', key: 'frontend', icon: Paintbrush },
	{ title: 'DevOps', key: 'devops', icon: Wrench },
	{ title: 'Languages', key: 'lang', icon: Code },
	{ title: 'Misc', key: 'misc', icon: EyeOff },
];



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
								{items.map((item: Skill, index: number) => (
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
								{items.map((item: Project, index: number) => (
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
