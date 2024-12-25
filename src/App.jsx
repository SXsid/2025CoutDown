import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const miliInADay = 24*60*60*1000
  const calculateLeftTime =()=>{
    const Timeof2025 = new Date("December 31, 2025 23:59:59").getTime()
    const nowTime = new Date().getTime()
    const timeInMilli = Timeof2025 - nowTime

    const day = Math.floor(timeInMilli/(miliInADay))
    const hours = Math.floor((timeInMilli % miliInADay)/(1000*60*60))
    return {day,hours}
  }
  const [timeLeft, setTimeleft] = useState(calculateLeftTime())
  useEffect(()=>{
    const interval = setInterval(()=>{
      setTimeleft(calculateLeftTime())
    },1000)
    return ()=>clearInterval(interval)
  },[])

 return(
  <div className="flex flex-col items-center justify-center min-h-screen bg-black">
  <div className="flex flex-col items-center justify-center p-10">
    <h1 className="text-4xl font-bold text-white mb-6">
      Countdown to the End of <span>2025</span>
    </h1>
    <div className="bg-white flex justify-center gap-4 shadow-lg rounded-lg p-6 w-full min-w-[500px] text-center">
      <h2 className="text-3xl font-semibold text-gray-800">
        {timeLeft.day} Days
      </h2>
      <h2 className="text-3xl font-semibold text-gray-800">
        {timeLeft.hours} Hours
      </h2>
    </div>
  </div>
</div>
 )
}

export default App
