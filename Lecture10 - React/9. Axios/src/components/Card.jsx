import React from "react";

const Card = (props) => {
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);
  return (
    <div
      className="group relative flex h-full min-h-64 w-full flex-col overflow-hidden rounded-3xl border border-white/30 p-6 text-white shadow-lg ring-1 ring-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
      style={{ background: `rgb(${c1},${c2},${c3})` }}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 blur-2xl transition duration-500 group-hover:scale-150" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-black/10 blur-2xl" />

      <div className="relative mb-5 flex items-center justify-between">
        <span className="rounded-full bg-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
          User
        </span>
        <span className="text-sm font-medium opacity-80">#{props.user.id}</span>
      </div>

      <h1 className="relative mb-1 text-2xl font-bold drop-shadow-sm">
        {props.user.name}
      </h1>
      <h3 className="relative mb-4 text-sm font-medium opacity-80">
        @{props.user.username}
      </h3>
      <p className="relative mt-auto break-all rounded-xl bg-black/20 px-3 py-2 text-sm backdrop-blur-sm transition group-hover:bg-black/30">
        {props.user.email}
      </p>
    </div>
  );
};

export default Card;
