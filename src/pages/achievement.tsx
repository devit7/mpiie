const Achievement = () => {
    const achievements = [
        {
            title: "Full Stack Developer Certification",
            issuer: "Tech Academy",
            date: "2023",
            description: "Comprehensive certification covering modern web development technologies"
        },
        {
            title: "Best Web Application Award",
            issuer: "Local Tech Competition",
            date: "2023",
            description: "Won first place for innovative e-commerce solution"
        },
        {
            title: "Open Source Contributor",
            issuer: "GitHub",
            date: "2022-Present",
            description: "Active contributor to various open source projects"
        }
    ];

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1">
                <h1 className="text-4xl font-bold mb-6">Achievements</h1>
                <div className="space-y-6">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
                            <div className="flex justify-between items-start mb-3">
                                <h2 className="text-xl font-semibold">{achievement.title}</h2>
                                <span className="text-sm text-gray-400">{achievement.date}</span>
                            </div>
                            <p className="text-blue-400 mb-2">{achievement.issuer}</p>
                            <p className="text-gray-300">{achievement.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievement;
