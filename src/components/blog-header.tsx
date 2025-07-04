import { BlogHeaderProps } from "@/types";


const BlogHeader = ({ icon, detailRows, title }: BlogHeaderProps) => {
	return (
		<>
			<div className='relative w-full h-[25vh]'>
				<video
					src='./rib.mp4'
					preload='auto'
					// controls
					autoPlay
					muted
					loop
					className='object-cover w-full h-full'
				/>
				<div className='absolute inset-0 ' />
			</div>
			<div className='flex flex-col items-left w-full max-w-3xl px-7 select-none'>
				<span className='text-[4rem] -mt-14 z-50'>{icon}</span>
			</div>
			<div className='bg-gray-900 text-white flex flex-col items-left justify-center p-8 text-left w-full max-w-3xl'>
				<h1 className='text-4xl font-extrabold mb-14 max-sm:text-xl'>
					{title}
				</h1>

				<div className='flex flex-col gap-3'>
					{detailRows.map(({ label, value, icon }, index) => (
						<p key={index}>
							{icon}{' '}
							<strong className='underline decoration-[0.5px] underline-offset-[3px]'>
								{label}:
							</strong>{' '}
							{value}
						</p>
					))}
				</div>
			</div>
		</>
	);
};

export default BlogHeader;
