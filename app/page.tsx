import React from "react";
import Image from "next/image";

function Home() {
  return (
    <section className="bg-white dark:bg-[#0A0A0A]">
      <div className="flex max-w-screen-xl px-2 py-5 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1
            className="max-w-2xl tracking-wide text-4xl font-bold 
          px-1.5 leading-none md:text-2xl xl:text-4xl dark:text-white"
          >
            Bersama untuk <span className="text-blue-600">berinovasi</span>{" "}
            dalam
            <span className="text-blue-600"> mengembangkan teknologi</span> guna
            memajukan kemanusiaan berlandaskan kekeluargaan.
          </h1>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            className="rounded-3xl"
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="mockup"
            width={764}
            height={539}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
