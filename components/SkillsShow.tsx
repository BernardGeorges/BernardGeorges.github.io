import { AccordionItem , Accordion, AccordionContent , AccordionTrigger } from "./ui/accordion";

type skills = {
    skill: string;
    proficiency: number;
}

type skillsDiv = {
    title: string;
    content: skills[]
}

type skillProps = {
    skills: skillsDiv[];
}
const contentColor = ["pink", "blue", "green"]

function RatingBalls(value: skills) {
  return (
    <li key={value.skill} className="hover:bg-black/5 flex justify-between w-full text-xl font-bold border-b border-black/10 py-2 last:border-b-0">
      <div>{value.skill}</div>
      <div className="flex gap-3">
        {Array.from({ length: 5 }, (_, i) => {
          const filled = i < value.proficiency;

          return (
            <div
            key={i}
            className={`w-6 h-6 rounded-full ${
              filled ? "bg-gray-900" : "bg-gray-300"
            }`}
            />
          );
        })}
      </div>
    </li>
  );
}

export default function SkillsShow({skills}:skillProps){
      return(
        <div>
        {skills.map(({title, content}, index) => (
          <div key={title} className="p-2 text-gray-900">
            <div className={`flex p-2 text-center justify-center font-bold bg-sticknote_${contentColor[index%3]}_title rounded-t-xs text-lg`}>
              <h2>{title}</h2>
            </div>
            <ul className={`list-disc list-inside py-2 px-3 bg-sticknote_${contentColor[index%3]}_body h-full rounded-b-xs`}>
              {content.map((cont) => (RatingBalls(cont)))}
            </ul>
          </div>
        ))}
        </div>
    );
}