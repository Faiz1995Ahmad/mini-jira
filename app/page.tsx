import Image from 'next/image';
import LoginPage from "./pages/login/page";



export default function Home() {
  return (
    <div className="bg-[url('/bg1.jpg')] bg-cover
            bg-center flex flex-col flex-1 items-center justify-center w-full h-full dark:bg-pink">
      <LoginPage />
    </div >
  );
}
