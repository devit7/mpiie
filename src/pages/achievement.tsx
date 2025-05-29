import { faTrophy, faMedal, faAward, faCertificate, faCalendar, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Achievement = () => {
    const achievements = [
        {
            title: "Full Stack Developer Certification",
            issuer: "Tech Academy",
            date: "2023",
            description: "Comprehensive certification covering modern web development technologies",
            icon: faCertificate,
            color: "from-yellow-500 to-amber-600",
            bgColor: "bg-gradient-to-br from-yellow-900/20 to-amber-900/20",
            borderColor: "border-yellow-500/30",
            image: "https://media.licdn.com/dms/image/v2/D562DAQE8QukI_HUy6Q/profile-treasury-image-shrink_800_800/B56ZZ_vW7EGUAc-/0/1745899843938?e=1749106800&v=beta&t=bZWUrPDtjT0WGR6i-3MzI39UWdq_XJ46wvO8z6R9bCk"
        },
        {
            title: "Best Web Application Award",
            issuer: "Local Tech Competition",
            date: "2023",
            description: "Won first place for innovative e-commerce solution",
            icon: faTrophy,
            color: "from-blue-500 to-purple-600",
            bgColor: "bg-gradient-to-br from-blue-900/20 to-purple-900/20",
            borderColor: "border-blue-500/30",
            image: "https://media.licdn.com/dms/image/v2/D562DAQE8QukI_HUy6Q/profile-treasury-image-shrink_800_800/B56ZZ_vW7EGUAc-/0/1745899843938?e=1749106800&v=beta&t=bZWUrPDtjT0WGR6i-3MzI39UWdq_XJ46wvO8z6R9bCk"
        },
        {
            title: "Open Source Contributor",
            issuer: "GitHub",
            date: "2022-Present",
            description: "Active contributor to various open source projects",
            icon: faAward,
            color: "from-green-500 to-emerald-600",
            bgColor: "bg-gradient-to-br from-green-900/20 to-emerald-900/20",
            borderColor: "border-green-500/30",
            image: "https://media.licdn.com/dms/image/v2/D562DAQE8QukI_HUy6Q/profile-treasury-image-shrink_800_800/B56ZZ_vW7EGUAc-/0/1745899843938?e=1749106800&v=beta&t=bZWUrPDtjT0WGR6i-3MzI39UWdq_XJ46wvO8z6R9bCk"
        }
    ];

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                        🏆 Achievements & Certifications
                    </h1>
                    <p className="text-gray-400">Recognition of excellence and professional milestones</p>
                </div>

                <div className="grid gap-6">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className={`relative group ${achievement.bgColor} ${achievement.borderColor} border-2 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 overflow-hidden`}
                        >
                            {/* Decorative corner elements */}
                            <div className="absolute top-0 left-0 w-16 h-16 opacity-10">
                                <div className={`w-full h-full bg-gradient-to-br ${achievement.color} transform -rotate-45 translate-x-[-50%] translate-y-[-50%]`}></div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10">
                                <div className={`w-full h-full bg-gradient-to-br ${achievement.color} transform rotate-45 translate-x-[50%] translate-y-[50%]`}></div>
                            </div>

                            {/* Glowing border effect on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`}></div>

                            <div className="relative z-10 flex items-start gap-6">
                                {/* Certificate/Award Image */}
                                <div className="flex-shrink-0">
                                    <div className="relative w-32 h-24 rounded-lg overflow-hidden border-2 border-gray-600 group-hover:border-yellow-400 transition-colors duration-300">
                                        <Image
                                            src={achievement.image}
                                            alt={achievement.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        {/* Overlay icon */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-80 flex items-center justify-center transition-opacity duration-300`}>
                                            <FontAwesomeIcon icon={achievement.icon} className="text-white text-2xl" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <FontAwesomeIcon
                                                icon={achievement.icon}
                                                className={`text-2xl bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                                            />
                                            <h2 className="text-xl font-semibold group-hover:text-yellow-300 transition-colors duration-300">
                                                {achievement.title}
                                            </h2>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <FontAwesomeIcon icon={faCalendar} className="text-xs" />
                                            <span className="group-hover:text-yellow-300 transition-colors duration-300">
                                                {achievement.date}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 mb-3">
                                        <FontAwesomeIcon icon={faBuilding} className="text-gray-500 text-sm" />
                                        <p className={`font-medium bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                                            {achievement.issuer}
                                        </p>
                                    </div>

                                    <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed">
                                        {achievement.description}
                                    </p>

                                    {/* Achievement badge */}
                                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-gray-800/50 rounded-full border border-gray-600 group-hover:border-yellow-400 transition-colors duration-300">
                                        <FontAwesomeIcon icon={faMedal} className="text-yellow-400 text-sm" />
                                        <span className="text-xs font-medium text-yellow-300">Verified Achievement</span>
                                    </div>
                                </div>
                            </div>

                            {/* Animated shine effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Achievement;
