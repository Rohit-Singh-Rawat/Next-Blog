import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import MyProfilePic from './components/MyProfilePic';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'My Blog',
	description: 'This is my blog',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				<MyProfilePic />
				{children}
			</body>
		</html>
	);
}
