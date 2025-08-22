import React from "react";

export const NotFound = () => {
  return (
    <main className="grid min-h-screen place-items-center bg-dark px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <div className="bg-dark w-16 mx-auto mb-10">
          <img src="/logo.png"></img>
        </div>
        <p className="text-9xl font-semibold text-yellow-500">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-xs hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Go back home
          </a>
        </div>
      </div>
    </main>
  );
};
