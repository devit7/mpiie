import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Project = () => {
  const projects = [
    {
      title: "CTF Web Platform - UKM Coder Telkom University",
      description: "A web platform for hosting Capture The Flag (CTF) competitions for UKM Coder Telkom University. Using ReactTs for the frontend and Laravel for the backend with Rest Api.",
      tech: ["ReactJs", "TypeScript", "Tailwind CSS", "Tanstack Query", "Laravel", "Rest API", "MySQL"],
      status: "Completed",
      image: "https://media.licdn.com/dms/image/v2/D562DAQE8QukI_HUy6Q/profile-treasury-image-shrink_800_800/B56ZZ_vW7EGUAc-/0/1745899843938?e=1749106800&v=beta&t=bZWUrPDtjT0WGR6i-3MzI39UWdq_XJ46wvO8z6R9bCk"
    },
    {
      title: "Ecomers dan Manajement UMKM - (PENGMAS Desa Panjunan)",
      description: "A web application for managing e-commerce and micro, small, and medium enterprises (UMKM) in Panjunan Village. Built with Laravel and Tailwind CSS.",
      tech: ["Laravel", "TailwindCss", "RajaOngkir API", "MySQL"],
      status: "Completed",
      image: "https://media.licdn.com/dms/image/v2/D562DAQFEFHvo4xshfA/profile-treasury-image-shrink_800_800/B56ZZ_goXcGQAk-/0/1745895987565?e=1749106800&v=beta&t=TgjAvqPJh0_qLkN9MCCHNxf3pVr4NSkXAKmVNVS5rF8"
    },
    {
      title: "Freelance Profile Company PT. Refrigerasi Teknik Indo",
      description: "A freelance project to create a company profile website for PT. Refrigerasi Teknik Indo. The website showcases the company's services and portfolio.",
      tech: ["Html", "Css", "Javascript", "TailwindCss"],
      status: "Completed",
      image: "https://media.licdn.com/dms/image/v2/D562DAQE97lnatYTz4A/profile-treasury-image-shrink_800_800/B56ZZ_gO9YHgAc-/0/1745895889132?e=1749106800&v=beta&t=asQsHYrZisJeovTvs-JHi5WhgiksfXJQ8jbuuYEzWz8"
    }
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1">
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div key={index} className="flex gap-4 hover:scale-105 ease-in-out transition-all duration-300">
              {/* Project Image */}
              <div className="w-48 h-32 flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={192}
                  height={128}
                  className="w-full h-full object-cover rounded-sm border border-gray-600 hover:border-gray-600 transition-colors shadow-lg shadow-gray-800/20 "
                />
              </div>

              {/* Project Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-semibold">{project.title} <FontAwesomeIcon icon={faUpRightFromSquare} className="text-xs cursor-pointer text-gray-200" /> </h2>
                  <span className={`px-2 py-1 text-xs rounded ${project.status === 'Completed'
                    ? 'bg-green-900 text-green-300'
                    : 'bg-yellow-900 text-yellow-300'
                    }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description} </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-green-900/30  text-green-100 text-sm rounded-xl ">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
