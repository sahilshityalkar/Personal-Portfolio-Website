import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 felx justify-center items-center flex-col overflow-hidden  mx-auto sm:px-10 px-5">
      <div className=" max-w-8xl w-full">
        <Hero />
      </div>
    </main>
  );
}
