import { defineTool } from "@lovable.dev/mcp-js";

const DEGREE_DOMAINS = [
  { id: "btech", label: "B.Tech – Degree" },
  { id: "bsc", label: "B.Sc – Degree" },
  { id: "diploma", label: "Diploma" },
  { id: "integrated", label: "Integrated Course" },
];

const SUBJECT_COMBINATIONS: Record<string, string[]> = {
  MPC: ["Math", "Physics", "Chemistry"],
  MBIPC: ["Math", "Biology", "Physics", "Chemistry"],
  BIPC: ["Biology", "Physics", "Chemistry"],
};

export default defineTool({
  name: "list_degree_paths",
  title: "List degree paths",
  description:
    "List the undergraduate degree domains and 11th/12th subject combinations covered by Undergraduate Maps.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify({ domains: DEGREE_DOMAINS, subjectCombinations: SUBJECT_COMBINATIONS }, null, 2),
      },
    ],
    structuredContent: { domains: DEGREE_DOMAINS, subjectCombinations: SUBJECT_COMBINATIONS },
  }),
});
