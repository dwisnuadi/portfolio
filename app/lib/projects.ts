import { getConnection } from "./db";

export type Project = {
  id: number;
  title: string;
  description: string;
  github_link: string;
  vercel_link: string;
  libraries: string[];
};

export async function getProjects(): Promise<Project[]> {
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

  const map = new Map<number, Project>();

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
      map.get(row.id)?.libraries.push(row.library);
    }
  });

  return Array.from(map.values());
}