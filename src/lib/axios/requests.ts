import axios from "axios";

export const getExperience = async () => {
  const url =
    "https://raw.githubusercontent.com/sebzz2k2/sebin-assets/main/portfolio/experience.json";
  const { data } = await axios.get(url);
  return data;
};

export async function fetchProjects() {
  const projectsUrl =
    "https://raw.githubusercontent.com/sebzz2k2/sebin-assets/main/portfolio/projects.json";
  const response = await axios.get(projectsUrl);
  return response.data;
}
