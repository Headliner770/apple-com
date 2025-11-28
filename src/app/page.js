import Nav from "@components/Nav/Nav";
import Hero from "@/components/Hero/Hero";
import { heroes } from "@/data/heroes";

export default function Home() {
  const watch11 = {
    type: "white",
    title: "Watch Series 11",
    subtitle: "The ultimate way to watch your health.",
    imageDesktop: "/img/promo/watch.jpg",
    imageMobile: "/img/promo/watch-mobile.jpg",
    altText: "Watch",
    buttons: [
      { title: "Learn more", type: "primary", link: "#" },
      { title: "Buy", type: "outline", link: "#" },
    ],
  };

  const airPodsPro3 = {
    type: "white",
    title: "AirPods Pro 3",
    subtitle: "The world's best in-ear Active Noise Cancellation.",
    imageDesktop: "/img/promo/airpods.jpg",
    imageMobile: "/img/promo/airpods-mobile.jpg",
    altText: "AirPods",
    buttons: [
      { title: "Learn more", type: "primary", link: "#" },
      { title: "Buy", type: "outline", link: "#" },
    ],
  };

  const macBookAir = {
    type: "white",
    title: "MacBook Air",
    subtitle: "Sky blue color. Sky high perforance with M4.",
    imageDesktop: "/img/promo/macbook-air.jpg",
    imageMobile: "/img/promo/macbook-air-mobile.jpg",
    altText: "MacBook Air",
    buttons: [
      { title: "Learn more", type: "primary", link: "#" },
      { title: "Buy", type: "outline", link: "#" },
    ],
  };

  const iPadAir = {
    type: "white",
    title: "iPad Air",
    subtitle: "Now supercharged by the M3 chip.",
    imageDesktop: "/img/promo/ipad.jpg",
    imageMobile: "/img/promo/ipad-mobile.jpg",
    altText: "iPad Air",
    buttons: [
      { title: "Learn more", type: "primary", link: "#" },
      { title: "Buy", type: "outline", link: "#" },
    ],
  };

  const TradeIn = {
    type: "white",
    title: "Trade In",
    subtitle:
      "Get up to $200-$700 in credit when you trade in iPhone 13 or higher.",
    imageDesktop: "/img/promo/tradein.jpg",
    imageMobile: "/img/promo/tradein-mobile.jpg",
    altText: "Trade In",
    buttons: [
      { title: "Learn more", type: "primary", link: "#" },
      { title: "Buy", type: "outline", link: "#" },
    ],
  };

  return (
    <>
      <Nav />
      <section className="section-heroes">
        {heroes.map((hero, index) => (
          <Hero data={hero} key={index} />
        ))}
      </section>
      <section className="section-promo-grid">
        <Hero data={watch11} size="small" />
        <Hero data={airPodsPro3} size="small" />
        <Hero data={macBookAir} size="small" />
        <Hero data={iPadAir} size="small" />
        <Hero data={TradeIn} size="small" />
      </section>
    </>
  );
}
