import React from "react";

function Loader() {
  return (
    <>
      <style>{`
        @keyframes scale-up4 {
          20% {
            background-color: #ffff;
            transform: scaleY(1.5);
          }
          40% {
            transform: scaleY(1);
          }
        }
      `}</style>

      <div className="flex items-center justify-center w-full" style={{height: "100vh"}}>
        <span
          className="inline-block w-[3px] h-5 rounded-full bg-[#EA4335] animate-scaleUp"
          style={{ animation: "scale-up4 1s linear infinite" }}
        />
        <span
          className="inline-block w-[3px] h-[35px] mx-[5px] rounded-full bg-[#FBBC05]"
          style={{ animation: "scale-up4 1s linear infinite", animationDelay: "0.25s" }}
        />
        <span
          className="inline-block w-[3px] h-[35px] rounded-full bg-[#34A853]"
          style={{ animation: "scale-up4 1s linear infinite", animationDelay: "0.5s" }}
        />
        <span
          className="inline-block w-[3px] h-5 mx-[5px] rounded-full bg-[#4285F4]"
          style={{ animation: "scale-up4 1s linear infinite", animationDelay: "0.25s" }}
        />
        <p className="ml-2 text-black">Carregando...</p>
      </div>
    </>
  );
}

export default Loader
