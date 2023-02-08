import Link from 'next/link';

export const NavItem = ({
	name,
	children,
	href,
}: {
	name: string;
	children: React.ReactNode;
	href?: string;
}) => {
	return (
		<li>
			<Link
				href={href ? href : ''}
				className="flex items-center p-2 text-base font-normal text-neutral-200 rounded-lg dark:text-white hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-700 "
			>
				<svg
					className="w-6 h-6 transition duration-75 dark:text-neutral-100 group-hover:text-neutral-900 dark:group-hover:text-white"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					{children}
				</svg>
				<span className="ml-3 capitalize">{name}</span>
			</Link>
		</li>
	);
};
