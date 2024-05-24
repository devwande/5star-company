import leftSection from "./assets/images/left-section.png";
import chevronLeft from "./assets/images/chevron-left.png";
import iconUser from "./assets/images/icon-user.png";
import email from "./assets/images/email.png";
import password from "./assets/images/password.png";
import next from "./assets/images/next.png";
import needHelp from "./assets/images/need-help.png";

function App() {
  return (
    <div className="flex h-screen">
      <img src={leftSection} alt="leftImage" className="h-screen w-96" />

      <div className="flex flex-col justify-between w-full">
        <div>
          <div className="flex justify-between items-start pt-4 pl-4 pr-4">
            <div className="flex items-center">
              <img src={chevronLeft} alt="return sign" className="mr-2" />
              <p className="font-zenkaku font-normal">Return Home</p>
            </div>
            <div>
              <p className="font-zenkaku font-400 mr-6">
                Already a member?{" "}
                <span className="font-bold underline underline-offset-2">
                  LOG IN NOW
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center mt-10">
            <p className="font-black font-zenkaku text-3xl">
              BECOME AN EXCLUSIVE MEMBER
            </p>
            <p className="font-zenkaku text-base text-grey mt-2">
              SIGN UP AND JOIN THE PARTNERSHIP
            </p>

            <form className="flex flex-col space-y-5 pt-5 w-[420px]">
              <div className="relative flex items-center">
                <img src={iconUser} alt="icon-user" className="absolute ml-3" />
                <input
                  type="text"
                  id="username"
                  placeholder="Johnson Doe"
                  className="bg-white border border-lightgrey text-grey font-zenkaku font-normal px-4 h-14 pl-10 w-full"
                />
              </div>

              <div className="relative flex items-center">
                <img src={email} alt="email" className="absolute ml-3 " />
                <input
                  type="email"
                  id="email"
                  placeholder="example@email.com"
                  className="bg-white border border-lightgrey text-grey font-zenkaku font-normal px-4 h-14 pl-10 w-full"
                />
              </div>

              <div className="relative flex items-center">
                <img src={password} alt="password" className="absolute ml-3" />
                <input
                  type="password"
                  id="password"
                  placeholder="*********"
                  className="bg-white border border-lightgrey text-grey font-zenkaku font-normal px-4 h-14 pl-10 w-full"
                />
              </div>

              <button
                type="button"
                className="bg-darkblue text-white font-zenkaku flex items-center p-4 w-full"
              >
                <p className="">Become a Member </p>
                {/* use react icons */}
                <img src={next} alt="next" className="ml-48 w-10" />
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-between items-start p-4">
          <p className="font-zenkaku font-400 text-lightash">
            Copyright 2021 - 2022 5Starcompany. All rights Reserved
          </p>
          <button
            type="button"
            className="flex items-center font-zenkaku font-normal text-grey"
          >
            <img src={needHelp} alt="need help icon" className="mr-2" />
            Need Help?
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
