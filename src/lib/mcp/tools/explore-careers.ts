import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

interface Branch {
  id: string;
  name: string;
  overview: string;
  coreRoles: string[];
  realityCheck: string;
}

const BRANCHES: Branch[] = [
  {
    id: "ece",
    name: "Electronics & Communication (ECE)",
    overview: "Circuits, embedded systems, signal processing, and communication networks.",
    coreRoles: ["Embedded Engineer", "VLSI Design Engineer", "RF Engineer", "IoT Developer"],
    realityCheck:
      "Core electronics jobs are limited and competitive; many graduates move into IT/software roles.",
  },
  {
    id: "mechanical",
    name: "Mechanical Engineering",
    overview: "Design, manufacturing, thermodynamics, and mechanical systems.",
    coreRoles: ["Design Engineer", "Production Engineer", "CAD/CAM Engineer", "Quality Engineer"],
    realityCheck:
      "Entry salaries in core industry are often modest; growth depends on domain specialization.",
  },
  {
    id: "civil",
    name: "Civil Engineering",
    overview: "Structures, construction, transportation, and infrastructure.",
    coreRoles: ["Site Engineer", "Structural Engineer", "Project Engineer", "Surveyor"],
    realityCheck:
      "Fieldwork is demanding with long hours; government exams are a common stable path.",
  },
  {
    id: "cse",
    name: "Computer Science / IT",
    overview: "Software development, data, and computing systems.",
    coreRoles: ["Software Engineer", "Data Analyst", "DevOps Engineer", "Full-Stack Developer"],
    realityCheck:
      "Highest hiring volume, but the market is saturated at entry level; skills matter more than the degree.",
  },
];

export default defineTool({
  name: "explore_careers",
  title: "Explore careers",
  description:
    "Explore engineering branches with an honest overview, core job roles, and a reality check. Optionally filter by branch id.",
  inputSchema: {
    branchId: z
      .enum(["ece", "mechanical", "civil", "cse"])
      .optional()
      .describe("Optional branch id to filter to a single branch."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ branchId }) => {
    const result = branchId ? BRANCHES.filter((b) => b.id === branchId) : BRANCHES;
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: { branches: result },
    };
  },
});
