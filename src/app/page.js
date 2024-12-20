import Head from 'next/head';
import { Header } from './components/home/Header';
import { HeroSection } from './components/home/Hero';
import { ProductShowcase } from './components/home/ProductShowcase';
import { Categories } from './components/home/Categories';
import SaleProducts from './components/home/SaleProducts';
import { Testimonials } from './components/home/Testimonials';
import { NewsletterSignup } from './components/home/NewsletterSignup';
import { Footer } from './components/home/Footer';


export default function Home() {
  return (
    <>
      <Head>
        <title>Clothing Sale - Trendy Styles at Affordable Prices</title>
        <meta name="description" content="Discover the latest fashion trends at unbeatable prices. Shop men's, women's, and kids' clothing on sale now!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <main>
        <HeroSection />
        <Categories />
        <ProductShowcase />
        <SaleProducts/>
        <Testimonials />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
} 