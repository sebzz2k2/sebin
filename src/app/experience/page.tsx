import ExperienceTimeline from "../../components/Timeline";
import axios from "axios";
import { IExperience } from "../../lib/types";
async function getExperiences() {
  const experiencesUrl =
    "https://raw.githubusercontent.com/sebzz2k2/sebin-assets/main/portfolio/experience.json";
  const response = await axios.get(experiencesUrl);
  return response.data;
}
const Experience = async () => {
  const experiences: IExperience[] = await getExperiences();
  return (
    <div className="h-[calc(100vh-6rem)] px-16 py-8 flex  flex-col gap-16 overflow-auto">
      <ExperienceTimeline experiences={experiences} />
    </div>
  );
};

export default Experience;
