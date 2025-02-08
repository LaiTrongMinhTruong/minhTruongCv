import { useState } from "react";
import ProjectType from "../types/ProjectType";

const Project = () => {
  const projects: ProjectType[] = [
    {
      id: 1,
      title: "NODE Branding Identity Design",
      type: "Image",
      imageUrl: "/src/assets/project01.png",
      description:
        "A comprehensive branding project for NODE, including logo design, color palette, and typography to establish a strong visual identity.",
    },
    {
      id: 2,
      title: "Interactive Product Launch Video",
      type: "Video",
      imageUrl: "/src/assets/project02.png",
      description:
        "Created an engaging promotional video for a new product launch, featuring dynamic animations and customer testimonials.",
    },
    {
      id: 3,
      title: "Ambient Music Composition for Meditation App",
      type: "Music",
      imageUrl: "/src/assets/project03.png",
      description:
        "Composed and produced a series of ambient tracks designed to enhance relaxation and focus for a meditation application.",
    },
    {
      id: 4,
      title: "Content Strategy for Tech Blog",
      type: "Content",
      imageUrl: "/src/assets/project04.png",
      description:
        "Developed a content strategy and wrote articles for a tech blog, focusing on emerging technologies and industry trends.",
    },
    {
      id: 5,
      title: "Minimalist Photography Portfolio",
      type: "Image",
      imageUrl: "/src/assets/project05.png",
      description:
        "Curated a minimalist photography portfolio showcasing architectural and landscape photography with a focus on clean lines and composition.",
    },
    {
      id: 6,
      title: "Corporate Training Video Series",
      type: "Video",
      imageUrl: "/src/assets/project06.png",
      description:
        "Produced a series of training videos for corporate clients, covering topics from leadership skills to software tutorials.",
    },
    {
      id: 7,
      title: "Original Soundtrack for Indie Game",
      type: "Music",
      imageUrl: "/src/assets/project07.png",
      description:
        "Composed an original soundtrack for an indie game, blending electronic and orchestral elements to match the game's unique aesthetic.",
    },
    {
      id: 8,
      title: "Social Media Content Calendar",
      type: "Content",
      imageUrl: "/src/assets/project08.png",
      description:
        "Designed and implemented a social media content calendar for a lifestyle brand, increasing engagement and follower growth.",
    },
    {
      id: 9,
      title: "Urban Street Photography Exhibition",
      type: "Image",
      imageUrl: "/src/assets/project09.png",
      description:
        "Organized and exhibited a collection of urban street photography, capturing the vibrancy and diversity of city life.",
    },
    {
      id: 10,
      title: "Explainer Video for Startup",
      type: "Video",
      imageUrl: "/src/assets/project10.png",
      description:
        "Created an explainer video for a tech startup, simplifying complex concepts into an easily digestible format for potential investors.",
    },
  ];

  const [filter, setFilter] = useState<string>("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.type === filter);
  return (
    <div className="absolute left-1/3 right-0 bg-white rounded-2xl overflow-y-scroll p-4 h-full">
      <div className="flex flex-row justify-between items-center">
        <h3 className="my-4 font-medium text-xl">
          <span className="text-green-500">Recent</span>
          <span className="text-gray-500"> Works</span>
        </h3>
        <div className="flex justify-center gap-4 h-fit items-end">
          <button
            className={`px-2 text-sm font-light tracking-wider ${
              filter === "All"
                ? "border border-green-500 text-green-500"
                : "border-0 text-gray-500"
            } rounded`}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className={`px-2 text-sm font-light tracking-wider ${
              filter === "Image"
                ? "border border-green-500 text-green-500"
                : "border-0 text-gray-500"
            } rounded`}
            onClick={() => setFilter("Image")}
          >
            Image
          </button>
          <button
            className={`px-2 text-sm font-light tracking-wider ${
              filter === "Video"
                ? "border border-green-500 text-green-500"
                : "border-0 text-gray-500"
            } rounded`}
            onClick={() => setFilter("Video")}
          >
            Video
          </button>
          <button
            className={`px-2 text-sm font-light tracking-wider ${
              filter === "Music"
                ? "border border-green-500 text-green-500"
                : "border-0 text-gray-500"
            } rounded`}
            onClick={() => setFilter("Music")}
          >
            Music
          </button>
          <button
            className={`px-2 text-sm font-light tracking-wider ${
              filter === "Content"
                ? "border border-green-500 text-green-500"
                : "border-0 text-gray-500"
            } rounded`}
            onClick={() => setFilter("Content")}
          >
            Content
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md">
            <div className="relative">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-80 hover:opacity-80 hover:w-96 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col">
                <p className="text-center text-white font-medium italic px-2 mb-2">
                  {project.description}
                </p>
                <button className="font-bold text-xl text-green-500 mt-2 border-2 border-green-500 rounded-lg p-2">
                  More
                </button>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-500">
                {project.title}
              </h2>
              <p className="text-sm text-green-500">{project.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
