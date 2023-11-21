
import { useState } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState()

  const getAdvice = async() => {
    const req = await fetch("https://api.adviceslip.com/advice")
    console.log(req);
    const res = await req.json()
    console.log(res);
    setAdvice(res.slip)
  }

  console.log("advice",advice);

  return (
    <div className="flex flex-col h-screen justify-center bg-[#202733] text-white text-center px-5 lg:px-auto">
      <div className='bg-[#313A48] lg:h-fit lg:w-1/3 rounded-md shadow-2xl mx-auto p-7 relative'>
        <p className='text-[#53FFAA] text-[13px] font-extrabold tracking-[4.086px] '>{`ADVICE #${advice?.id?advice.id:"1"}`}</p>
        <h1 className='text-[#CEE3E9] text-[28px] font-extrabold mt-3 mb-5'>{advice?.advice?advice.advice:"“It is easy to sit up and take notice, what's difficult is getting up and taking action.”"}</h1>
        <div className='mb-7'>
          <img src='/images/pattern-divider-desktop.svg' alt='pattern-divider-desktop' className=' w-full'/>
        </div>
        <button className='absolute -bottom-[22px]   left-1/2 transform -translate-x-1/2 ' onClick={()=>getAdvice()}><img src='/images/icon-dice.svg' alt='icon-dice' className='w-12'/></button>
      </div>
     
    </div>
  );
}

export default App;
