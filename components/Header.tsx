
import { useRouter } from 'next/router';

const Header = () => {
	const router = useRouter();
	return (
		<header className='inline-flex pt-32 pb-32'>
			<div className='text-3xl font-bold'>header header header</div>
			<div className="font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
				<ul>
					<li className="me-2" onClick={() => router.push('/')}>
						main
					</li>
					<li className="me-2" onClick={() => router.push('/login')}>
						login
					</li>
					<li className="me-2" onClick={() => router.push('/mypage')}>
						mypage
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header