import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {

    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState("")

    useEffect(() => {
      const mediaQuery = window.matchMedia(preferDarkQuery);
      const userPref = window.localStorage.getItem("theme") ;
      let check = userPref === "dark" ? "dark" : "light";
      setMode(check);

      const handleChange = () => {
        if(userPref){
                let check = userPref === "dark" ? "dark" : "light";
                console.log(check);
                setMode(check);
                if(check === "light"){
                    document.documentElement.classList.remove("dark");

                }else {
                    document.documentElement.classList.add("dark");
                }
        }else{
            let check = mediaQuery.matches ? "dark" : "light";
            setMode(check);
            if(check === "light"){
                document.documentElement.classList.remove("dark");

            }else {
                document.documentElement.classList.add("dark");
            }
        }
      }

      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])

    useEffect(() => {

        // let check = window.localStorage.getItem("theme") === "dark" ? "dark" : "light";
        // setMode(check);

        if(mode === "dark"){
        window.localStorage.setItem("theme","dark");
        document.documentElement.classList.add("dark");
     }
     else {
        console.log("changed");
             window.localStorage.setItem("theme","light");
             document.documentElement.classList.remove("dark");
          }
          

    }, [mode])
    
    
   return[mode, setMode]
}

export default useThemeSwitcher