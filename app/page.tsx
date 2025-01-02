'use client';
import { usePathname } from 'next/navigation';
import BlogList from "@/components/BlogList";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Page() {
  const pathname = usePathname();

  if (pathname === '/blog') {
    return <BlogList />;
  }

  return (
    <div className="max-w-8xl w-full">
      <Hero />
      <Grid />
      <RecentProjects />
      <Approach />
      <Footer />
    </div>
  );
}