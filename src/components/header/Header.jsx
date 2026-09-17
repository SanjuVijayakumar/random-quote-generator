import React from 'react'

const Header = () => {
  return (
    <header className="border-b border-white/10 bg-black/30 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
              <div>
                <h1 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  Quote<span className="text-purple-400">Flow</span>
                </h1>
              </div> 
            </div> 
          </header> 
  )
}

export default Header