"use client";

import Spline from "@splinetool/react-spline/next";
import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <body className="flex-grow relative">
      <div className="absolute inset-0 z-0 h-screen">
        <Spline scene="https://prod.spline.design/TEDKpH7eTwGV7FSI/scene.splinecode" />
      </div>
      <div className="relative z-1 content">
        <div className="intContent">
          <Header />
          <Main />
        </div>
      </div>
    </body>
  );
}
