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
        <AccordionItem id="breakfast" icon={<SunIcon />} title="Pequeno-Almoço | Breakfast" subtitle="Document">
          {/* BREAKFAST CONTENT */}
        </AccordionItem>
        <AccordionItem id="coffee" icon={<CoffeeIcon />} title="Café | Coffee" subtitle="Document">
          {/* COFFEE CONTENT */}
        </AccordionItem>
        <AccordionItem id="food" icon={<ForkKnifeIcon />} title="Comida | Food" subtitle="Document">
          {/* FOOD CONTENT */}
        </AccordionItem>
        <AccordionItem id="drinks" icon={<CocktailIcon />} title="Bebidas | Drinks" subtitle="Document">
          {/* DRINKS CONTENT */}
        </AccordionItem>
        <AccordionItem id="wine" icon={<WineIcon />} title="Carta de Vinhos | Wine List" subtitle="Document">
          {/* WINE LIST CONTENT */}
        </AccordionItem>
      </Accordion>

      <h2 className="section-heading">EVENTS</h2>
      <Accordion>
        <AccordionItem id="group" icon={<GroupIcon />} title="Menus de Grupo | Group Menus" subtitle="Document">
          {/* GROUP MENUS CONTENT */}
        </AccordionItem>
      </Accordion>

      <h2 className="section-heading">MORE</h2>
      <Accordion>
        <AccordionItem id="location" icon={<LocationIcon />} title="Localização | Location">
          {/* LOCATION CONTENT */}
        </AccordionItem>
        <AccordionItem id="contact" icon={<PhoneIcon />} title="Contacte-nos | Contact Us" subtitle="Contact · Indigo Beach Club">
          {/* CONTACT CONTENT */}
        </AccordionItem>
        <AccordionItem id="review" icon={<ReviewIcon />} title="Review your Experience">
          {/* REVIEW CONTENT */}
        </AccordionItem>
        <AccordionItem id="cam" icon={<WebcamIcon />} title="Foz do Lizandro Beach Cam">
          {/* BEACH CAM CONTENT */}
        </AccordionItem>
        <AccordionItem id="ig" icon={<InstagramIcon />} title="Instagram">
          {/* INSTAGRAM CONTENT */}
        </AccordionItem>
      </Accordion>
    </main>
  );
}
