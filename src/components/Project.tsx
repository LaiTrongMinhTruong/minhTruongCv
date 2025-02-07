import { useState } from "react";

type Project = {
  id: number;
  title: string;
  type: string;
  imageUrl: string;
};

const Project = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "NODE Branding Mockup",
      type: "Image",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Project 2",
      type: "Video",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Project 3",
      type: "Music",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Project 4",
      type: "Content",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Project 5",
      type: "Image",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Project 6",
      type: "Video",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      title: "Project 7",
      type: "Music",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      title: "Project 8",
      type: "Content",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      title: "Project 9",
      type: "Image",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      title: "Project 10",
      type: "Video",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  const [filter, setFilter] = useState<string>("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.type === filter);
  return (
    <div className="p-5 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Recent Works
      </h1>

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
