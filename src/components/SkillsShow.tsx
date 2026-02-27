import { AccordionItem , Accordion, AccordionContent , AccordionTrigger } from "./ui/accordion";

type skills = {
    skill: string;
    proficiency: number;
    experience: string;
}

type skillProps = {
    color: string;
    skills: skills[];
}

function RatingBalls(value : number) {
  return (
    <div className="flex gap-3">
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i < value;

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
  );
}

export default function SkillsShow({color, skills}:skillProps){
    var skillsAccordions = (
    skills.map(({skill, experience, proficiency}) =>{
        return(
            <AccordionItem value={skill} key={skill}>
                <AccordionTrigger className={`
                  m-1 p-4
                  rounded-lg
                  bg-sticknote_${color}_title
                  text-foreground
                  hover:no-underline
                  shadow-sm hover:shadow-md
                  transition
                  text-gray-900
                `}>
                    <div className="flex justify-between w-full text-xl">
                        <div>{skill}</div>
                        {RatingBalls(proficiency)}
                    </div>
                </AccordionTrigger>
                <AccordionContent className={`m-2 mt-0 p-4
                rounded-b-lg
                bg-sticknote_${color}_body
                text-lg
                text-gray-900
                leading-relaxed`}>
                    {experience}
                </AccordionContent>
            </AccordionItem>
        );
    }))
    return(
        <div className="flex flex-col">
            <div className="mb-2">
                <p className="text-3xl font-serif italic pl-3 pr-2">Programing Languages</p>
            </div>
            <Accordion type="single" collapsible  className="flex flex-col">
                    {skillsAccordions}
            </Accordion>
        </div>
    );
}