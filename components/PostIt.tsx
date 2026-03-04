type PostItProps = {
    title: string;
    content: string[];
    titleColor: string;
    contentColor: string;
    githubLink?: string;
    context?: string;
    divide?: boolean;
};

export function PostIt({ title, content, titleColor, contentColor, context, githubLink, divide = true}: PostItProps) {
    var body = null;// split the string into an array
    const github = githubLink ? (
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="ml-2">
            <img src="/github-logo.svg" className="text-black inline w-5 h-auto" alt="GitHub Link" />
        </a>
    ) : null;
    if (divide){
        const midIndex = Math.ceil(content.length / 2); // find the middle
        const firstHalf = content.slice(0, midIndex); // first part for list-inside
        const secondHalf = content.slice(midIndex); 
        body = (
            <div className={`flex justify-evenly pt-4 ${contentColor} h-full flex-col`}>
                <p className="text-center mb-4 italic">{context}</p>
                <div className="flex justify-evenly h-full w-full">
                    <div className="mr-4 w-fit justify-start">
                        <ul className=" list-disc list-inside">
                          {firstHalf.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="ml-4 w-fit justify-end">
                        <ul className=" list-disc list-outside">
                          {secondHalf.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else
     {

         body = (
                <div className={`flex align-center justify-start pt-4 ${contentColor} h-full flex-col`}>
                    <p className="text-center mb-4 italic">{context}</p>
                    <div className="w-full h-full flex justify-evenly">
                        <ul className="list-disc list-inside">
                          {content.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>    
                );
     }
    return (
        <div className="basis-2/7 text-gray-900">
            <div className={`flex p-2 text-center justify-center font-bold ${titleColor} `}>
                <h2>{title}</h2> 
                {github}
            </div>
            {body}
        </div>
    );
}
