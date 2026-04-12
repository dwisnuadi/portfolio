import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

async function getProjects() {
  const res = await fetch("http://localhost:3001/projects", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Portfolio() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-[#4e969b] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-10">Projects</h1>

        <div className="space-y-8">
          {projects.map((item: any) => (
            <div
              key={item.id}
              className="bg-[#132a52] border border-gray-700 rounded-xl p-6 hover:scale-[1.02] transition"
            >
              {/* TITLE */}
              <h2 className="text-2xl font-semibold mb-3">
                {item.title}
              </h2>

              {/* DESC */}
              <p className="text-gray-400 mb-4">
                {item.description}
              </p>

              {/* LIBRARIES */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.libraries?.map((lib: string, i: number) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-sm px-3 py-1 rounded-md"
                  >
                    {lib}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <div className="flex gap-6 text-gray-300">

                <a
                  href={item.github_link}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <FaGithub /> Code
                </a>

                <a
                  href={item.vercel_link}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}