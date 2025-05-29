import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const MenuFooter = () => {
    return (
        <>
            <div className=" pl-5 rounded-lg   flex justify-between items-center">
                <div className="flex  gap-2">
                    <a href="">
                        <FontAwesomeIcon icon={faGithub} className="text-2xl mr-4" />
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl mr-4" />
                    </a>
                </div>
                <Link href="/">
                    <FontAwesomeIcon icon={faHome} className="text-2xl mr-4 hover:text-gray-300 transition-colors" />
                </Link>
            </div>
        </>
    );
};

export default MenuFooter;
