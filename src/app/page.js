"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import { SnackbarProvider } from "notistack";

export default function Home() {
  return (
    <SnackbarProvider>
      <title>About Me</title>
      <div className="flex items-center min-h-screen bg-no-repeat bg-cover bg-blend-overlay">
        <div className="flex items-center justify-center w-1/2 min-h-screen">
          <div className="z-20 flex flex-col items-center p-4 mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">Mani Kant Sharma</h1>
            <span
              dangerouslySetInnerHTML={{
                __html: `I am a ReactJS developer with 1 year of experience.`,
              }}
              className="mt-8 mb-12 text-lg whitespace-break-spaces"
            ></span>
            <div className="flex flex-wrap justify-center">
              <Button
                variant="contained"
                onClick={() =>
                  (window.location = "mailto:manikants157@gmail.com")
                }
                className="px-20 py-3 m-2 text-lg font-semibold bg-[#407BFD] rounded text-gray-50"
              >
                Hire Me..!
              </Button>
            </div>
          </div>
        </div>
        <Image src="/programming.webp" width={800} height={800} />
      </div>
    </SnackbarProvider>
  );
}
