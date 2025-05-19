import './App.css';
import Profile from './Profile';
import Study from './Study';
import Hobby from './Hobby'
import Club from './Club';
import {motion} from "framer-motion";

function App() {
  return (
    <div /*className='text-white bg-slate-400'*/>
      <div className="mt-[80px] mx-[10%]">
        <motion.div   //タイトルモーション
          initial={{opacity: 0, x: -40}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 1.5}}
        >
          <h1 className="text-center text-4xl font-bold font-sans">～MyProfile～</h1>
        </motion.div>

        <Profile />  {/*自身のプロフィール*/}
        <Study />    {/*研究概要*/}
        <Hobby />
        <Club />
      </div>
    </div>
    
  );
}

export default App;
