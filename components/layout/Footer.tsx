import React from "react";

export default function Footer(): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black/95">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="text-center text-xs text-zinc-500">© {year} Edwin Anderson. All rights reserved.</div>
      </div>
    </footer>
  );
}
