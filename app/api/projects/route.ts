export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { getConnection } from "@/app/lib/db";

export async function GET() {
  try {
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

    return NextResponse.json(Array.from(map.values()));

  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}