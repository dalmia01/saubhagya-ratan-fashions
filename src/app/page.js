"use client";

import BannerWithButton from "./components/BannerWithButton/BannerWithButton";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import TextBanner from "./components/TextBanner/TextBanner";
import TextBannerWhite from "./components/TextBannerWhite/TextBannerWhite";

export default function Home() {
  return (
    <div className="flex  items-center justify-center bg-zinc-50 font-cormorant dark:bg-black">
      <main className="flex  w-full flex-col items-center justify-between  bg-white dark:bg-black sm:items-start">
        <TextBanner
          imageUrl="https://res.cloudinary.com/degndcs2r/image/upload/v1761218909/home_hero_baner_bkqwyw.jpg"
          height="min-h-screen"
        />
        <TextBannerWhite
          heading="The Essence of Saubhagya Ratan Fashions"
          description="Welcome to Saubhagya Ratan Fashions, a haven where each piece of jewelry celebrates your unique melody. We draw inspiration from the rich tapestry of Indian heritage, particularly the iconic dumroo, Lord Shiva's creation instrument. This powerful symbol reflects the rhythm of your life and the captivating melody of your journey."
        />
        {/* <BannerWithButton
          imageUrl="https://shopdumroo.com/cdn/shop/files/Gemini_Generated_Image_3.png?v=1709995397"
          heading="Discover Our Collections"
          description="Immerse yourself in the timeless elegance of the Chaand collection, where every piece of the collection features the delicate crescent moon, a symbol of beauty, femininity, and growth. Explore the Chaand collection and find a piece that speaks to your soul. Let the moon's gentle glow illuminate your unique style and leave a lasting impression."
          buttonText="Explore Collections"
          buttonLink="/collections"
          height="h-[550px]"
          overlayColor="bg-black/50"
        /> */}
        <FeaturedProducts heading="Hot Sellers" />

        {/* <TextBanner
          imageUrl="https://shopdumroo.com/cdn/shop/files/Gemini_Generated_Image_3.png?v=1709995397"
          heading="ARTISANSHIP and QUALITY"
          description="Our commitment to craftsmanship is unwavering. Each Dumroo piece is handcrafted using time-honored techniques, ensuring that your jewelry is not only beautiful but also of the highest quality."
          height="h-[32rem]"
        /> */}
        <div className=""> </div>
      </main>
    </div>
  );
}
