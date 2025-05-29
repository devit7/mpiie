import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
    const router = useRouter();

    const navItems = [
        { href: '/about', label: 'ABOUT' },
        { href: '/project', label: 'PROJECT' },
        { href: '/achievement', label: 'ACHIEVEMENT' }
    ];

    return (
        <ul className="pl-5 font-semibold space-y-3">
            {navItems.map((item) => (
                <li key={item.href}>
                    <Link
                        href={item.href}
                        className={`flex cursor-pointer flex-row items-center gap-4 transition-all duration-300 ${router.pathname === item.href
                            ? 'text-gray-200'
                            : 'text-gray-400 hover:text-gray-200'
                            }`}
                    >
                        <hr className={`transition-all duration-300 ${router.pathname === item.href ? 'w-20' : 'w-8 hover:w-20'
                            }`} />
                        <span>{item.label}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Navigation;
