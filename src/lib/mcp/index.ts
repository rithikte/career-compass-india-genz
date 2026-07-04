import { defineMcp } from "@lovable.dev/mcp-js";
import listDegreePathsTool from "./tools/list-degree-paths";
import exploreCareersTool from "./tools/explore-careers";

export default defineMcp({
  name: "undergraduate-maps-mcp",
  title: "Undergraduate Maps MCP",
  version: "0.1.0",
  instructions:
    "Tools for Undergraduate Maps, a career-and-degree guidance app for Indian students. Use `list_degree_paths` to see degree domains and subject combinations, and `explore_careers` to get honest overviews, job roles, and reality checks for engineering branches.",
  tools: [listDegreePathsTool, exploreCareersTool],
});
