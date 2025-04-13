'use client'

import Funfacts from "./components/Funfacts";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

export default function Home() {

  return (
    <>
      <Hero />
      <Funfacts />
      <Testimonials />
      <Gallery />
    </>
  );
}