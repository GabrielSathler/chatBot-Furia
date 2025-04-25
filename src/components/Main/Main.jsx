import { useContext } from "react";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";
import "./style.css";
import { Context } from "../../Context/Context";
import {
  IoPersonCircleSharp,
  IoSendOutline,
  IoBulbOutline,
  IoChatbubbleEllipsesOutline,
  IoCodeSlashOutline,
  IoCompassOutline,
} from "react-icons/io5";
import CircleLoader from "react-spinners/CircleLoader";
import Reveal from "../Reveal";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="main flex-1 bg-[#0F0F0F] h-screen pb-[15vh] relative overflow-x-hidden overflow-y-hidden"
    >
      <div className="nav flex items-center gap-4 text-2xl p-5 text-white">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png"
          alt="Robot"
          width="35"
          height="35"
        />
        <p className="font-bold title">ChatBOT Furioso</p>
      </div>
      <div className="main-container max-w-[900px] lg:mt-10 m-auto">
        {!showResult ? (
          <>
            <div className="greet mx-[50px] my-24 md:my-0 text-[56px] text-[#B0B0B0] font-[500] p-5">
              <p className="span">
                <span className="text-3xl md:text-4xl">
                  Olá, Eu&apos;sou o chat Furioso!
                </span>
              </p>
              <p className="text-3xl md:text-4xl">Me pergunte o que quer saber sobre a FURIA E-Sports?</p>
            </div>
            <div className="mb-16 md:mb-0 cards">
              <Reveal>
                <div
                  onClick={() =>
                    setInput(
                      "liste as participações da Furia E-Sports no cenario de Counter-Strike."
                    )
                  }
                  className="card hidden md:block h-[200px] p-4 bg-[#1E1E1E] rounded-xl relative cursor-pointer hover:bg-[#2A2A2A]"
                >
                  <p className="text-[#B0B0B0] text-[17px]">
                    Liste as participações da FURIA E-Sports no cenário de Counter-Strike.
                  </p>
                  <IoCompassOutline className="absolute p-1 text-4xl bottom-3 right-3 text-white" />
                </div>
              </Reveal>
              <Reveal>
                <div
                  onClick={() =>
                    setInput(
                      "Atualmente qual a lineup da Furia E-Sports de Counter-Strike?"
                    )
                  }
                  className="card hidden md:block h-[200px] p-4 bg-[#1E1E1E] rounded-xl relative cursor-pointer hover:bg-[#2A2A2A]"
                >
                  <p className="text-[#B0B0B0] text-[17px]">
                    Atualmente qual a lineup da FURIA E-Sports de Counter-Strike?
                  </p>
                  <IoBulbOutline className="absolute p-1 text-4xl bottom-3 right-3 text-white" />
                </div>
              </Reveal>
              <Reveal>
                <div
                  onClick={() =>
                    setInput(
                      "Quais as estatísticas dos últimos 5 jogos da FURIA E-Sports de Counter-Strike?"
                    )
                  }
                  className="card hidden md:block h-[200px] p-4 bg-[#1E1E1E] rounded-xl relative cursor-pointer hover:bg-[#2A2A2A]"
                >
                  <p className="text-[#B0B0B0] text-[17px]">
                    Quais as estatísticas dos últimos 5 jogos da FURIA E-Sports de Counter-Strike?
                  </p>
                  <IoChatbubbleEllipsesOutline className="absolute p-1 text-4xl bottom-3 right-3 text-white" />
                </div>
              </Reveal>
              <Reveal>
                <div
                  onClick={() =>
                    setInput(
                      "Quais os próximos jogos da FURIA E-Sports no Counter-Strike?"
                    )
                  }
                  className="card hidden md:block h-[200px] p-4 bg-[#1E1E1E] rounded-xl relative cursor-pointer hover:bg-[#2A2A2A]"
                >
                  <p className="text-[#B0B0B0] text-[17px]">
                    Quais os próximos jogos da FURIA E-Sports no Counter-Strike?
                  </p>
                  <IoCodeSlashOutline className="absolute p-1 text-4xl bottom-3 right-3 text-white" />
                </div>
              </Reveal>
            </div>
          </>
        ) : (
          <div className="px-4 mx-2 max-h-[60vh] rounded-lg max-w-[850px] pb-[5vh] overflow-y-scroll shadow-sm result bg-[#1E1E1E] text-white">
            <div className="flex items-center gap-5 p-2 my-5 rounded-lg bg-[#2A2A2A] result-title">
              <IoPersonCircleSharp className="text-3xl text-[#BB00FF]" />
              <p>{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-5 p-2 rounded-lg result-data">
              <img className="w-10" src={assets.furia_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  className="text-[17px] font-light leading-7"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom absolute bottom-0 w-full max-w-[900px] min-w-[300px] py-5 px-2 m-auto mt-4">
          <div className="search-box flex items-center justify-between gap-5 bg-[#1E1E1E] px-3 py-2 rounded-[50px]">
            <input
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSent(input);
                }
              }}
              value={input}
              type="text"
              placeholder="Pergunte aqui!"
              className="flex-0 w-[150px] md:w-full md:flex-1 bg-transparent border-none outline-none p-2 text-white md:text-[18px] text-sm"
            />
            <div className="flex items-center">
              {input ? (
                loading ? (
                  <CircleLoader size={25} color="#BB00FF" />
                ) : (
                  <IoSendOutline
                    className="w-6 cursor-pointer fill-[#BB00FF] hover:scale-105"
                    onClick={() => onSent(input)}
                  />
                )
              ) : null}
            </div>
          </div>
          <p className="bottom-info text-[13px] my-3 text-center font-[300] text-[#B0B0B0]">
            Chat Bot da FURIA pode passar informações erradas, incluindo informação sobre pessoas, então confirme suas respostas para ter certeza.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
