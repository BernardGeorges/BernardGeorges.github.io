"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type PostItExperienceProps = {
  company: string;
  level: string[];
  position?: string;
  duration: string[];
  description: string[][];
  titleColor: string;
  contentColor: string;
};

export function PostItTabs({
  company,
  level,
  position,
  duration,
  description,
  titleColor,
  contentColor,
}: PostItExperienceProps) {
  const tabs = level.map((lvl, idx) => (
    <TabsTrigger
      key={lvl}
      value={lvl}
      className="text-gray-500 text-lg data-[state=active]:!text-gray-900"
    >
      <div className="flex w-full justify-around items-center">
        <div className="text-xl ">
          {lvl}
        </div>
        <div className="italic text-lg">
          {duration[idx]}
        </div>
      </div>
    </TabsTrigger>
  ));

  const content = description.map((desc, idx) => (
    <TabsContent key={level[idx]} value={level[idx]} className="text-lg">
      <ul className="list-disc list-inside text-gray-900">
        {desc.map((point, idx) => (
          <li key={"exp"+{idx}} className="mt-2">{point}</li>
        ))}
      </ul>
    </TabsContent>
  ));
  return (
    <AccordionItem value={`${company}-${position}`} className="border-none">
      <AccordionTrigger
        className={`
          m-1 p-4
          rounded-lg
          ${titleColor}
          hover:no-underline
          shadow-sm hover:shadow-md
          transition
          text-gray-900
        `}
      >
        <div className="flex w-full justify-between items-center">
          <div className="font-bold text-xl">
            {position == undefined ? `${company}` : `${position} @ ${company}`}
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
        <Tabs defaultValue={level[0]} className="w-full border-gray-300">
          <TabsList
            variant="line"
            className="w-full justify-start mb-4 "
          >
            {tabs}
          </TabsList>
          {content}
        </Tabs>
      </AccordionContent>
    </AccordionItem>
  );
}
