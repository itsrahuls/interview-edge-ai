
import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 text-transparent bg-clip-text font-extrabold md:text-8xl">
              InterviewEdgeAl
            </span>
            <span className="text-blue-800 font-extrabold">
              - Learn, practice, and perfect your interview skills with Al
            </span>
          </h2>

          <p className="mt-4 text-black text-lg">
            Prepare with confidence using smart Al support and interactive feedback that identifies your strengths, improves your weaknesses, and helps you stand out.
          </p>
        </div>

        <div className="flex w-full items-center justify-evenly md:px-12 md:py-16 md:items-center md:justify-end gap-12">
          <p className="text-3xl font-semibold text-gray-900 text-center">
            1.5k+
            <span className="block text-xl text-muted-foreground font-normal">
              Offers Recieved
            </span>
          </p>
          <p className="text-3xl font-semibold text-gray-900 text-center">
            1.8k+
            <span className="block text-xl text-muted-foreground font-normal">
              Interview Aced
            </span>
          </p>
        </div>

        {/* image section */}
        <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative">
          <img
            src="https://i.postimg.cc/mgjr1nM0/businessman-working-futuristic-office-7.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </Container>

      {/* marquee section */}
      <div className=" w-full my-12">
        <Marquee pauseOnHover>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

      <Container className="py-8 space-y-8">
        <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
          Personalized learning. Proven results. Powered by AI.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="col-span-1 md:col-span-3">
            <img
              src="https://i.postimg.cc/LskVrLqL/freepik-talk-69325.jpg"
              alt=""
              className="w-full max-h-96 rounded-md object-cover"
            />
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
            <p className="text-center text-black">
              Revolutionize your interview preparation through real time Al insights. Smarter feedback. Sharper performance. Stronger results.
            </p>

            <Link to={"/generate"} className="w-full">
              <Button className="w-3/4 bg-blue-800 text-white hover:bg-blue-900 hover:scale-105 transition-transform">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
