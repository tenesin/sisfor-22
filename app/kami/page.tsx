import React from "react";

function kami() {
  return (
    <div className="container py-11 px-28 font-semibold">
      <h1 className="text-4xl">
        Kami, <span className="text-blue-600">Sistem Informasi 2022.</span>
      </h1>
      <div className="pt-2">
        <h3 className="text-2xl">
          Tak kenal, maka tak sayang. Yuk kenalan ada siapa aja kita!
        </h3>
        <label className="flex flex-wrap float-right">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-dark w-96 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
        </label>
      </div>
    </div>
  );
}

export default kami;
