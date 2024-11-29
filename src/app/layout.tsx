import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
// const poppins = Poppins({
// 	subsets: ['latin'],
// 	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
// });

// export const ebga = EB_Garamond({
// 	subsets: ['latin'],
// 	weight: ['400', '500', '600', '700', '800'],
// });

export const metadata: Metadata = {
	title: 'Azhar Mahmood',
	description: 'simply hit here devs! to know or get in touch with me',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@hithere_devs' />
				<meta name='twitter:title' content='Azhar Mahmood' />
				<meta
					name='twitter:description'
					content='simply hit here devs! to know or get in touch with me'
				/>
				<meta
					name='twitter:image'
					content='https://res.cloudinary.com/chintukepapa/image/upload/v1732861019/af0q93kahobk0luyir5c.png'
				/>
			</head>
			<body
				className={`${inter.className} antialiased bg-gray-900 max-w-[1600px] m-auto`}
			>
				{children}
			</body>
		</html>
	);
}
