import SkillsShow from "@/components/SkillsShow";
import data from '../data.json' assert { type: 'json' };

export default function Skills(){
    return(
        <SkillsShow skills={data.Skills}/>
    )
}