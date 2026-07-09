import React, {useContext}from 'react'
import Logo from '../Element/Logo'
import { ThemeContext } from '../../context/themeContext'

function AuthLayout(props) {
  const {children} = props;
  const {theme} = useContext(ThemeContext);

  return (
    <>
    <main 
    className={`min-h-screen bg-special-mainBg dark:bg-[#2d2d2d] flex justify-center items-center transition-colors duration-200 ${theme.name}`}
    >
      {/* container start */}
      <div className="w-full max-w-sm">
        <Logo />
        {children}
      </div>
      {/* container end */}
    </main>
    </>
  )
}

export default AuthLayout;