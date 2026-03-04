import data from '../data.json' assert { type: 'json' };
import { PostItAccordion } from '@/components/PostItAccordion';
import { Accordion } from "@/components/ui/accordion";
import { PostItTabs } from '@/components/PostItTabs';

export default function Experiences() {
    const experiences = (
        <Accordion  type="single" collapsible  className="flex flex-col justify-evenly">
        {data.Experiences.map((experience) => {
            return <PostItAccordion key={experience.Company + experience.Duration} company={experience.Company} position={experience.Position} duration={experience.Duration} description={experience.Description} titleColor="bg-sticknote_pink_title" contentColor="bg-sticknote_pink_body"/>;
        })}
        </Accordion>
    );
    const education = (
        <Accordion  type="single" collapsible  className="flex flex-col justify-evenly">
        {data.Education.map((education) => {
            return <PostItTabs key={education.Degree + education.Duration} company={education.Institution} level={education.Level} position={education.Degree} duration={education.Duration} description={education.Description} titleColor="bg-sticknote_green_title" contentColor="bg-sticknote_green_body"/>;
        })}
        </Accordion>
    );
    const other_activities = (
        <Accordion  type="single" collapsible  className="flex flex-col justify-evenly">
        {data.Other_Activities.map((activity) => {
            if(activity.Role.length > 1){
                return <PostItTabs key={activity.Association + activity.Duration} company={activity.Association} level={activity.Role} duration={activity.Duration} description={activity.Description} titleColor="bg-sticknote_blue_title" contentColor="bg-sticknote_blue_body"/>;
            }else{
                return <PostItAccordion key={activity.Association + activity.Duration} company={activity.Association} position={activity.Role[0]} duration={activity.Duration[0]} description={activity.Description[0]} titleColor="bg-sticknote_blue_title" contentColor="bg-sticknote_blue_body"/>;
            }
        })}
        </Accordion>
    );

    return (
        <div className="flex flex-col">
            <div className="mb-2">
                <p className="text-3xl font-serif italic pl-3 pr-2">Experiences</p>
            </div>
            {experiences}
            <div className="mt-5 mb-2">
                <p className="text-3xl font-serif italic pl-3 pr-2">Education</p>
            </div>
            {education}
            <div className="mt-5 mb-2">
                <p className="text-3xl font-serif italic pl-3 pr-2">Other Activities</p>
            </div>
            {other_activities}
        </div>
    )
}