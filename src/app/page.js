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
      { title: "Buy", type: "oytline", link: "#" },
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
      { title: "Buy", type: "oytline", link: "#" },
    ],
  };

  return (
    <>
      <Nav />
      <Hero data={heroIphone17pro} />
      <Hero data={heroIphoneAir} />
    </>
  );
}
