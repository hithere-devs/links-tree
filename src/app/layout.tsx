import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Azhar Mahmood',
	description: 'simply hit here devs! to get in touch with me',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} antialiased bg-gray-900 max-w-[1600px] m-auto`}
			>
				{children}
			</body>
		</html>
	);
}
