"use client";
import Footer from "@/components/footer";
import StackAbout from "@/components/stack-about-components";

export default function AboutClient() {
  return (
    <div className="flex flex-col h-screen w-full bg-[#121212] overflow-hidden">
      <main className="flex-1 overflow-y-auto w-full">
        <section className="w-full bg-[#121212] p-12 md:p-10 lg:p-22">
          {/* About Section */}
          <section id="About-Section" className="w-full pt-16 md:pt-22 lg:pt-0">
            <h1 className="text-6xl text-white font-bold mb-4 font-satoshi">
              About Me
            </h1>
            <div className="flex gap-2 my-8">
              <a
                href="/service"
                className="text-black px-4 py-2.5 rounded-md bg-[#F6F6F6] font-semibold font-sans text-sm border 
                        hover:bg-black hover:text-white transition duration-400 ease-in-out"
              >
                What I Do
              </a>
              <a
                href="/contact"
                className="relative text-white cursor-pointer flex items-center gap-2 font-sans group"
              ></a>
              <a
                href=""
                className="text-white px-4 py-2.5 rounded-md bg-[#1A1A1A] font-semibold font-sans text-sm border border-gray-800 
                        hover:bg-[#121212]  transition duration-400 ease-in-out"
              >
                Get In Touch
              </a>
              <a
                href="#Featured-Project"
                className="relative text-white cursor-pointer flex items-center gap-2 font-sans group"
              ></a>
            </div>

            <div className="w-full border-t border-gray-700 my-8"></div>

            <div className="text-gray-400 font-sans text-[1.095rem] text-justify my-8">
                <h1 className="text-3xl text-white font-medium">Hello, I'm Azerus</h1>
              <p className="my-4">
                a student at SMKN 8 Malang, currently
                pursuing my education in the Computer Science and Software
                Engineering (RPL). I have a strong passion for web and mobile
                application development. During my time at SMKN 8, I have gained
                a solid foundation in programming and software development
              </p>
              <p className="my-4">
                I am highly enthusiastic about continuing to develop my skills
                in the field of technology, particularly in web and mobile
                application development. I believe that technology can be a
                powerful tool for solving problems and improving the quality of
                life. Therefore, I strive to stay updated with the latest
                developments in the tech world and utilize my knowledge to
                create innovative solutions.
              </p>
              <p className="my-4">
                I enjoy collaborating with others to build engaging and
                beneficial projects. If you have an idea or a project you'd like
                to develop, let's work together to bring it to life!
              </p>
            </div>
          </section>
          <div className="w-full border-t border-gray-700 mt-12"></div>
          <section>
            <StackAbout />
          </section>
        </section>
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
