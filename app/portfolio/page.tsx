import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { getProjects, Project } from "@/app/lib/projects";

export default async function Portfolio() {
  let projects: Project[] = [];

  try {
    projects = await getProjects();
  } catch (error) {
    console.error("PAGE ERROR:", error);
  }

  return (
    <main className="min-h-screen bg-[#4e969b] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-10">Projects</h1>

        {projects.length === 0 ? (
          <p className="text-gray-300">No projects found.</p>
        ) : (
          <div className="space-y-8">
            {projects.map((item) => (
              <div
                key={item.id}
                className="bg-[#132a52] border border-gray-700 rounded-xl p-6"
              >
                <h2 className="text-2xl font-semibold mb-3">
                  {item.title}
                </h2>

                <p className="text-gray-400 mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.libraries.map((lib, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-sm px-3 py-1 rounded-md"
                    >
                      {lib}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 text-gray-300">
                  <a
                    href={item.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white"
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={item.vercel_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}