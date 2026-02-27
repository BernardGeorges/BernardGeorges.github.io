import data from '../data.json' assert { type: 'json' };

export default function About(){
    return(
        <div>
            <div className="flex flex-col p-5 bg-notepad justify-center mb-5 leading-relaxed w-full text-gray-900">
                <p className='text-2xl'>
                    {data.About.Me.title}
                </p>
                <p className='text-lg pt-2'>
                    {data.About.Me.Content}
                </p>
            </div>
            <div className="flex flex-col p-5 bg-notepad justify-center mb-5 leading-relaxed w-full text-gray-900">
                <p className='text-2xl'>
                    {data.About.Hobbies.title}
                </p>
                <p className='text-lg pt-2'>
                    {data.About.Hobbies.Content}
                </p>
            </div>
        </div>
    );
}