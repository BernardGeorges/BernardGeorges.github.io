"use client"
import MailIcon  from "@/components/Mailicon";

export function Footer() {
    return (
        <div className="w-full">
            <hr className="my-4 border-t border-gray-300" />
            <div className="flex items-center mb-5">
                <p className="pr-2">
                    Contact Me:
                </p>
                <a href="https://www.linkedin.com/in/bernard-georges-762325263/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src="/linkedin-logo.svg" className="dark:invert w-5 h-auto" alt="LinkedIn Link" />
                </a>
                <MailIcon className="w-5 h-auto ml-2 text-white-900"/>
                <div className="ml-1">
                    <a href="resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/curriculum-vitae.png" className="w-5 h-auto dark:invert" alt="Open resume" />
                    </a>
                </div>
            </div>
        </div>
    )
}