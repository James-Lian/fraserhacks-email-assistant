"use client";

import Image from "next/image";
import { useState } from "react";

// import { useCookies } from "next-client-cookies";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  // const cookies = useCookies();
  const { data: session, status } = useSession();

  
  const [recipientVal, setRecipientVal] = useState("");
  const [username, setUsername] = useState("");// cookies.get("username") ? useState(cookies.get("username")) : useState("");
  const [role, setRole] = useState("Finance Executive");// cookies.get("role") ? useState(cookies.get("role")) : useState("Finance Executive");
  const [emailAddress, setEmailAddress] = useState("");// cookies.get("email-address") ? useState(cookies.get("email-address")) : useState("");
  
  const recipientChanged = (event) => {
    setRecipientVal(event.target.value);
  }
  
  const usernameChanged = (event) => {
    setUsername(event.target.value);
    // cookies.set('username', event.target.value);
  }
  
  const roleChanged = (event) => {
    setRole(event.target.value);
    // cookies.set('role', event.target.value);
  }
  
  const emailAddressChanged = (event) => {
    setEmailAddress(event.target.value);
    // cookies.set('email-address', event.target.value);
  }
  
  const [emailConvos, setEmailConvos] = useState([])
  
  if (status === "loading") return null;

  return (
    <div className="min-h-screen flex flex-col items-center py-20 font-[family-name:var(--font-geist-sans)] bg-stone-100">
      <div className="flex flex-row fixed top-0 w-full items-center justify-center h-[80px] bg-stone-100/50 text-center">
        <div className="flex-1"> </div>
        <div className="text-lg text-gray-800"></div> {/* email display */}
        {session ? (
          <button 
            onClick={() => signOut}
            className="text-lg bg-white rounded-xl shadow-lg mx-8 py-[12px] px-[16px] hover:cursor-pointer active:text-gray-500"
          >
            Sign Out
          </button>
        ) : (
          <button 
            onClick={() => {signIn("zoho", { callbackUrl: '/' }); console.log(session)}}
            className="text-lg bg-white rounded-xl shadow-lg mx-8 py-[12px] px-[16px] hover:cursor-pointer active:text-gray-500"
          >
            Sign In
          </button>
        )}
      </div>
      <main className="flex flex-col flex-1 items-center w-full max-w-[680px]">
        <h1 className="font-semibold text-2xl text-left w-full my-1">
          Sending...
        </h1>
        <div className="flex flex-row text-lg w-full px-[3px] py-[12px] gap-[2px]">
          <div className="flex flex-col flex-1 gap-[2px]">
            <div>
              <label className="whitespace-nowrap font-semibold">To: </label>
              <input 
                type="text"
                id="recipient"
                name="recipient"
                value={recipientVal}
                onChange={recipientChanged}
                placeholder="[recipient]"
                className="w-[150px] ml-[2px] border-b-2 border-b-transparent focus:outline-0 focus:border-b-gray-800 transition-all"
              />
            </div>
            <div>
              <label className="whitespace-nowrap font-semibold">From: </label>
              <input 
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={usernameChanged}
                placeholder="[your name]"
                className="w-[120px] ml-[2px] border-b-2 border-b-transparent focus:outline-0 focus:border-b-gray-800 transition-all"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-[2px]">
            <div>
              <label className="whitespace-nowrap font-semibold">Role: </label>
              <input 
                type="text"
                id="role"
                name="role"
                value={role}
                onChange={roleChanged}
                className="w-[220px] ml-[2px] border-b-2 border-b-transparent focus:outline-0 focus:border-b-gray-800 transition-all"
              />
            </div>
            <div>
              <label className="whitespace-nowrap font-semibold">Email: </label>
              <input 
                type="text"
                id="email-address"
                name="email-address"
                value={emailAddress}
                onChange={emailAddressChanged}
                placeholder="e.g. bob.bob@frasercodes.ca"
                className="w-[280px] ml-[2px] border-b-2 border-b-transparent focus:outline-0 focus:border-b-gray-800 transition-all"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 w-full gap-[18px]">
          {/* #0F6CBD */}
          <div className="flex w-full text-lg bg-[#0F6CBD] rounded-lg py-[8px] px-[10px] text-white mt-[8px] whitespace-pre-wrap">
            {"Dear [],\nIt's been a while. F you"}
          </div>
          <div className="flex w-full text-lg bg-gray-100 rounded-lg shadow py-[8px] px-[10px] text-gray-600 gap-[8px]">
            <span className="">2025-07-18</span>
            <span className="not-italic">|</span>
            <span className="">ICP Hub</span>
            <span className="not-italic">|</span>
            <span className="">bob.bob@frasercodes.ca</span>
          </div>
          <div className="flex w-full bg-gray-100 rounded-lg shadow p-[8px] text-gray-600 italic">
            2025-07-18
          </div>
          <div className="flex w-full bg-gray-100 rounded-lg shadow p-[8px] text-gray-600 italic">
            2025-07-18
          </div>
          <div className="flex w-full bg-gray-100 rounded-lg shadow p-[8px] text-gray-600 italic">
            2025-07-18
          </div>
          <div className="flex w-full bg-gray-100 rounded-lg shadow p-[8px] text-gray-600 italic">
            2025-07-18
          </div>
        </div>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
