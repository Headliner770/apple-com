import Nav from "@components/Nav/Nav";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  const heroIphone17pro = {
    type: "default",
    title: "iPhone 17 Pro",
    subtitle: "All out Pro.",
    imageDesktop: "/img/hero/iphone-17-pro.jpg",
    imageMobile: "/img/hero/iphone-17-pro-mobile.jpg",
    altText: "iPhone 17 Pro in cosmic orange finish, Pro Fusion camera system",
    buttons: [
      { title: "Learn more", type: "primary", link: "#" },
      { title: "Buy", type: "outline", link: "#" },
    ],
  };

  const heroIphoneAir = {
    type: "white",
    title: "iPhone Air",
    subtitle: "The thinnest iPhone ever. With the power of pro inside.",
    imageDesktop: "/img/hero/iphone-air.jpg",
    imageMobile: "/img/hero/iphone-air-mobile.jpg",
    altText: "Side view of iPhone Air, showing very thin titanium side",
    buttons: [
      { title: "Learn more", type: "primary", link: "#" },
      { title: "Buy", type: "outline", link: "#" },
    ],
  };

  const heroIphone17 = {
    type: "white",
    title: "iPhone 17",
    subtitle: "Magichromatic.",
    imageDesktop: "/img/hero/iphone-17.jpg",
    imageMobile: "/img/hero/iphone-17-mobile.jpg",
    altText: "iPhone 17 in all 5 finishes, fanned out side view",
    buttons: [
      { title: "Learn more", type: "primary", link: "#" },
      { title: "Buy", type: "outline", link: "#" },
    ],
  };

  const watch11 = {
    type: "white",
    title: "Watch Series 11",
    subtitle: "The ultimate way to watch your health.",
    imageDesktop: "/img/hero/iphone-17.jpg",
    imageMobile: "/img/hero/iphone-17-mobile.jpg",
    altText: "iPhone 17 in all 5 finishes, fanned out side view",
    buttons: [
      { title: "Learn more", type: "primary", link: "#" },
      { title: "Buy", type: "outline", link: "#" },
    ],
  };

  return (
    <>
      <Nav />
      <section className="section-heroes">
        <Hero data={heroIphone17pro} />
        <Hero data={heroIphoneAir} />
        <Hero data={heroIphone17} />
      </section>
      <section className="section-promo-grid">
        <Hero data={heroIphone17pro} size="small" />
      </section>
    </>
  );
}
