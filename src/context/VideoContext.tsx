"use client";

import React, { createContext, useContext, useState } from "react";

type VideoContextType = {
  isVideoPlaying: boolean;
  setIsVideoPlaying: (playing: boolean) => void;
};

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export function VideoProvider({ children }: { children: React.ReactNode }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <VideoContext.Provider value={{ isVideoPlaying, setIsVideoPlaying }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideoContext() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideoContext must be used within VideoProvider");
  }
  return context;
}
