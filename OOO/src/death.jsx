import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Death() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-2xl text-center">
        <p>
          I don't remember much about the night. But that <i>face</i> is engraved in my mind. I can hear the chanting like it's coming from this room. "three. three. three." It happened exactly 3 years, 3 months, 3 days and 3 hours ago. Bells toll around this time, yet it's so quiet. I only hear the wind howl. What is the meaning of this? That night. Has it only happened to me or could there be more victims to this... RITUAL? I'm writing this to preserve a piece of myself that once was, since from this point on It's not me who will traverse with this vessel. Truth be told, I'm too afraid to do anything myself.  
        </p>
        <br />
        {//<p className='otherFont'>"I'll lend you my <Link to='/'>strength.</Link>"</p>
        }
      </div>
    </div>
  )
}
export default Death