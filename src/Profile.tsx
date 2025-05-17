import React from 'react';
import {motion} from "framer-motion";

const Profile = () => {

  const containerVariants = {  //親要素のアニメーション
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: .4,  //開始遅延
        staggerChildren: .1,  //子要素の遅延
      },
    },
  };

  const childVariants = {  //子要素のアニメーション
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, x: 0, 
      transition: {
        duration: 1.5,    //ゆっくり表示
      }
    },
  };

  return (
    <div>
      <motion.div   //アニメーション
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-slate-50 mx-auto mt-8 text-center "
      >
        <motion.div variants={childVariants}>
          <p className="flex mb-2">
            <span className="label">氏名：</span>
            <span className="value">政久泰輝</span>
          </p>
        </motion.div>
        <motion.div variants={childVariants}>
          <p className="flex">
            <span className="label">所属大学：</span>
            <span className="value">広島大学大学院先進理工学研究科情報科学プログラム</span>
          </p>
        </motion.div>
        <motion.div variants={childVariants}>
          <p className="flex">
            <span className="label">所属研究室：</span>
            <span className="value">学習工学研究室</span>
          </p>
        </motion.div>
        <motion.div variants={childVariants}>
          <p className="flex">
            <span className="label">指導教員：</span>
            <span className="value">林 雄介 教授</span>
          </p>
        </motion.div>
         
      </motion.div>
    
    </div>
  )
}

export default Profile;