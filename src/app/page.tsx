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
      <header className="h-[60px] px-8 flex items-center shadow-sm backdrop-blur">
        <div className="text-2xl">
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
        <section className="flex flex-col items-center p-6 text-center bg-zinc-100">
          <div className="flex items-center">
            <WrenchScrewdriverIcon className="size-6" />
            <span className="text-2xl ml-2">专业技能</span>
          </div>
          <div className="mt-6">
            作为一名经验丰富的前端工程师，我曾经使用过各种不同的技术，构建交付优秀的项目成果。
          </div>
          <div className="mt-6">
            <div className="text-xl">语言 & 运行环境</div>
            <div className="flex mt-2 w-[400px] border flex-wrap">
              <div>HTML</div>
              <div>CSS</div>
              <div>JavaScript</div>
              <div>TypeScript</div>
              <div>Node.js</div>
            </div>
          </div>
          <div className="mt-3">
            <div>库 & 框架</div>
            <div className="flex mt-2 w-[400px] border flex-wrap">
              <div>React</div>
              <div>Redux</div>
              <div>Tailwind CSS</div>
              <div>axios</div>
              <div>Next.js</div>
              <div>Vue.js</div>
            </div>
          </div>
          <div className="mt-3">
            <div>工具</div>
            <div className="flex mt-2 w-[400px] border flex-wrap">
              <div>Vite</div>
              <div>Rollup</div>
              <div>webpack</div>
              <div>ESLint</div>
              <div>Prettier</div>
              <div>npm</div>
              <div>pnpm</div>
              <div>Yarn</div>
              <div>Jest</div>
              <div>Git</div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center p-6">
          <div className="flex items-center">
            <ShoppingBagIcon className="size-6" />
            <span className="text-2xl ml-2">工作经历</span>
          </div>
          <div className="mt-6 w-[650px]">{workExperience.desc}</div>

          <div className="mt-10">
            {workExperience.items.map((item, index) => {
              return (
                <div key={index} className="w-[650px] relative pl-4 pb-6">
                  <div className="w-1 bg-zinc-200 h-full absolute left-0  top-2"></div>
                  <div className="absolute -left-1 top-2">
                    <div className="w-3 h-3 absolute bg-zinc-500 rounded-full "></div>
                    <div className="w-3 h-3 absolute bg-zinc-400 rounded-full opacity-75 animate-ping"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl">
                      <strong>{item.jobName}</strong>
                    </div>
                    <div className="text-sm">{item.time}</div>
                  </div>
                  <div className="mt-5 flex items-center">
                    <Image
                      src={item.companyLogo}
                      width={20}
                      height={20}
                      className="w-[20px] h-[20px] rounded-full mr-1"
                      alt=""
                    />
                    {item.companyName}
                    {!!item.tag && (
                      <div className="text-xs bg-zinc-200 py-[2px] px-2 rounded-md ml-1">
                        {item.tag}
                      </div>
                    )}
                  </div>
                  <div className="mt-2 text-sm text-zinc-500">
                    {item.companyDesc}
                  </div>
                  <div className="mt-5">概览</div>
                  <div className="mt-2">
                    <ul className="list-disc pl-4 text-zinc-500 leading-normal text-sm">
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
                        className="border mt-2  rounded-md p-4 flex"
                      >
                        <div className="flex flex-col mr-5 flex-none items-center">
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
                        <div>
                          <div className="text-sm">{project.desc}</div>
                          <div className="mt-2 font-medium">相关技术</div>
                          <div className="flex mt-2">
                            <div>Html</div>
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
                <div key={index} className="w-[650px] pl-4 relative">
                  <div className="absolute -left-1 top-2">
                    <div className="w-3 h-3 absolute bg-zinc-500 rounded-full "></div>
                    <div className="w-3 h-3 absolute bg-zinc-400 rounded-full opacity-75 animate-ping"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl">
                      <strong>{item.degree}</strong>
                    </div>
                    <div className="text-sm">{item.time}</div>
                  </div>
                  <div className="mt-5 flex items-center">
                    <Image
                      src={item.schoolLogo}
                      width={20}
                      height={20}
                      className="w-[20px] mr-1 h-[20px] rounded-full"
                      alt=""
                    />
                    {item.school}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section></section>
      </main>
      <footer className="bg-zinc-100 text-xs h-[100px] flex items-center justify-center">
        <div>
          由<strong>杨炜帆</strong>设计和制作
        </div>
        <div className="w-[1px] h-[15px] bg-zinc-300 mx-4"></div>
        <div>版权所有 © 2024 - 保留所有权利</div>
        <div className="w-[1px] h-[15px] bg-zinc-300 mx-4"></div>
        <div>最近更新： 2024-05-02</div>
      </footer>
    </>
  );
}
