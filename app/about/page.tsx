import data from '../data.json' assert { type: 'json' };

export default function About(){
    return(
        <div>
            <div className="flex flex-col p-5 bg-notepad justify-center mb-5 leading-relaxed w-full text-gray-900">
                <p className='text-2xl font-bold'>
                    {data.About.Me.title}
                </p>
                {data.About.Me.content.map((text, idx) => (<p key={"about"+idx} className='text-lg pt-2'>{text}</p>))}
            </div>
            <div className="flex flex-col p-5 bg-notepad justify-center mb-5 leading-relaxed w-full text-gray-900">
                <p className='text-2xl font-bold'>
                    {data.About.Hobbies.title}
                </p>
                {data.About.Hobbies.content.map((text, idx) => (<p key={"hobbies"+idx} className='text-lg pt-2'>{text}</p>))}
            </div>
        </div>
    );
}