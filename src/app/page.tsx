import { CustomTabs } from '@/components/custom-tabs';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import CompanyCard from '@/components/company-card';
import { companies } from '@/data/companies';

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center'>
			<Nav />
			<HeroSection />
			<div className='bg-gray-900 text-white flex flex-col items-left justify-center p-8 text-left w-full max-w-3xl'>
				<div className='h-10' />
				<CustomTabs variant='projects' />
				<div className='h-14' />
				<div>
					<h1 className='font-medium sm:text-xl text-lg mb-8'>
						What it&apos;s like for me, working at a company! 🏢
					</h1>
					<div className='flex flex-col gap-4'>
						{companies.map((company, index) => (
							<CompanyCard key={index} company={company} />
						))}
					</div>
				</div>
				<div className='h-14' />
				<CustomTabs variant='skills' />
			</div>
			<Footer />
		</div>
	);
}
