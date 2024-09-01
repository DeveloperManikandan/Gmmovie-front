import "tailwindcss/tailwind.css";
import { Toaster } from 'react-hot-toast';
import React from 'react';
import Body from "./components/Body";
import MovieDialog from "./components/MovieDailog";
function App() {
  return (
    <div>
    <Body />
    <Toaster/>
    <MovieDialog /> 
    </div>
  );
}

export default App;
