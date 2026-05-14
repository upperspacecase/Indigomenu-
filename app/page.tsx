import { Accordion, AccordionItem } from "./Accordion";
import {
  SunIcon,
  CoffeeIcon,
  ForkKnifeIcon,
  CocktailIcon,
  WineIcon,
  GroupIcon,
  LocationIcon,
  PhoneIcon,
  ReviewIcon,
  WebcamIcon,
  InstagramIcon,
} from "./icons";

export default function Home() {
  return (
    <main className="page">
      <div className="logo-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="Indigo" />
      </div>

      <h1 className="title">Bistro &amp; Beach Bar</h1>

      <h2 className="section-heading">MENU</h2>
      <Accordion>
        <AccordionItem id="breakfast" icon={<SunIcon />} title="Pequeno-Almoço | Breakfast" subtitle="Document" />
        <AccordionItem id="coffee"    icon={<CoffeeIcon />} title="Café | Coffee" subtitle="Document" />
        <AccordionItem id="food"      icon={<ForkKnifeIcon />} title="Comida | Food" subtitle="Document" />
        <AccordionItem id="drinks"    icon={<CocktailIcon />} title="Bebidas | Drinks" subtitle="Document" />
        <AccordionItem id="wine"      icon={<WineIcon />} title="Carta de Vinhos | Wine List" subtitle="Document" />
      </Accordion>

      <h2 className="section-heading">EVENTS</h2>
      <Accordion>
        <AccordionItem id="group" icon={<GroupIcon />} title="Menus de Grupo | Group Menus" subtitle="Document" />
      </Accordion>

      <h2 className="section-heading">MORE</h2>
      <Accordion>
        <AccordionItem id="location" icon={<LocationIcon />} title="Localização | Location" />
        <AccordionItem id="contact"  icon={<PhoneIcon />} title="Contacte-nos | Contact Us" subtitle="Contact · Indigo Beach Club" />
        <AccordionItem id="review"   icon={<ReviewIcon />} title="Review your Experience" />
        <AccordionItem id="cam"      icon={<WebcamIcon />} title="Foz do Lizandro Beach Cam" />
        <AccordionItem id="ig"       icon={<InstagramIcon />} title="Instagram" />
      </Accordion>
    </main>
  );
}
