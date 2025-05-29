import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="flex-1">
                <div className="space-y-6">
                    <div className=" grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <h2 className="text-2xl font-semibold mb-4 hover:rotate-1">Hi I'm Devit Erlingga Arafiudin <FontAwesomeIcon icon={faUpRightFromSquare} className="text-sm cursor-pointer text-gray-200"/></h2>
                            <p className="text-gray-400 ">
                                I am a Undergraduate student at Telkom University Surabaya, majoring in Software Engineering. My focus is on software development, from design to maintenance.
                            </p>
                            <div className='flex flex-wrap items-center gap-2 my-2 text-xs'>
                                <div className='bg-green-950 px-3 rounded-sm text-green-200'>backend web developer</div>
                                <div className='bg-purple-950 px-3 rounded-sm text-purple-200'>frontend web developer</div>
                                <div className='bg-yellow-950 px-3 rounded-sm text-yellow-200'>fullstack web developer</div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <a href="">
                                    <button className="px-4 py-[6px] text-sm bg-blue-800 text-white cursor-pointer hover:bg-blue-900 transition-colors">
                                        Download CV
                                    </button>
                                </a>
                                <a href="">
                                    <FontAwesomeIcon icon={faEnvelope} className=" text-2xl cursor-pointer hover:text-gray-500 transition-colors" />
                                </a>
                                <a href="">
                                    <FontAwesomeIcon icon={faDiscord} className=" text-2xl cursor-pointer hover:text-gray-500 transition-colors" />
                                </a>
                            </div>
                        </div>

                        <div className=" flex items-center justify-center">
                            <img
                                src="http://img-host-by-dev.vercel.app/img/ayangKu/IMG_8585copy.JPG"
                                alt="Devit Erlingga Arafiudin"
                                className="w-[60%] h-auto rounded-full shadow-lg"
                            />
                        </div>
                    </div>

                    <div className=" ">
                        <h2 className="text-2xl text-gray-400 font-semibold mb-4 hover:rotate-1">About Me</h2>
                        <p>
                            I have over 5 years of experience as a programmer, specializing in web development. My skills include both frontend and backend development,
                            as well as a strong understanding of cybersecurity. With this experience, I am passionate about contributing to challenging technology
                            projects and continuously learning and growing in the field of software development.
                        </p>
                    </div>


                    <div className=" ">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-400 hover:rotate-1">Skills</h2>
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
                            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
                            <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                            <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
                            <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
                            <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
                            <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue.js" />
                            <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel" />
                            <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                            <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
                            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                            <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                            <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
                            <img src="https://img.shields.io/badge/Php-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
                        </div>
                       
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;

