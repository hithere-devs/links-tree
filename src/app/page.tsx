import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { File, Github, Linkedin, Twitter } from 'lucide-react';
import banner from './banner.jpeg';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4'>
			<div className='w-full max-w-2xl bg-white shadow-lg overflow-hidden'>
				<Image src={banner} alt='Banner' className='w-full h-48 object-cover' />
				<div className='p-6'>
					<CardContent className='flex flex-col items-center'>
						<div className='flex gap-4 items-center justify-center mb-5'>
							<Avatar className='mb-2'>
								<AvatarImage src='/path/to/your/avatar.jpg' alt='Your Name' />
								<AvatarFallback>AM</AvatarFallback>
							</Avatar>
							<h1 className='text-3xl font-serif text-center mb-2'>
								hi there devs!
							</h1>
						</div>
						<p className='text-center mb-6'>
							I am a fullstack developer, majorly focusing on backend
							development.
						</p>
						<Separator className='mb-6' />
						<div className='w-full flex flex-col gap-4'>
							<div className='grid md:grid-cols-4 grid-cols-2 gap-4 w-full'>
								<Link href='https://github.com/yourusername' passHref>
									<Button className='w-full h-[100px]'>
										<Github />
									</Button>
								</Link>
								<Link href='https://linkedin.com/in/yourusername' passHref>
									<Button className='w-full h-[100px]'>
										<Linkedin />
									</Button>
								</Link>
								<Link href='https://x.com/yourusername' passHref>
									<Button className='w-full h-[100px]'>
										<Twitter />
									</Button>
								</Link>
								<Link href='/resume.pdf' passHref>
									<Button className='w-full h-[100px]'>
										<File />
									</Button>
								</Link>
							</div>
							<div className='grid md:grid-cols-2 gap-4 w-full'>
								<Link href='https://github.com/yourusername' passHref>
									<div className='w-full h-[120px] flex items-center justify-center rounded-md font-serif relative overflow-hidden bg-black'>
										<Image
											src={banner}
											alt='Background'
											className='absolute object-cover w-full h-full opacity-30'
										/>
										<span className='z-10 text-white font-bold'>
											HITHERE MAIL
										</span>
									</div>
								</Link>
								<Link href='https://github.com/yourusername' passHref>
									<div className='w-full h-[120px] flex items-center justify-center rounded-md font-serif relative overflow-hidden bg-black'>
										<Image
											src={banner}
											alt='Background'
											className='absolute object-cover w-full h-full opacity-30'
										/>
										<span className='z-10 text-white font-bold'>TWEET BOT</span>
									</div>
								</Link>
							</div>
						</div>
					</CardContent>
				</div>
				{/* <footer className='p-4 bg-gray-200 text-center'>
					<p className='text-sm'>© 2024 Azhar. All rights reserved.</p>
				</footer> */}
			</div>
		</div>
	);
}
