import React, {useState} from 'react'

const Time = () => {
    const [date, setDate] = useState(new Date());

    function changeDate() {
        setDate(new Date());
    }

    setInterval(changeDate, 1000);

    return (
        <div className=' text-[#181C14]  flex flex-col items-center gap-5'>
            <h1 className='font-bold text-8xl'>{date.toLocaleTimeString()}</h1>
            <h2 className='font-medium text-5xl'>{date.toLocaleDateString()}</h2>
        </div>
    );
}

export default Time;