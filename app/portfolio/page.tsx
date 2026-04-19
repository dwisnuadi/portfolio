import { getConnection } from "@/app/lib/db";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

async function getProjects() {
  const db = await getConnection();

  const [rows]: any = await db.execute(`
    SELECT 
      p.id,
      p.title,
      p.description,
      p.github_link,
      p.vercel_link,
      l.name as library
    FROM projects p
    LEFT JOIN libraries l ON p.id = l.project_id
  `);

  const map = new Map();

  rows.forEach((row: any) => {
    if (!map.has(row.id)) {
      map.set(row.id, {
        id: row.id,
        title: row.title,
        description: row.description,
        github_link: row.github_link,
        vercel_link: row.vercel_link,
        libraries: [],
      });
    }

    if (row.library) {
      map.get(row.id).libraries.push(row.library);
    }
  });

  return Array.from(map.values());
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
              className="bg-[#132a52] border border-gray-700 rounded-xl p-6"
            >
              <h2 className="text-2xl font-semibold mb-3">
                {item.title}
              </h2>

              <p className="text-gray-400 mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {item.libraries?.map((lib: string, i: number) => (
                  <span key={i} className="bg-gray-700 text-sm px-3 py-1 rounded-md">
                    {lib}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 text-gray-300">
                <a href={item.github_link} target="_blank">
                  <FaGithub /> Code
                </a>
                <a href={item.vercel_link} target="_blank">
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