import React, { useEffect, useState } from 'react';

function ThemeChange() {
    // const [theme, setTheme] = useState('light');
    // const toggleTheme = () => {
    //   setTheme(theme === 'dark' ? 'light' : 'dark');
    // };
    
    // // initially set the theme and "listen" for changes to apply them to the HTML tag
    // useEffect(() => {
    //     const htmlElement = document.querySelector('html')!;
    //     htmlElement.setAttribute('data-theme', theme);
    //   }, [theme]);
    // return (
    //     <input type="checkbox" onClick={toggleTheme} value="synthwave" className="toggle theme-controller"/>
    // );
    return (
        <div>
            <h1>Image Grid Component</h1>
            <p>Some JSX content here...</p>
        </div>
    );
  }

export default ThemeChange;