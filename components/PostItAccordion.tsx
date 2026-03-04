
"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type PostItExperienceProps = {
  company: string;
  position: string;
  duration: string;
  description: string[];
  titleColor: string;
  contentColor: string;
};

export function PostItAccordion({
  company,
  position,
  duration,
  description,
  titleColor,
  contentColor,
}: PostItExperienceProps) {
  return (
      <AccordionItem value={`${company}-${position}`} className="border-none">
        <AccordionTrigger
          className={`
            m-1 p-4
            rounded-lg
            ${titleColor}
            text-foreground
            hover:no-underline
            shadow-sm hover:shadow-md
            transition~
            text-gray-900
          `}
        >
          <div className="flex w-full justify-between items-center">
            <div className="font-bold text-xl ">
              {position} @ {company}
            </div>
            <div className="italic text-lg">
              {duration}
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent
          className={`
            m-2 mt-0 p-4
            rounded-b-lg
            ${contentColor}
            text-lg
            text-gray-900
            leading-relaxed
          `}
        >
          <ul className="list-disc list-inside text-gray-900">
            {description.map((desc,idx) => {return(<li key={idx} className="mt-2">{desc}</li>)})}
          </ul>
        </AccordionContent>

      </AccordionItem>
  );
}
