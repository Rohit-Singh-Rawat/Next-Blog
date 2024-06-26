import Link from 'next/link';
import { BsYoutube } from 'react-icons/bs';
import { PiGithubLogo, PiLaptop } from 'react-icons/pi';
import { RiTwitterXLine } from 'react-icons/ri';
type Props = {};
export default function Navbar({}: Props) {
	return (
		<nav className='bg-zinc-900 p-4 sticky top-0 drop-shadow-xl z-10'>
			<div className='prose prose-xl mx-auto flex gap-3 md:px-5 items-center justify-between flex-col md:flex-row sm:flex-row'>
				<Link
					href={'/'}
					className='text-white/60 font-mono underline-offset-8 underline hover:decoration-zinc-500  transition-all ease-linear hover:text-white'
				>
					Rohit Singh Rawat
				</Link>
				<div className='flex gap-4'>
					<Link
						href={''}
						className='text-white hover:text-white/60 '
					>
						<RiTwitterXLine />
					</Link>{' '}
					<Link
						href={''}
						className='text-white hover:text-white/60'
					>
						<BsYoutube />
					</Link>{' '}
					<Link
						href={''}
						className='text-white hover:text-white/60'
					>
						<PiGithubLogo />
					</Link>{' '}
					<Link
						href={''}
						className='text-white hover:text-white/60'
					>
						<PiLaptop />
					</Link>
				</div>
			</div>
		</nav>
	);
}
