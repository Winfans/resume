import Image from "next/image";
import {
  WrenchScrewdriverIcon,
  ShoppingBagIcon,
} from "@heroicons/react/20/solid";
import data from "../../resume.json";

export default function Home() {
  const { workExperience } = data;
  return (
    <>
      <header className="h-[60px] px-2 sm:px-8 flex items-center shadow-sm backdrop-blur">
        <div className="text-xl sm:text-2xl">
          <strong>杨炜帆</strong>
          的个人主页
        </div>
        {/* <nav>
          <ul>
            <li></li>
          </ul>
        </nav> */}
      </header>
      <main>
        <section className="flex flex-col items-center p-6 text-center  bg-zinc-100">
          <div className="flex items-center">
            <WrenchScrewdriverIcon className="size-4 sm:size-6" />
            <span className="text-xl sm:text-2xl ml-2">专业技能</span>
          </div>
          <div className="mt-6 sm:text-base text-sm">
            作为一名经验丰富的前端工程师，我曾经使用过各种不同的技术，构建交付优秀的项目成果。
          </div>
          <div className="mt-[50px] text-sm sm:text-base">
            <div className="sm:text-xl text-base">语言 & 运行环境</div>
            <div className="flex mt-4 max-w-[500px] flex-wrap items-center ">
              <div className="icon-container">
                <span className="icon-[devicon--html5] mr-1"></span>
                HTML
              </div>
              <div className="icon-container">
                <span className="icon-[devicon--css3] mr-1"></span>
                CSS
              </div>
              <div className="icon-container">
                <span className="icon-[devicon--javascript] mr-1"></span>
                JavaScript
              </div>
              <div className="icon-container">
                <span className="icon-[devicon--typescript] mr-1"></span>
                TypeScript
              </div>
              <div className="icon-container">
                <span className="icon-[devicon--nodejs] mr-1"></span>
                Node.js
              </div>
            </div>
          </div>
          <div className="mt-8  text-sm sm:text-base">
            <div className="sm:text-xl text-base">库 & 框架</div>
            <div className="flex mt-4 max-w-[500px] flex-wrap">
              <div className="icon-container">
                <span className="icon-[devicon--react] mr-1"></span>
                React
              </div>
              <div className="icon-container">
                <span className="icon-[devicon--redux] mr-1"></span>
                Redux
              </div>
              <div className="icon-container">
                <span className="icon-[devicon--nextjs] mr-1"></span>
                Next.js
              </div>
              <div className="icon-container">
                <span className="icon-[devicon--tailwindcss] mr-1"></span>
                Tailwind CSS
              </div>
              <div className="icon-container">
                <span className="icon-[devicon-plain--axios] mr-1"></span>
                axios
              </div>
              <div className="icon-container">
                <span className="icon-[devicon--vuejs] mr-1"></span>
                Vue.js
              </div>
            </div>
          </div>
          <div className="mt-8  text-sm sm:text-base">
            <div className="sm:text-xl text-base">工具</div>
            <div className="flex mt-4 max-w-[500px] flex-wrap">
              <div className="icon-container">
                <span className="icon-[devicon--vitejs] mr-1"></span>
                Vite
              </div>
              <div className="icon-container">
                <span className="icon-[devicon--webpack] mr-1"></span>
                webpack
              </div>
              <div className="icon-container">
                <span className="icon-[devicon--rollup] mr-1"></span>
                Rollup
              </div>
              <div className="icon-container">
                <span className="icon-[skill-icons--gulp]  mr-1"></span>
                gulp.js
              </div>
              <div className="icon-container">
                <span className="icon-[devicon--pnpm] mr-1"></span>
                pnpm
              </div>
              <div className="icon-container">
                <span className="icon-[devicon--npm-wordmark] mr-1"></span>
                npm
              </div>
              <div className="icon-container">
                <span className="icon-[devicon--yarn] mr-1"></span>
                Yarn
              </div>
              <div className="icon-container">
                {/* <span className="icon-[devicon--jest] mr-1"></span> */}
                <span className="icon-[skill-icons--jest] mr-1"></span>
                Jest
              </div>
              <div className="icon-container">
                <span className="icon-[devicon--eslint] mr-1"></span>
                ESLint
              </div>
              <div className="icon-container">
                <span className="icon-[devicon--prettier] mr-1"></span>
                Prettier
              </div>
              <div className="icon-container">
                <span className="icon-[devicon--git] mr-1"></span>
                Git
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center p-6">
          <div className="flex items-center">
            <ShoppingBagIcon className="size-5 sm:size-6" />
            <span className="text-xl sm:text-2xl ml-2">工作经历</span>
          </div>
          <div className="mt-6 sm:text-base text-sm max-w-[650px]">
            {workExperience.desc}
          </div>

          <div className="mt-10">
            {workExperience.items.map((item, index) => {
              return (
                <div key={index} className="max-w-[650px] relative pl-4 pb-6">
                  <div className="w-[2px] sm:w-1 bg-zinc-200 h-full absolute left-0  top-2"></div>
                  <div className="absolute -left-[3px] sm:-left-1 top-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 absolute bg-zinc-500 rounded-full "></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 absolute bg-zinc-400 rounded-full opacity-75 animate-ping"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-base sm:text-xl">
                      <strong>{item.jobName}</strong>
                    </div>
                    <div className="text-xs sm:text-sm">{item.time}</div>
                  </div>
                  <div className="mt-2 sm:mt-5 flex items-center text-sm sm:text-base">
                    <Image
                      src={item.companyLogo}
                      width={20}
                      height={20}
                      className="sm:w-[20px] sm:h-[20px] w-[18px] h-[18px] rounded-full mr-1"
                      alt=""
                    />
                    {item.companyName}
                    {!!item.tag && (
                      <div className="text-xs bg-zinc-200 py-[2px] px-2 rounded-md ml-1">
                        {item.tag}
                      </div>
                    )}
                  </div>
                  <div className="mt-2 text-sm text-zinc-500 break-all">
                    {item.companyDesc}
                  </div>
                  <div className="mt-5">概览</div>
                  <div className="mt-2">
                    <ul className="list-disc pl-4 text-zinc-500 leading-normal text-sm break-all">
                      {item.summaries.map((summary, index) => {
                        return <li key={index}>{summary}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="mt-5">项目</div>
                  {item.projects.map((project, index) => {
                    return (
                      <div
                        key={index}
                        className="border mt-2  rounded-md p-4 flex items-center sm:items-start flex-col sm:flex-row "
                      >
                        <div className="flex flex-none w-[100px] flex-col mr-5  items-center">
                          <div className="w-[70px] h-[70px] rounded-full bg-zinc-100 flex justify-center items-center">
                            <Image
                              src={project.logo}
                              width={40}
                              height={40}
                              className="w-[40px] h-[40px] rounded-full"
                              alt=""
                            />
                          </div>
                          <div className="mt-2">
                            <strong>{project.name}</strong>
                          </div>
                        </div>
                        <div className="text-sm  sm:text-base">
                          <div className="text-sm break-all mt-2 sm:mt-0">
                            {project.desc}
                          </div>
                          <div className="mt-2 font-medium">相关技术</div>
                          <div className="flex mt-1 sm:mt-2">
                            <div>Html</div>
                            <span className=" "></span>
                            <div>CSS</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
            {data.schoolExperiences.map((item, index) => {
              return (
                <div key={index} className="max-w-[650px] pl-4 relative">
                  <div className="absolute -left-[3px] sm:-left-1 top-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 absolute bg-zinc-500 rounded-full "></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 absolute bg-zinc-400 rounded-full opacity-75 animate-ping"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-base sm:text-xl">
                      <strong>{item.degree}</strong>
                    </div>
                    <div className="text-xs sm:text-sm">{item.time}</div>
                  </div>
                  <div className="mt-2 sm:mt-5 flex items-center text-sm sm:text-base">
                    <Image
                      src={item.schoolLogo}
                      width={20}
                      height={20}
                      className="sm:w-[20px] sm:h-[20px] w-[18px] h-[18px] mr-1 rounded-full"
                      alt=""
                    />
                    {item.school}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <footer className="bg-zinc-100 text-xs h-[100px] flex flex-col sm:flex-row items-center justify-center">
        <div>
          由<strong>杨炜帆</strong>设计和制作
        </div>
        <div className=" hidden sm:block w-[1px] h-[15px] bg-zinc-300 mx-4"></div>
        <div className="order-2 mt-2 sm:mt-0 sm:order-1">
          版权所有 © 2024 - 保留所有权利
        </div>
        <div className="hidden  sm:block w-[1px] h-[15px] bg-zinc-300 mx-4"></div>
        <div className="order-1 sm:order-2 mt-2 sm:mt-0">
          最近更新： 2024-05-02
        </div>
      </footer>
    </>
  );
}
