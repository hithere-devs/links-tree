import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CompanyCardProps } from '@/types';

export default function CompanyCard({ company }: CompanyCardProps) {
	return (
		<Link href={`/${company.slug}`}>
			<div className='flex hover:opacity-80 group cursor-pointer text-gray-400 items-center'>
				<Image
					src={company.logo}
					alt={`${company.name} Logo`}
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
	);
}
