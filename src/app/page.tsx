import Image from "next/image";
import { PostIt } from "@/components/PostIt";
import data from './data.json' assert { type: 'json' };
import { MailIcon } from "lucide-react";



const colors =  ["blue", "pink", "green"]

export default function Home() {
  var previous_color = -1;
  var projects = (
  <div className="flex justify-evenly mb-15">
    {data.Projects.map((project) => {
      var color = Math.floor(Math.random() * 3);
      while (color === previous_color) {
        color = Math.floor(Math.random() * 3);
      }
      previous_color = color;
      return (
        <PostIt
          key={project.title}
          title={project.title}
          content={project.content}
          titleColor={`bg-sticknote_${colors[color]}_title`}
          contentColor={`bg-sticknote_${colors[color]}_body`}
          context={project.context}
          githubLink={project.github}
        />
      );
    })}
  </div>
);
  
  return (
    <div className="w-full">
    <div className="flex flex-col p-5 bg-notepad justify-center mb-3 text-2xl leading-relaxed">
      <div>
          {data.Intro.content.map((item) => {
            return(<p className="text-gray-900 mt-1">{item}</p>);
          })}
        <div className="flex">
          <p className="text-gray-900">
            <a
              href="https://www.linkedin.com/in/bernard-georges-762325263/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:underline"
              >
              <img
                src="/linkedin-logo.svg"
                className="ml-1 w-5 h-auto"
                alt="LinkedIn"
              />
            </a>
            <a
              href="mailto:bernard.georges2002@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:underline"
            >
              <MailIcon className="w-5 h-auto ml-1" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:underline"
              >
              <img
                src="/curriculum-vitae.png"
                className="w-5 ml-1 h-auto"
                alt="Open resume"
              />
            </a>{" "}
          </p>
        </div>

      </div>
    </div>
    <div className="flex flex-col p-5 bg-notepad justify-center mb-5 text-2xl">
      <p className="text-gray-900 ">
        <strong> {data.Currently.title}</strong>
      </p>
      <ul className="list-disc list-inside text-gray-900  mt-2">
        {data.Currently.list.map((item, idx) => {
          return (<li key={"Currently"+idx}> {item} </li>);
        })}
      </ul>
    </div>
    <div className="flex justify-start my-7">
      <p className="text-white-900 text-3xl  italic pl-3 pr-2">Projects</p>
      <a href="https://github.com/BernardGeorges" target="_blank">
        <img src="/github-logo.svg" className="w-7 h-7 dark:invert" alt="Personal Github" />
      </a>
    </div>
    {projects} 
    </div>
  );
}
