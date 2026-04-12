import express from "express";
import cors from "cors";
import db from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

// GET PROJECTS dari database
app.get("/projects", async (req, res) => {
  try {
    const projects = await db("projects");

    const result = await Promise.all(
      projects.map(async (project) => {
        const libs = await db("libraries")
          .where("project_id", project.id)
          .select("name");

        return {
          ...project,
          libraries: libs.map(l => l.name),
        };
      })
    );

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});