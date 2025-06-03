import './App.css';
import Profile from './Profile';
import Study from './Study';
import Hobby from './Hobby'
import Club from './Club';
import {motion} from "framer-motion";
import SoundLearning from './SoundLearning';

function App() {
  return (
    <div>
      <div className="relative min-h-screen bg-white text-black overflow-hidden z-0">
        <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,_#888_1.5px,_transparent_1px),_linear-gradient(to_bottom,_#888_1.5px,_transparent_1px)] opacity-10 z-[-1] pointer-events-none" ></div>

        <div className="mt-[60px] mx-[15%] relative z-10">

          
          <motion.div   //タイトルモーション
            initial={{opacity: 0, x: -40}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1.5}}
          >
            <h1 className="text-center text-4xl font-bold font-sans mb-10">～MyProfile～</h1>
          </motion.div>
          
          <Profile />  
          <Study />    
          <Hobby />
          <Club />
          <SoundLearning />
          
        </div>
      </div>
    </div>
    
  );
}

export default App;
