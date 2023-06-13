import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen bg-black/90 text-white">{children}</div>
  );
};

export default RootLayout;
