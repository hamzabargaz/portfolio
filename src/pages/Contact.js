import React from "react"
import { Layout } from "../components"

export default () => {
  return (
    <Layout>
      <div className="flex flex-wrap h-screen">
        <div className="w-full flex items-center text-white">
          <div className="w-full flex flex-col items-center px-8 text-center font-thin">
            <div className="flex items-end mb-4 text-2xl">
              <span className="text-secondary-base mr-2">4</span>. What’s Next ?
            </div>
            <h1 className="text-5xl mb-4 font-bold">Get In Touch</h1>
            <p className="mb-10">
              My inbox is still open for you. Feel free to ask me anything!
            </p>
            <div className="flex flex-col sm:flex-row">
              <button className="bg-secondary-base text-black px-8 sm:px-16 py-3">
                Say Hello
              </button>
              <button className=" mt-4 sm:mt-0 ml-0 sm:ml-4 border border-secondary-base px-4 md:px-8 py-3">
                Schedule a meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
