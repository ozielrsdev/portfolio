import { RiJavascriptFill } from 'react-icons/ri'
import profileImg from '../../assets/profileImg.jpg'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiMysql, SiPostman, SiSequelize } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'
import { LiaFigma } from 'react-icons/lia'
import { FaGitAlt } from 'react-icons/fa6'
// import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import laptopAnimation from '../../components/animations/LaptopAnimation.json'
import Lottie from 'lottie-react'
import { Button } from '../../components/button'
import { CiLinkedin } from 'react-icons/ci'
import { FiGithub } from 'react-icons/fi'
// import { TbDownload } from 'react-icons/tb'
// import resume from '../../../public/resume-oziel.pdf'

export const Home = () => {
  const containerVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -window.innerWidth,
      transition: { ease: 'easeInOut' },
    },
  }

  return (
    <>
      <section className="overflow-x-hidden">
        <motion.div
          className="w-full h-screen flex flex-col justify-center items-center
          md:grid md:grid-cols-2"
        >
          <div className="flex flex-col h-full justify-center items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className=" flex justify-center shadow-lg
               shadow-fuchsia-400 p-3 items-center rounded-full
               bg-[radial-gradient(rgba(0,0,0,0.15)_60%,_transparent_0),
               _radial-gradient(#131926,_68%,_transparent_0),_linear-gradient
               (to_top_right,_#67e8f9_0%,_#6ee7b7_1%)]"
            >
              <img
                src={profileImg}
                alt="Programming"
                className="md:w-96 md:h-96 h-72 w-72 rounded-full object-cover"
              />
            </motion.div>
            <div
              className="w-full md:w-[50%] grid grid-cols-2
             justify-items-center items-center"
            >
              <a
                href="https://www.linkedin.com/in/devozielsousa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
              >
                <Button variant="primary">
                  <CiLinkedin />
                  LinkedIn
                </Button>
              </a>
              <a
                href="https://github.com/ozielrsdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
              >
                <Button variant="primary">
                  <FiGithub />
                  GitHub
                </Button>
              </a>
            </div>
          </div>
          <div
            className="w-full
            gap-5 h-full flex flex-col items-center
            justify-center"
          >
            <svg className='absolute top-0' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path fill='oklch(74% 0.238 322.16)' d="M49.5,-62.1C61.4,-59.5,66.4,-41.4,69.5,-24.3C72.6,-7.3,73.8,8.5,67.1,19.5C60.3,30.4,45.5,36.4,33,45.8C20.5,55.3,10.3,68.3,0.4,67.7C-9.4,67.1,-18.7,52.9,-30.5,43.1C-42.2,33.4,-56.2,28.1,-62.6,18.1C-69,8,-67.8,-6.8,-60.5,-16.7C-53.2,-26.6,-39.9,-31.6,-28.8,-34.4C-17.7,-37.2,-8.9,-37.8,5,-44.7C18.8,-51.6,37.7,-64.6,49.5,-62.1Z" transform="translate(70 30)" />
            </svg>
          </div>
        </motion.div>

        <hr className="opacity-10 mt-11" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="min-h-screen justify-center flex w-full md:flex-row
           flex-col"
        >
          <motion.div className="flex items-center justify-center md:w-1/2">
            <Lottie
              className="w-[95%]"
              animationData={laptopAnimation}
              loop
              autoPlay
              rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
            />
          </motion.div>
          <div className="flex md:w-1/2 bg flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-4xl my-10 text-emerald-300"
            >
              TECNOLOGIAS & FERRAMENTAS
            </motion.h1>

            <div
              className="grid grid-cols-3 h-full items-center
              justify-items-center"
            >
              <h1
                className="flex flex-col items-center hover:text-emerald-300
               hover:scale-110 transition-all duration-100"
              >
                <RiJavascriptFill size="35%" />
                <span>JavaScript</span>
              </h1>
              <h1
                className="flex flex-col items-center hover:text-emerald-300
               hover:scale-110 transition-all duration-100"
              >
                <FaReact size="35%" />
                <span>React</span>
              </h1>
              <h1
                className="flex flex-col items-center hover:text-emerald-300
               hover:scale-110 transition-all duration-100"
              >
                <FaNodeJs size="35%" />
                <span>NodeJS</span>
              </h1>
              <h1
                className="flex flex-col items-center hover:text-emerald-300
               hover:scale-110 transition-all duration-100"
              >
                <SiMysql size="35%" />
                <span>MySQL</span>
              </h1>
              <h1
                className="flex flex-col items-center hover:text-emerald-300
               hover:scale-110 transition-all duration-100"
              >
                <SiPostman size="35%" />
                <span>Postman</span>
              </h1>
              <h1
                className="flex flex-col items-center hover:text-emerald-300
               hover:scale-110 transition-all duration-100"
              >
                <SiSequelize size="35%" />
                <span>Sequelize</span>
              </h1>
              <h1
                className="flex flex-col items-center hover:text-emerald-300
               hover:scale-110 transition-all duration-100"
              >
                <BiLogoPostgresql size="35%" />
                <span>Postgresql</span>
              </h1>
              <h1
                className="flex flex-col items-center hover:text-emerald-300
               hover:scale-110 transition-all duration-100"
              >
                <LiaFigma size="35%" />
                <span>Figma</span>
              </h1>
              <h1
                className="flex flex-col items-center hover:text-emerald-300
               hover:scale-110 transition-all duration-100"
              >
                <FaGitAlt size="35%" />
                <span>Git</span>
              </h1>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
