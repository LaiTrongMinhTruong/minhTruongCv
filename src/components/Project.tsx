import { useState } from "react";
import ProjectType from "../types/ProjectType";

const Project = () => {
  const projects: ProjectType[] = [
    {
      id: 1,
      title: "NODE Branding Mockup",
      type: "Image",
      imageUrl: "/src/assets/project01.png",
    },
    {
      id: 2,
      title: "Project 2",
      type: "Video",
      imageUrl: "/src/assets/project02.png",
    },
    {
      id: 3,
      title: "Project 3",
      type: "Music",
      imageUrl: "/src/assets/project03.png",
    },
    {
      id: 4,
      title: "Project 4",
      type: "Content",
      imageUrl: "/src/assets/project04.png",
    },
    {
      id: 5,
      title: "Project 5",
      type: "Image",
      imageUrl: "/src/assets/project05.png",
    },
    {
      id: 6,
      title: "Project 6",
      type: "Video",
      imageUrl: "/src/assets/project06.png",
    },
    {
      id: 7,
      title: "Project 7",
      type: "Music",
      imageUrl: "/src/assets/project07.png",
    },
    {
      id: 8,
      title: "Project 8",
      type: "Content",
      imageUrl: "/src/assets/project08.png",
    },
    {
      id: 9,
      title: "Project 9",
      type: "Image",
      imageUrl: "/src/assets/project09.png",
    },
    {
      id: 10,
      title: "Project 10",
      type: "Video",
      imageUrl: "/src/assets/project10.png",
    },
  ];

  const [filter, setFilter] = useState<string>("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.type === filter);
  return (
    <div className="absolute left-96 right-0 bg-white rounded-2xl overflow-y-scroll p-4">
      <h3 className="my-4 font-medium text-xl">
        <span className="text-green-500">Recent</span>
        <span className="text-gray-500"> Works</span>
      </h3>

      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-4 py-2 ${
            filter === "All"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 ${
            filter === "Image"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded`}
          onClick={() => setFilter("Image")}
        >
          Image
        </button>
        <button
          className={`px-4 py-2 ${
            filter === "Video"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded`}
          onClick={() => setFilter("Video")}
        >
          Video
        </button>
        <button
          className={`px-4 py-2 ${
            filter === "Music"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded`}
          onClick={() => setFilter("Music")}
        >
          Music
        </button>
        <button
          className={`px-4 py-2 ${
            filter === "Content"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded`}
          onClick={() => setFilter("Content")}
        >
          Content
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600">{project.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
