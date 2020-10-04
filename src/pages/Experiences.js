import React, { useState } from "react"
import { Layout } from "../components"
import cx from "classnames"

const types = {
  Obytes: <div className=""> Obytes Work as Front end developer </div>,
  Freelancer: (
    <div className=""> Freelancer Work as Full Stack JS developer </div>
  ),
  Workinc: <div className=""> Workinc Work as Wordpress developer </div>,
}

export default () => {
  const [active, setActive] = useState("Obytes")

  return (
    <Layout>
      <div className="flex flex-wrap h-screen">
        <div className="w-full flex items-center text-white">
          <div className="flex flex-col px-8 font-thin w-full">
            <div className="flex flex-wrap items-end mb-4 font-thin text-2xl">
              <span>
                <span className="text-secondary-base mr-2">2</span>. Where I've
                Worked
              </span>
              <hr className="ml-4 w-40 mb-2" />
            </div>
            <div className="flex flex-wrap items-start w-full">
              <div className="flex flex-row md:flex-col w-full md:w-1/4 text-left overflow-x-auto">
                {Object.keys(types).map(type => (
                  <button
                    className={cx(
                      "cursor-pointer mb-4 text-left focus:outline-none whitespace-no-wrap",
                      active === type ? "text-secondary-base" : "text-white",
                      "ml-3 md:ml-0"
                    )}
                    key={type}
                    active={active === type}
                    onClick={() => setActive(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <div className="ml-2 md:ml-0 w-full md:w-3/4">
                {types[active]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
