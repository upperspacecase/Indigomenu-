import type { ReactNode } from "react";
import { Accordion, AccordionItem, LinkItem } from "./Accordion";
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
  AllergenIcon,
  type Allergen,
} from "./icons";

type Item = {
  pt: string;
  en: string;
  desc?: string;
  descEn?: string;
  price?: string;
  allergens?: Allergen[];
};

function MenuItem({ pt, en, desc, descEn, price, allergens }: Item) {
  return (
    <div className="menu-item">
      <div className="menu-item-head">
        <span>{pt} <span style={{ fontStyle: "italic", fontWeight: 400, opacity: 0.7 }}>| {en}</span></span>
        {price && <span>{price}</span>}
      </div>
      {(desc || descEn) && (
        <div className="menu-item-desc">
          {desc}
          {descEn && <em>{descEn}</em>}
        </div>
      )}
      {allergens && allergens.length > 0 && (
        <div className="allergen-row">
          <span className="legend">Alergénios</span>
          {allergens.map(a => <AllergenIcon key={a} kind={a} />)}
        </div>
      )}
    </div>
  );
}

function MenuSection({ title, titleEn, note, children }: { title: string; titleEn?: string; note?: string; children: ReactNode }) {
  return (
    <section className="menu-box">
      <h3>{title}{titleEn && <> <em>| {titleEn}</em></>}</h3>
      {note && <p className="menu-note">{note}</p>}
      {children}
    </section>
  );
}

function AllergenLegend() {
  const items: { kind: Allergen; pt: string; en: string }[] = [
    { kind: "gluten", pt: "Glúten", en: "Gluten" },
    { kind: "eggs", pt: "Ovos", en: "Eggs" },
    { kind: "dairy", pt: "Leite", en: "Dairy" },
    { kind: "peanuts", pt: "Amendoim", en: "Peanuts" },
    { kind: "lupin", pt: "Tremoço", en: "Lupin" },
    { kind: "soja", pt: "Soja", en: "Soya" },
    { kind: "sulphites", pt: "Sulfitos", en: "Sulphites" },
    { kind: "mustard", pt: "Mostarda", en: "Mustard" },
    { kind: "nuts", pt: "Frutos casca rija", en: "Nuts" },
    { kind: "crustaceans", pt: "Crustáceos", en: "Crustaceans" },
    { kind: "mollusks", pt: "Moluscos", en: "Mollusks" },
    { kind: "fish", pt: "Peixe", en: "Fish" },
    { kind: "sesame", pt: "Semente Sésamo", en: "Sesame Seeds" },
  ];
  return (
    <div className="allergen-legend">
      {items.map(i => (
        <div key={i.kind} className="row">
          <AllergenIcon kind={i.kind} />
          <span>{i.pt} <em>· {i.en}</em></span>
        </div>
      ))}
    </div>
  );
}

const LOCATION_URL = "https://maps.app.goo.gl/GfaCxmPPWkssACue6";
const REVIEW_URL = "https://g.page/r/CZ8zdLERFf8JEBM/review";
const BEACHCAM_URL = "https://beachcam.meo.pt/livecams/foz-do-lizandro/";
const INSTAGRAM_URL = "https://www.instagram.com/indigo_beachclub/";
const PHONE = "926863781";

export default function Home() {
  return (
    <main className="page">
      <div className="logo-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="Indigo" />
      </div>

      <h1 className="title">Bistro &amp; Beach Bar</h1>

      <h2 className="section-heading">MENU</h2>
      <Accordion>
        <AccordionItem id="breakfast" icon={<SunIcon />} title="Pequeno-Almoço | Breakfast">
          <MenuSection title="Rituais de Amanhecer" titleEn="Sunrise Rituals" note="10:00 — 13:00">
            <MenuItem pt="Ovos mexidos com abacate" en="Scrambled eggs with avocado"
              desc="Ovos mexidos biológicos, abacate laminado e pão rústico e integral de massa mãe."
              descEn="Scrambled organic eggs, sliced avocado, and rustic and whole wheat sourdough bread"
              price="€ 9.80" allergens={["gluten", "eggs"]} />
            <MenuItem pt="Bacon e ovo" en="Bacon & egg"
              desc="Bacon tostado, croissant, ovo estrelado biológico e panquecas artesanais"
              descEn="Toasted bacon, croissant, fried organic egg, and artisanal pancakes"
              price="€ 8.90" allergens={["gluten", "eggs", "dairy"]} />
            <MenuItem pt="Panquecas com fruta" en="Pancakes with fruit"
              desc="Panquecas artesanais, morangos frescos, banana, mel regional e frutos secos"
              descEn="Artisanal pancakes, fresh strawberries, banana, regional honey, and nuts"
              price="€ 8.50" allergens={["gluten", "eggs", "nuts", "dairy"]} />
            <MenuItem pt="Iogurte com fruta" en="Yogurt with fruit"
              desc="Iogurte fresco, manga, banana, morango, granola e raspas de cacau puro a 85%"
              descEn="Fresh yogurt, mango, banana, strawberry, granola, and 85% pure cacao shavings"
              price="€ 9.50" allergens={["nuts", "dairy"]} />
            <MenuItem pt="Brunch Indigo" en="Indigo Brunch"
              desc="Pão de massa mãe, ovos mexidos biológicos, bacon, panquecas com mel e doce, abacate, fruta, mini gaufre, scone e iogurte com granola e frutos secos. Inclui sumo de laranja e café"
              descEn="Sourdough bread, organic scrambled eggs, bacon, pancakes with honey and jam, avocado, fruit, mini waffle, scone, and yogurt with granola and nuts. Includes orange juice and coffee"
              price="€ 14.00 / € 22.00 (2 pax)" allergens={["gluten", "eggs", "nuts", "dairy"]} />
          </MenuSection>

          <MenuSection title="Sobremesas" titleEn="Sweet Ending">
            <MenuItem pt="Mousse de manga" en="Mango mousse"
              desc="Sobremesa de fusão com manga, lima da região, pistácio crocante e nata vegan"
              descEn="Fusion dessert with mango, local lime, crunchy pistachio and vegan cream"
              price="€ 8.00" allergens={["nuts"]} />
            <MenuItem pt="Brownie double fudge" en="Double fudge brownie"
              desc="Double fudge cremoso, cacau intenso e gelado de baunilha."
              descEn="Creamy double fudge brownie, intense cacao, and vanilla gelato"
              price="€ 9.00" allergens={["gluten", "eggs", "dairy"]} />
            <MenuItem pt="Gaufre de fruta" en="Fruit waffle"
              desc="Gaufre artesanal com gelado de baunilha, chocolate derretido e frutos vermelhos frescos"
              descEn="Artisanal waffle with vanilla gelato, melted chocolate, and fresh red berries"
              price="€ 9.00" allergens={["gluten", "eggs", "dairy"]} />
            <MenuItem pt="Fruta da época" en="Seasonal fruit"
              desc="Fruta da época com aroma de hortelã"
              descEn="Seasonal fruit with mint aroma"
              price="€ 7.50" />
          </MenuSection>

          <MenuSection title="Gelados Soft e Bowls" titleEn="Soft Serve & Bowls">
            <MenuItem pt="Cone ou Copo Simples" en="Simple Cone or Cup" price="€ 3.50" />
            <MenuItem pt="Cone ou Copo com 3 Toppings" en="Cone or Cup with 3 Toppings" price="€ 4.20" />
            <MenuItem pt="Topping Extra" en="Extra Topping" price="€ 0.50" />
            <MenuItem pt="Bowl de açaí" en="Açaí Bowl"
              desc="Inclui 3 toppings à sua escolha" descEn="Includes 3 toppings of your choice"
              price="€ 9.00" />
            <MenuItem pt="Bowl de Iogurte" en="Yogurt Bowl"
              desc="Inclui 3 toppings à sua escolha" descEn="Includes 3 toppings of your choice"
              price="€ 7.00" />
          </MenuSection>

          <AllergenLegend />
        </AccordionItem>

        <AccordionItem id="coffee" icon={<CoffeeIcon />} title="Café | Coffee">
          <p className="menu-note">
            Servimos café de especialidade 100% Arábica, proveniente de lotes com pontuação acima de 86, e torrado pelo The Capsule Cafe, uma torrefação local na Ericeira.
            <br /><br />
            <em>We serve 100% Arabica specialty coffee, selected from lots scoring above 86, and roasted by The Capsule Cafe, a local roastery based in Ericeira.</em>
          </p>

          <MenuSection title="Quente" titleEn="Hot">
            <MenuItem pt="Espresso" en="Espresso" price="€ 2.00" />
            <MenuItem pt="Espresso Duplo" en="Double Espresso" price="€ 3.00" />
            <MenuItem pt="Americano | Abatanado" en="Americano" price="€ 3.00" />
            <MenuItem pt="Americano com leite" en="Americano with milk" price="€ 4.00" />
            <MenuItem pt="Macchiato Single | Pingado" en="Macchiato" price="€ 3.50" />
            <MenuItem pt="Macchiato Duplo" en="Double Macchiato" price="€ 3.75" />
            <MenuItem pt="Cortado" en="Cortado" price="€ 3.50" />
            <MenuItem pt="Flat White | Meia de Leite" en="Flat White" price="€ 4.50" />
            <MenuItem pt="Cappuccino" en="Cappuccino" price="€ 4.50" />
            <MenuItem pt="Latte | Galão" en="Latte" price="€ 4.50" />
            <MenuItem pt="Batch Brew" en="Batch Brew" price="€ 4.00" />
            <MenuItem pt="V60 Single (2 cups)" en="V60 Single" price="€ 6.00" />
            <MenuItem pt="V60 Double (4 cups)" en="V60 Double" price="€ 8.50" />
            <MenuItem pt="Chemex Single (2 cups)" en="Chemex Single" price="€ 6.00" />
            <MenuItem pt="Chemex Double (4 cups)" en="Chemex Double" price="€ 8.50" />
            <MenuItem pt="Chocolate Quente" en="Hot Chocolate" price="€ 4.50" />
            <MenuItem pt="Mocha" en="Mocha" price="€ 5.50" />
            <MenuItem pt="Matcha Latte" en="Matcha Latte" price="€ 5.50" />
            <MenuItem pt="Blue Spirulina Latte" en="Blue Spirulina Latte" price="€ 6.00" />
            <MenuItem pt="Chás" en="Teas" price="€ 3.50" />
          </MenuSection>

          <MenuSection title="Frio" titleEn="Cold">
            <MenuItem pt="Cold Brew" en="Cold Brew" price="€ 4.50" />
            <MenuItem pt="Iced Latte" en="Iced Latte" price="€ 4.75" />
            <MenuItem pt="Iced Americano" en="Iced Americano" price="€ 3.50" />
            <MenuItem pt="Iced Mocha" en="Iced Mocha" price="€ 5.50" />
            <MenuItem pt="Iced Cappuccino" en="Iced Cappuccino" price="€ 4.75" />
            <MenuItem pt="Iced Matcha" en="Iced Matcha" price="€ 5.50" />
            <MenuItem pt="Matcha Tonic" en="Matcha Tonic" price="€ 6.50" />
            <MenuItem pt="Iced Spirulina Latte" en="Iced Spirulina Latte" price="€ 6.00" />
          </MenuSection>
        </AccordionItem>

        <AccordionItem id="coffee-pdf" icon={<CoffeeIcon />} title="Coffee (PDF)" subtitle="Original menu document">
          <div className="pdf-pages">
            {[1, 2, 3].map(n => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={n} src={`/menus/coffee-page-${n}.jpg`} alt={`Coffee menu page ${n}`} />
            ))}
          </div>
        </AccordionItem>

        <AccordionItem id="food" icon={<ForkKnifeIcon />} title="Comida | Food">
          <MenuSection title="Aperitivos do Atlântico" titleEn="Atlantic Appetizers">
            <MenuItem pt="Couvert" en="Couvert"
              desc="Crackers de sementes, crackers de queijo e cebola, toast, pão de massa mãe, Hummus, manteiga de ouriço-do-mar e maionese de gambas"
              descEn="Seed crackers, cheese and onion crackers, toast, sourdough bread, hummus, sea urchin butter, and prawn mayonnaise"
              price="€ 7.00" allergens={["gluten", "eggs", "dairy", "sesame", "crustaceans", "mollusks"]} />
            <MenuItem pt="Cesto de Pão" en="Bread Basket"
              desc="Pão integral e pão rústico de massa mãe"
              descEn="Whole wheat bread, and rustic sourdough bread"
              price="€ 5.00" allergens={["gluten", "sesame", "nuts"]} />
            <MenuItem pt="Indigo tábua de searcuteria" en="Indigo charcuterie board"
              desc="Crackers de sementes, carpaccio de polvo e paprica, folhado de queijo chèvre e nozes, patê de atum da casa e charcutaria regional"
              descEn="Seed crackers, octopus carpaccio and paprika, goat cheese and walnut puff pastry, house tuna pâté, and regional charcuterie"
              price="€ 12.90" allergens={["gluten", "dairy", "nuts", "mollusks", "fish"]} />
            <MenuItem pt="Presunto pata negra 60g" en="Pata negra ham 60g"
              desc="Cortado a mão" descEn="Hand-carved portuguese ham"
              price="€ 18.00" />
            <MenuItem pt="Amendoins ou tremoços ou Azeitonas" en="Peanuts, lupins or olives"
              desc="Amendoins caramelizados com picante ou o tradicional tremoço português perfumado com manjericão ou Azeitonas á Portuguesa"
              descEn="Spiced caramelized peanuts or traditional Portuguese lupins infused with fresh basil or Portuguese-style olives"
              price="€ 3.90" allergens={["peanuts", "lupin"]} />
            <MenuItem pt="Crudités de legumes com hummus" en="Vegetable crudités with hummus"
              desc="Cenouras, mini milho, pepino e mini courgette com tradicional hummus de grão"
              descEn="Carrots, baby corn, cucumber, and baby courgette with traditional chickpea hummus"
              price="€ 10.90" allergens={["gluten", "nuts"]} />
          </MenuSection>

          <MenuSection title="Entre Pães" titleEn="Lizandro Bread Bites">
            <MenuItem pt="Hambúrguer angus Indigo" en="Indigo Angus burger"
              desc="Pão brioche, carne Angus, cebola caramelizada, queijo cheddar, bacon, tomate e alface"
              descEn="Brioche bun, Angus beef, caramelized onion, cheddar cheese, bacon, tomato, and lettuce"
              price="€ 18.50" />
            <MenuItem pt="Hambúrguer veggie" en="Veggie burger"
              desc="Pão brioche, cogumelos, feijão preto, nozes e cevada perolada, tomate e alface"
              descEn="Brioche bun, mushrooms, black beans, walnuts, and pearl barley, tomato, and lettuce"
              price="€ 16.00" allergens={["gluten", "eggs", "nuts", "sulphites"]} />
            <MenuItem pt="Preginho da foz" en="Preginho da foz"
              desc="Bolo do caco, carne Angus, alho, azeite e ovo estrelado biológico"
              descEn="Traditional &quot;bolo do caco&quot; bread, Angus beef, garlic, olive oil, and fried organic egg"
              price="€ 16.90" allergens={["gluten", "nuts", "sulphites"]} />
          </MenuSection>

          <MenuSection title="Petiscos para Partilhar" titleEn="Petiscos to Share">
            <MenuItem pt="Tempura de camarão" en="Shrimp tempura"
              desc="Camarão marinado em limão e flor de sal, frito em tempura crocante com maionese de Ponzu"
              descEn="Shrimp marinated in lemon and sea salt, fried in crispy tempura with Ponzu mayonnaise"
              price="€ 14.90" allergens={["gluten", "eggs", "nuts", "crustaceans"]} />
            <MenuItem pt="Croquetas de jamón e vitela" en="Ham and veal croquettes"
              desc="Bolinhas de presunto ibérico crocantes com mostarda e cebolinho fresco"
              descEn="Crispy Iberian ham croquettes with mustard and fresh chives"
              price="€ 8.00" allergens={["gluten", "eggs", "nuts"]} />
            <MenuItem pt="Frango em panko" en="Panko chicken"
              desc="Medalhões de frango envoltos em farinha de panko crocante, limão e cebolinho com molho Satay"
              descEn="Tender chicken medallions in a crisp panko crust with lemon and chives with Satay sauce"
              price="€ 9.50" allergens={["gluten", "eggs", "nuts"]} />
            <MenuItem pt="Puntilhitas" en="Mini squid"
              desc="Mini lulas envolvidas em farinha de milho, lima e molho de lima e cebolinho com maionese de coentros"
              descEn="Mini squid dusted in corn flour, lime, and lime and chive sauce with coriander mayonnaise"
              price="€ 9.50" allergens={["gluten", "eggs", "nuts", "mollusks"]} />
            <MenuItem pt="Melancia e tomate e queijo cabra" en="Watermelon, tomato and goat cheese"
              desc="Salada de tomate com melancia e queijo cabra e ervas aromáticas"
              descEn="Tomato salad with watermelon, goat cheese, and aromatic herbs"
              price="€ 9.00" allergens={["nuts", "dairy"]} />
            <MenuItem pt="Pica pau de vitela" en="Veal pica pau"
              desc="Carne de novilho apurada com alho, louro, vinho branco e pickles. Acompanha pão de massa mãe torrado"
              descEn="Beef with garlic, bay leaf, white wine, and pickles. Served with toasted sourdough bread"
              price="€ 16.00" allergens={["gluten", "peanuts", "mustard"]} />
            <MenuItem pt="Camarão à guilho" en="Garlic shrimp"
              desc="Camarão salteado em azeite e alho, refrescado com vinho branco da região"
              descEn="Shrimp sautéed in olive oil and garlic, deglazed with local white wine"
              price="€ 14.00" allergens={["gluten", "mustard", "crustaceans"]} />
          </MenuSection>

          <MenuSection title="Ondas do Mar" titleEn="Ocean Vitality">
            <MenuItem pt="Indigo salada Cesar" en="Indigo Caesar salad"
              desc="Frango assado, alfaces locais, croutons rústicos de massa mãe, ovo de codorniz cozido, alcaparras fritas, cebolinho, rúcula, bacon and queijo parmesão e molho Cesar"
              descEn="Roasted chicken, local lettuce, rustic sourdough croutons, boiled quail egg, fried capers, chives, arugula, bacon, parmesan cheese and caesar dressing"
              price="€ 18.50" allergens={["gluten", "eggs", "sulphites", "dairy"]} />
            <MenuItem pt="Salada de burrata e pinhões" en="Burrata and pine nut salad"
              desc="Tomate cereja, tomate confitado, burrata cremosa, pequeno pepino, cebola roxa, azeitona preta, pinhão e orégãos"
              descEn="Cherry tomato, confit tomato, burrata, small cucumber, red onion, black olives, pine nuts, and oregano"
              price="€ 16.00" allergens={["nuts", "dairy"]} />
            <MenuItem pt="Linguini de gambas" en="Shrimp linguini"
              desc="Linguini, camarão salteado em vinho branco, alho fatiado, tomate cereja, tomate seco e azeite biológico"
              descEn="Linguini, sautéed shrimp, white wine, sliced garlic, cherry tomato, sun-dried tomato, and organic olive oil"
              price="€ 16.90" allergens={["gluten", "eggs", "mustard", "crustaceans"]} />
          </MenuSection>

          <MenuSection title="Chef Corner Paelhas" titleEn="Chef Corner Paellas" note="A ritualística da confeção lenta para partilhar à mesa (30 minutos · 2 pax)">
            <MenuItem pt="Paelha do mar" en="Sea paella"
              desc="Camarão salteado, lula e vieiras frescas"
              descEn="Sautéed shrimp, squid, and fresh scallops"
              price="€ 39.00" allergens={["gluten", "eggs", "nuts", "sulphites", "crustaceans", "mollusks"]} />
            <MenuItem pt="Paelha negra" en="Black paella"
              desc="Choco, camarão e mexilhão em meia concha"
              descEn="Cuttlefish, shrimp, and mussels on the half shell"
              price="€ 37.00" allergens={["gluten", "eggs", "nuts", "sulphites", "crustaceans", "mollusks"]} />
          </MenuSection>

          <MenuSection title="Grelhados" titleEn="The Fire Kitchen (Grill)">
            <MenuItem pt="Ribeye ou sirloin green feet grelhado 250g" en="Grilled ribeye or sirloin 250g"
              desc="Entrecôte ou vazia angus grelhado, legumes no grill e batata frita caseira"
              descEn="Grilled Angus entrecôte or flank steak, grilled vegetables, and homemade French fries"
              price="€ 32.00" />
            <MenuItem pt="Especialidade do Chef — Molho à portuguesa 250g" en="Chef's Special — Portuguese sauce 250g"
              desc="Lombo de novilho angus marmoreado, alimentado 200 dias a grão no grill com batata frita caseira e legumes no grill"
              descEn="Marbled Angus beef tenderloin, grain-fed for 200 days, grilled and served with homemade French fries and grilled vegetables"
              price="€ 55.00" allergens={["gluten", "nuts", "mustard"]} />
            <MenuItem pt="Indigo satay" en="Indigo satay"
              desc="Tiras de frango marinadas em gergelim, legumes locais, molho picante de amendoim e ostra, arroz jasmim e caju torrado"
              descEn="Sesame-marinated chicken strips, local vegetables, spicy peanut and oyster sauce, jasmine rice, and toasted cashews"
              price="€ 23.90" allergens={["nuts", "sesame", "peanuts", "soja", "mollusks"]} />
            <MenuItem pt="Espetinho do mar" en="Sea skewer"
              desc="Espetada de peixe fresco, camarão e vieira no grill, acompanhada por legumes assados, batata-doce assada com molho de ostras, ponzu, lima, e azeite"
              descEn="Grilled fish, shrimp, and scallop skewer, served with roasted vegetables, roasted sweet potato with an oyster, ponzu, lime and olive oil sauce"
              price="€ 28.90" allergens={["crustaceans", "fish"]} />
            <MenuItem pt="Do Mar à Mesa — From Ericeira sea to table 800/1000gr" en="From Ericeira sea to table"
              desc="Peixe do mercado grelhado, com batata doce assada e legumes da horata salteados"
              descEn="Grilled market fish with roasted sweet potato and sautéed vegetables"
              price="€ 69.90" allergens={["nuts", "mustard", "fish"]} />
          </MenuSection>

          <MenuSection title="Menu Crianças" titleEn="Kids Menu">
            <MenuItem pt="Frango panado com arroz, batata frita e salada" en="Breaded chicken with rice, fries and salad"
              desc="Medalhões de frango envoltos em farinha de panko crocante"
              descEn="Chicken medallions coated in crispy panko breadcrumbs"
              price="€ 10.90" allergens={["gluten", "eggs", "sulphites", "nuts"]} />
            <MenuItem pt="Linguini com bacon e queijo" en="Linguini with bacon and cheese"
              desc="Linguini com bacon salteado e queijo ralado"
              descEn="Linguini with sautéed bacon and grated cheese"
              price="€ 10.90" allergens={["gluten", "nuts", "sulphites", "dairy"]} />
          </MenuSection>

          <MenuSection title="Acompanhamentos" titleEn="Sides">
            <MenuItem pt="Batata frita caseira" en="House fries"
              desc="Batata caseira fina" descEn="House fries" price="€ 6.50" />
            <MenuItem pt="Arroz branco" en="White rice"
              desc="Arroz branco solto, aromatizado com óleo de gergelim, alho e manteiga"
              descEn="Fluffy steamed white rice flavored with sesame oil, garlic and butter"
              price="€ 6.00" allergens={["gluten", "nuts", "mustard"]} />
            <MenuItem pt="Legumes assados" en="Roasted vegetables"
              desc="Legumes da época assados com mostarda ancienne"
              descEn="Seasonal vegetables roasted with whole-grain mustard"
              price="€ 7.00" allergens={["nuts", "sesame", "peanuts", "soja", "mollusks"]} />
            <MenuItem pt="Salada mista" en="Mixed salad"
              desc="Alface iceberg, tomate cherry, e molho vinagrete"
              descEn="Iceberg lettuce, cherry tomato and vinaigrette dressing"
              price="€ 6.50" />
            <MenuItem pt="Batata-doce" en="Sweet potato"
              desc="Batata-doce assada a 200 graus com a doçura do mel e alho lascado"
              descEn="Sweet potato roasted at 200 degrees with honey and sliced garlic"
              price="€ 6.50" />
          </MenuSection>

          <MenuSection title="Sobremesas" titleEn="Sweet Ending">
            <MenuItem pt="Mousse de manga" en="Mango mousse"
              desc="Sobremesa de fusão com manga, lima da região, pistácio crocante e nata vegan"
              descEn="Fusion dessert with mango, local lime, crunchy pistachio and vegan cream"
              price="€ 8.00" allergens={["nuts"]} />
            <MenuItem pt="Brownie double fudge" en="Double fudge brownie"
              desc="Double fudge cremoso, cacau intenso e gelado de baunilha"
              descEn="Creamy double fudge brownie, intense cacao, and vanilla gelato"
              price="€ 9.00" allergens={["gluten", "eggs", "dairy"]} />
            <MenuItem pt="Gaufre de fruta" en="Fruit waffle"
              desc="Gaufre artesanal com gelado de baunilha, chocolate derretido e frutos vermelhos frescos"
              descEn="Artisanal waffle with vanilla gelato, melted chocolate, and fresh red berries"
              price="€ 9.00" allergens={["gluten", "eggs", "dairy"]} />
            <MenuItem pt="Fruta da época" en="Seasonal fruit"
              desc="Fruta da época com aroma de hortelã"
              descEn="Seasonal fruit with mint aroma"
              price="€ 7.50" />
          </MenuSection>

          <MenuSection title="Gelados Soft e Bowls" titleEn="Soft Serve & Bowls">
            <MenuItem pt="Cone ou Copo Simples" en="Simple Cone or Cup" price="€ 3.50" />
            <MenuItem pt="Cone ou Copo com 3 Toppings" en="Cone or Cup with 3 Toppings" price="€ 4.20" />
            <MenuItem pt="Topping Extra" en="Extra Topping" price="€ 0.50" />
            <MenuItem pt="Bowl de açaí" en="Açaí Bowl"
              desc="Inclui 3 toppings à sua escolha" descEn="Includes 3 toppings of your choice"
              price="€ 9.00" />
            <MenuItem pt="Bowl de Iogurte" en="Yogurt Bowl"
              desc="Inclui 3 toppings à sua escolha" descEn="Includes 3 toppings of your choice"
              price="€ 7.00" />
          </MenuSection>

          <AllergenLegend />
        </AccordionItem>

        <AccordionItem id="drinks" icon={<CocktailIcon />} title="Bebidas | Drinks">
          <MenuSection title="Águas" titleEn="Waters">
            <MenuItem pt="Água Filtrada (75 cl)" en="Filtered Water" price="€ 3.50" />
            <MenuItem pt="Água Filtrada com Gás (75 cl)" en="Filtered Sparkling Water" price="€ 3.50" />
            <MenuItem pt="Água Mineral Luso (50 cl)" en="Luso Mineral Water" price="€ 2.50" />
            <MenuItem pt="Água Mineral Luso (150 cl)" en="Luso Mineral Water" price="€ 4.00" />
            <MenuItem pt="Água Castello (25 cl)" en="Castello Sparkling Water" price="€ 2.50" />
            <MenuItem pt="Água Castello (75 cl)" en="Castello Sparkling Water" price="€ 3.50" />
            <MenuItem pt="Água Castello Limão (25 cl)" en="Castello Lemon Water" price="€ 2.50" />
          </MenuSection>

          <MenuSection title="Refrigerantes" titleEn="Soft Drinks">
            <MenuItem pt="Sumo em Garrafa" en="Bottled Juice"
              desc="Coca-Cola, Coca-Cola Zero, Sprite, Fanta, Fuze Tea" price="€ 3.50" />
            <MenuItem pt="Monster Energy" en="Monster Energy" price="€ 3.50" />
            <MenuItem pt="Schweppes Premium Água Tónica" en="Schweppes Premium Tonic Water"
              desc="Vários Sabores" descEn="Various Flavours" price="€ 3.00" />
            <MenuItem pt="Cerveja de Gengibre" en="Ginger Beer" price="€ 3.00" />
          </MenuSection>

          <MenuSection title="100% Natural" titleEn="">
            <MenuItem pt="Berry Beat" en="Berry Beat"
              desc="Puré de frutos vermelhos, coco, sumo de limão fresco e agave"
              descEn="Red berry purée, coconut, fresh lemon juice and agave"
              price="€ 8.00" />
            <MenuItem pt="Índigo Lemonade" en="Indigo Lemonade"
              desc="Sumo de limão fresco, sumo de gengibre fresco, hortelã e agave"
              descEn="Fresh lemon juice, fresh ginger juice, mint and agave"
              price="€ 8.00" />
            <MenuItem pt="Orange Carrot" en="Orange Carrot"
              desc="Sumo de laranja e cenoura" descEn="Orange and carrot juice"
              price="€ 8.00" />
            <MenuItem pt="Pineapple Mint" en="Pineapple Mint"
              desc="Sumo de ananás fresco, hortelã, agave e sumo de limão fresco"
              descEn="Fresh pineapple juice, mint, agave and lemon juice"
              price="€ 8.00" />
            <MenuItem pt="Ginger Taste" en="Ginger Taste"
              desc="Sumo de gengibre fresco, sumo de maçã fresco e aipo"
              descEn="Fresh ginger juice, apple juice and celery"
              price="€ 8.00" />
            <MenuItem pt="Sumo Natural do Dia" en="Natural Juice of the Day" price="€ 6.00" />
          </MenuSection>

          <MenuSection title="Batidos" titleEn="Milkshakes" note="Opção de leite de amêndoa ou leite de aveia disponível · Almond milk or oat milk option available">
            <MenuItem pt="Maracujá" en="Passion fruit"
              desc="Leite, maracujá e agave." descEn="Milk, passion fruit and agave"
              price="€ 7.00" />
            <MenuItem pt="Banana" en="Banana"
              desc="Leite, banana e agave." descEn="Milk, banana and agave"
              price="€ 7.00" />
          </MenuSection>

          <MenuSection title="Cerveja" titleEn="Beer">
            <MenuItem pt="Sagres — Imperial / Garrafa (25 cl), Zero (33 cl)" en="Sagres" price="€ 3.00" />
            <MenuItem pt="Heineken Aluminium (33 cl)" en="Heineken Aluminium" price="€ 4.00" />
            <MenuItem pt="Sagres Pint (50 cl)" en="Sagres Pint" price="€ 5.00" />
            <MenuItem pt="Sagres Preta (33 cl)" en="Sagres Preta" price="€ 3.00" />
            <MenuItem pt="Guiness Draft" en="Guiness Draft" price="€ 9.00" />
            <MenuItem pt="Desperados (33 cl)" en="Desperados" price="€ 5.00" />
            <MenuItem pt="Bohemia Original" en="Bohemia Original" price="€ 4.00" />
            <MenuItem pt="Bandida do Pomar" en="Bandida do Pomar"
              desc="Maçã / Apple, Frutos Vermelhos / Red Berries" price="€ 5.00" />
          </MenuSection>

          <MenuSection title="Sangrias" titleEn="" note="Com duas bases para escolher · With two bases to choose from">
            <MenuItem pt="Sangria de Sidra — Copo" en="Cider Sangria — Glass" price="€ 12.00" />
            <MenuItem pt="Sangria de Sidra — Jarra (1 L)" en="Cider Sangria — Pitcher" price="€ 32.00" />
            <MenuItem pt="Sangria de Espumante — Copo" en="Sparkling Sangria — Glass" price="€ 12.00" />
            <MenuItem pt="Sangria de Espumante — Jarra (1 L)" en="Sparkling Sangria — Pitcher" price="€ 37.00" />
            <MenuItem pt="Índigo Frutos Vermelhos" en="Indigo Red Berries"
              desc="Eristoff Vodka, Bombay, puré de frutos vermelhos, açúcar, sumo de lima fresco, hortelã fresca, framboesas e canela. Escolha a sua base: espumante ou sidra"
              descEn="Eristoff Vodka, Bombay, red berry purée, sugar, fresh lime juice, fresh mint, raspberries and cinnamon. Choose your base: sparkling wine or cider" />
            <MenuItem pt="Índigo Maçã Verde" en="Indigo Green Apple"
              desc="Eristoff Vodka, Triple Seco, sumo de maçã fresco, sumo de lima fresco, puré de maracujá e açúcar. Escolha a sua base: espumante ou sidra"
              descEn="Eristoff Vodka, Triple Seco, fresh apple juice, fresh lime juice, passion fruit purée and sugar. Choose your base: sparkling wine or cider" />
          </MenuSection>

          <MenuSection title="Cocktails" titleEn="Classic route">
            <MenuItem pt="Passion Mojito" en="Passion Mojito"
              desc="Rum, lima, menta fresca, maracujá e bitter"
              descEn="Rum, lime, fresh mint, passion fruit and bitter"
              price="€ 14.00" />
            <MenuItem pt="Índigo Mule" en="Indigo Mule"
              desc="Eristoff Vodka, lima, espuma de gengibre e cerveja de gengibre"
              descEn="Eristoff Vodka, lime, ginger foam and ginger beer."
              price="€ 14.00" />
            <MenuItem pt="Super Colada" en="Super Colada"
              desc="Bacardi Carta Blanca, Malibu, laranja, abacaxi, açúcar e coco"
              descEn="Bacardi Carta Blanca, Malibu, orange, pineapple, sugar and coconut"
              price="€ 14.00" />
            <MenuItem pt="Mojito" en="Mojito"
              desc="Rum, lima, hortelã fresca, açúcar e água com gás"
              descEn="Rum, lime, fresh mint, sugar and sparkling water"
              price="€ 10.00" />
            <MenuItem pt="Caipirinha" en="Caipirinha"
              desc="Cachaça, lima e açúcar" descEn="Cachaça, lime and sugar"
              price="€ 10.00" />
            <MenuItem pt="Brazilian Passion" en="Brazilian Passion"
              desc="Cachaça, maracujá, lima, manjericão e açúcar"
              descEn="Cachaça, passion fruit, lime, basil and sugar"
              price="€ 12.00" />
            <MenuItem pt="Espresso Martini" en="Espresso Martini"
              desc="Vodka, café espresso e licor de café"
              descEn="Vodka, espresso coffee and coffee liqueur"
              price="€ 12.00" />
          </MenuSection>

          <MenuSection title="Spritzes" titleEn="">
            <MenuItem pt="Martini Fiero Spritz" en="Martini Fiero Spritz"
              desc="Martini Fiero, Martini Prosecco e Água com Gás"
              descEn="Martini Fiero, Martini Prosecco and Soda Water"
              price="€ 9.00" />
            <MenuItem pt="St. Germain Spritz" en="St. Germain Spritz"
              desc="Licor St. Germain, Martini Prosecco e Água com Gás"
              descEn="St. Germain Liqueur, Martini Prosecco and Soda Water"
              price="€ 12.00" />
            <MenuItem pt="Bianco Spritz" en="Bianco Spritz"
              desc="Martini Bianco, Martini Prosecco e Água com Gás"
              descEn="Martini Bianco, Martini Prosecco and Soda Water"
              price="€ 9.00" />
            <MenuItem pt="Vibrante Spritz (Não Alcoólico)" en="Vibrante Spritz (Non-Alcoholic)"
              desc="Martini Vibrante, Sumo de Toranja ou Laranja e Água com Gás"
              descEn="Martini Vibrante, Grapefruit or Orange Juice and Soda Water"
              price="€ 7.00" />
            <MenuItem pt="Indigo Spritz" en="Indigo Spritz"
              desc="Vodka Grey Goose, Licor St. Germain, Sumo de Limão Fresco, Martini Prosecco e Bitter de Toranja"
              descEn="Grey Goose Vodka, St. Germain Liqueur, Fresh Lemon Juice, Martini Prosecco and Grapefruit Bitters"
              price="€ 12.00" />
          </MenuSection>

          <MenuSection title="Cocktails de Assinatura" titleEn="Signature Cocktails">
            <MenuItem pt="Paloma" en="Paloma"
              desc="Vibrante e cítrico. A suavidade da Tequila Patrón Reposado encontra o amargor fresco da toranja e a doçura do agave, finalizado com um toque de sal"
              descEn="Vibrant and citric. The smoothness of Patrón Reposado Tequila meets the fresh bitterness of grapefruit and the sweetness of agave, finished with a touch of salt"
              price="€ 14.00" />
            <MenuItem pt="Flower Margarita" en="Flower Margarita"
              desc="Uma reinterpretação floral e elegante. A frescura da Tequila Patrón Silver é elevada pelas notas delicadas de flor de sabugueiro do Licor St. Germain e lima"
              descEn="A floral and elegant reinterpretation. The freshness of Patrón Silver Tequila is elevated by the delicate elderflower notes of St. Germain Liqueur and lime"
              price="€ 14.00" />
            <MenuItem pt="Watermelon Mojito" en="Watermelon Mojito"
              desc="O sabor do verão. Melancia fresca macerada com hortelã, açúcar amarelo e Rum Bacardi Carta Blanca para um final doce e extremamente refrescante"
              descEn="The taste of summer. Fresh watermelon muddled with mint, brown sugar and Bacardi Carta Blanca Rum for a sweet and extremely refreshing finish"
              price="€ 12.00" />
            <MenuItem pt="Silver Fizz" en="Silver Fizz"
              desc="Sofisticado e aveludado. Vodka Grey Goose harmonizada com a doçura suave da pera, finalizada com uma espuma cítrica de manjericão que desperta os sentidos"
              descEn="Sophisticated and velvety. Grey Goose Vodka harmonized with the soft sweetness of pear, finished with a citric basil foam that awakens the senses"
              price="€ 14.00" />
            <MenuItem pt="Bombay Garden" en="Bombay Garden"
              desc="Um passeio botânico num copo. Gin Bombay Sapphire e Licor St. Germain perfeitamente equilibrados com o aroma fresco das folhas de manjericão"
              descEn="A botanical stroll in a glass. Bombay Sapphire Gin and St. Germain Liqueur perfectly balanced with the fresh aroma of basil leaves"
              price="€ 12.00" />
          </MenuSection>

          <MenuSection title="Espirituosas" titleEn="Fine Spirits">
            <h4>Vodka e Rum (5 cl)</h4>
            <MenuItem pt="Eristoff" en="Eristoff" price="€ 10.00" />
            <MenuItem pt="Grey Goose" en="Grey Goose" price="€ 12.00" />
            <MenuItem pt="Bacardi" en="Bacardi" price="€ 10.00" />
            <MenuItem pt="Bacardi Gran Reserva 8 years" en="Bacardi Gran Reserva 8 years" price="€ 12.00" />

            <h4>Gin (5 cl)</h4>
            <MenuItem pt="Bombay Dry" en="Bombay Dry" price="€ 10.00" />
            <MenuItem pt="Bombay Sapphire" en="Bombay Sapphire" price="€ 12.00" />
            <MenuItem pt="Bombay Bramble" en="Bombay Bramble" price="€ 12.00" />
            <MenuItem pt="Beefeater Pink" en="Beefeater Pink" price="€ 12.00" />
            <MenuItem pt="Ophir" en="Ophir" price="€ 12.00" />
            <MenuItem pt="Gin Mare" en="Gin Mare" price="€ 14.00" />
            <MenuItem pt="G'vine Floraison" en="G'vine Floraison" price="€ 14.00" />
            <MenuItem pt="Hendricks" en="Hendricks" price="€ 14.00" />
            <MenuItem pt="Monkey 47" en="Monkey 47" price="€ 16.00" />

            <h4>Vermutes e bitters (6 cl)</h4>
            <MenuItem pt="Martini (Bitter / Riserva Ambrato / Riserva Rubino)" en="Martini" price="€ 7.00" />
            <MenuItem pt="Martini Rosso, Bianco" en="Martini Rosso, Bianco" price="€ 7.00" />
            <MenuItem pt="Averna Amaro" en="Averna Amaro" price="€ 10.00" />
            <MenuItem pt="Campari" en="Campari" price="€ 8.00" />

            <h4>Whisky (5 cl)</h4>
            <MenuItem pt="Jameson / Teeling Irish / Dewar's White Label" en="Jameson / Teeling Irish / Dewar's White Label" price="€ 12.00" />
            <MenuItem pt="Aberfeldy 12 / Glenmorangie 10 / Nikka" en="Aberfeldy 12 / Glenmorangie 10 / Nikka" price="€ 14.00" />
            <MenuItem pt="Laphroaig" en="Laphroaig" price="€ 16.00" />

            <h4>Tequila e Mezcal (5 cl)</h4>
            <MenuItem pt="Jose Cuervo" en="Jose Cuervo" price="€ 10.00" />
            <MenuItem pt="Patrón Silver" en="Patrón Silver" price="€ 12.00" />
            <MenuItem pt="Patrón Reposado" en="Patrón Reposado" price="€ 14.00" />
            <MenuItem pt="Patrón Añejo" en="Patrón Añejo" price="€ 16.00" />
            <MenuItem pt="Mezcal Monte Lobos" en="Mezcal Monte Lobos" price="€ 12.00" />

            <h4>Cognac e Aguardente</h4>
            <MenuItem pt="Pisco 1615 / Cachaça" en="Pisco 1615 / Cachaça" price="€ 12.00" />
            <MenuItem pt="Mavem / Medronho Arbun" en="Mavem / Medronho Arbun" price="€ 14.00" />
            <MenuItem pt="Brandy Ysabel Regina" en="Brandy Ysabel Regina" price="€ 16.00" />
          </MenuSection>
        </AccordionItem>

        <AccordionItem id="wine" icon={<WineIcon />} title="Carta de Vinhos | Wine List">
          <MenuSection title="Vinhos Brancos" titleEn="White Wines">
            <h4>Lisboa</h4>
            <MenuItem pt="Indigo por Adega Mãe Branco" en="Indigo by Adega Mãe White" price="€ 5.00 / € 21.00" />
            <MenuItem pt="Chocapalha Reserva Branco" en="Chocapalha Reserve White" price="€ 36.00" />
            <MenuItem pt="Morgado de Bucelas Arinto" en="Morgado de Bucelas Arinto" price="€ 22.00" />
            <MenuItem pt="Quinta da Boa Esperança Fernão Pires Branco" en="Quinta da Boa Esperança Fernão Pires White" price="€ 23.00" />
            <h4>Douro</h4>
            <MenuItem pt="Quinta do Vallado Branco" en="Quinta do Vallado White" price="€ 22.00" />
            <MenuItem pt="Quinta do Cardo Branco" en="Quinta do Cardo White" price="€ 23.00" />
            <h4>Dão</h4>
            <MenuItem pt="Ribeiro Santo Encruzado Branco" en="Ribeiro Santo Encruzado White" price="€ 23.00" />
            <MenuItem pt="Bella Sauvignon Blanc" en="Bella Sauvignon Blanc" price="€ 28.00" />
            <h4>Bairrada</h4>
            <MenuItem pt="Luís Pato Vinhas Velhas Branco" en="Luís Pato Old Vines White" price="€ 22.00" />
            <h4>Setúbal</h4>
            <MenuItem pt="Sudoeste Sauvignon Blanc" en="Sudoeste Sauvignon Blanc" price="€ 22.00" />
            <h4>Alentejo</h4>
            <MenuItem pt="Monte da Peceguina Branco" en="Monte da Peceguina White" price="€ 28.00" />
            <MenuItem pt="Reynolds Branco" en="Reynolds White" price="€ 22.00" />
            <h4>Vinho Verde</h4>
            <MenuItem pt="Marquês de Lara" en="Marquês de Lara" price="€ 5.00 / € 21.00" />
            <MenuItem pt="Pequenos Rebentos Alvarinho" en="Pequenos Rebentos Alvarinho" price="€ 22.00" />
          </MenuSection>

          <MenuSection title="Vinhos Rosés" titleEn="Rosé Wines">
            <h4>Lisboa</h4>
            <MenuItem pt="Indigo por Adega Mãe Rosé" en="Indigo by Adega Mãe Rosé" price="€ 5.00 / € 21.00" />
            <MenuItem pt="Quinta da Boa Esperança Rosé" en="Quinta da Boa Esperança Rosé" price="€ 22.00" />
            <h4>Douro</h4>
            <MenuItem pt="Quinta do Cardo Rosé" en="Quinta do Cardo Rosé" price="€ 6.00 / € 24.00" />
            <h4>Alentejo</h4>
            <MenuItem pt="Freixo Terroir Rosé" en="Freixo Terroir Rosé" price="€ 22.00" />
          </MenuSection>

          <MenuSection title="Espumantes" titleEn="Sparkling Wines">
            <MenuItem pt="Adega Mãe Blanc de Blancs" en="Adega Mãe Blanc de Blancs" price="€ 8.00 / € 35.00" />
            <MenuItem pt="Quinta da Romeira Bruto" en="Quinta da Romeira Brut" price="€ 31.00" />
            <MenuItem pt="Filipa Pato 3B Rosé" en="Filipa Pato 3B Rosé" price="€ 38.00" />
          </MenuSection>

          <MenuSection title="Vinhos Tintos" titleEn="Red Wines">
            <h4>Lisboa</h4>
            <MenuItem pt="Indigo por Adega Mãe Tinto" en="Indigo by Adega Mãe Red" price="€ 5.00 / € 22.00" />
            <MenuItem pt="Adega Mãe Cabernet Sauvignon Tinto" en="Adega Mãe Cabernet Sauvignon Red" price="€ 22.00" />
            <MenuItem pt="Adega Mãe Reserva Tinto" en="Adega Mãe Reserve Red" price="€ 30.00" />
            <MenuItem pt="Casa Santos Lima Pinot Noir Tinto" en="Casa Santos Lima Pinot Noir Red" price="€ 22.00" />
            <MenuItem pt="Chocapalha Castelão Tinto" en="Chocapalha Castelão Red" price="€ 23.00" />
            <MenuItem pt="Quinta da Boa Esperança Touriga Nacional Tinto" en="Quinta da Boa Esperança Touriga Nacional Red" price="€ 28.00" />
            <h4>Douro</h4>
            <MenuItem pt="Val Moreira Tinto" en="Val Moreira Red" price="€ 28.00" />
            <MenuItem pt="Quinta do Crasto Tinto" en="Quinta do Crasto Red" price="€ 23.00" />
            <h4>Dão</h4>
            <MenuItem pt="Passarela O Abanico Tinto" en="Passarela O Abanico Red" price="€ 22.00" />
            <MenuItem pt="Ribeiro Santo Tinto" en="Ribeiro Santo Red" price="€ 23.00" />
            <h4>Bairrada</h4>
            <MenuItem pt="Kompassus Tinto" en="Kompassus Red" price="€ 22.00" />
            <h4>Setúbal</h4>
            <MenuItem pt="Horácio Simões Tradição Tinto" en="Horácio Simões Tradition Red" price="€ 22.00" />
            <h4>Alentejo</h4>
            <MenuItem pt="Monte da Peceguina Tinto" en="Monte da Peceguina Red" price="€ 28.00" />
            <MenuItem pt="Pousio Selection Tinto" en="Pousio Selection Red" price="€ 23.00" />
          </MenuSection>

          <MenuSection title="Vinhos Naturais" titleEn="Natural Wines">
            <MenuItem pt="Vale da Capucha Branco" en="Vale da Capucha White" price="€ 28.00" />
            <MenuItem pt="Aphros Loureiro Branco" en="Aphros Loureiro White" price="€ 32.00" />
            <MenuItem pt="João Tavares Pina Rosado" en="João Tavares Pina Rosado" price="€ 31.00" />
            <MenuItem pt="Vale da Capucha Tinto" en="Vale da Capucha Red" price="€ 31.00" />
            <MenuItem pt="Casa Mouraz Tinto" en="Casa Mouraz Red" price="€ 33.00" />
            <h4>Pet Nat</h4>
            <MenuItem pt="Pequenos Rebentos Pet Nat" en="Pequenos Rebentos Pet Nat" price="€ 31.00" />
            <MenuItem pt="Aphros Pet Nat Rosé" en="Aphros Pet Nat Rosé" price="€ 36.00" />
          </MenuSection>
        </AccordionItem>
      </Accordion>

      <h2 className="section-heading">EVENTS</h2>
      <Accordion>
        <AccordionItem id="group" icon={<GroupIcon />} title="Menus de Grupo | Group Menus">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="group-cover" src="/images/group/cover-sunset.jpg" alt="Sunset over Foz do Lizandro" />

          <p className="group-quote">
            Índigo é cozinha contemporânea, para saborear de frente para o mar, entre beats, pranchas, pés na areia, calor do sol e o cheiro a maresia
          </p>
          <p>
            Inspirada no azul forte da Foz do Lizandro, no prato cruzamos simplicidade, rigor e beleza. Cozinha de conforto, às vezes para comer tranquilamente à mão, feita de bons sabores e produtos mediterrânicos, sem esquecer alguns pratos do mundo.
          </p>
          <p>
            <em>
              Inspired by the strong blue of Foz do Lizandro, our dishes combine simplicity, rigor and beauty. Comfort cuisine, sometimes to be eaten quietly by hand, made with good flavors and Mediterranean products, not forgetting some dishes from around the world.
            </em>
          </p>

          <div className="group-collage">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={`/images/group/collage-${i}.jpg`} alt="" />
            ))}
          </div>

          <MenuSection title="Menu € 30" titleEn="" note="Entradas é 1 para 3 pessoas · Starters serve 3">
            <h4>Couvert</h4>
            <p className="menu-item-desc">
              Crackers de sementes, crackers de queijo e cebola, toast, pão de massa mãe, Hummus, manteiga de ouriço-do-mar e maionese de gambas
              <em>Seed crackers, cheese and onion crackers, toast, sourdough bread, hummus, sea urchin butter, and prawn mayonnaise</em>
            </p>
            <h4>Entradas na Mesa</h4>
            <MenuItem pt="Puntilhitas" en="Mini squid"
              desc="Mini lulas envolvidas em farinha de milho, lima e molho de lima e cebolinho com maionese de coentros"
              descEn="Mini squid dusted in corn flour, lime, and lime and chive sauce with coriander mayonnaise" />
            <MenuItem pt="Croquetas de jamón e vitela (1 para 3 pessoas)" en="Ham and veal croquettes"
              desc="Bolinhas de presunto ibérico crocantes com mostarda e cebolinho fresco"
              descEn="Crispy Iberian ham croquettes with mustard and fresh chives" />
            <h4>Principal</h4>
            <MenuItem pt="Paelha negra" en="Black paella"
              desc="Choco, camarão e mexilhão em meia concha"
              descEn="Cuttlefish, shrimp, and mussels on the half shell" />
            <h4>Sobremesa</h4>
            <MenuItem pt="Mousse de manga" en="Mango mousse"
              desc="Sobremesa de fusão com manga, lima da região, pistácio crocante e nata vegan"
              descEn="Fusion dessert with mango, local lime, crunchy pistachio and vegan cream" />
          </MenuSection>

          <MenuSection title="Menu € 60" titleEn="" note="Entradas é 1 para 3 pessoas · Starters serve 3">
            <h4>Couvert</h4>
            <p className="menu-item-desc">
              Crackers de sementes, crackers de queijo e cebola, toast, pão de massa mãe, Hummus, manteiga de ouriço-do-mar e maionese de gambas
              <em>Seed crackers, cheese and onion crackers, toast, sourdough bread, hummus, sea urchin butter, and prawn mayonnaise</em>
            </p>
            <h4>Entradas na Mesa</h4>
            <MenuItem pt="Pica pau de vitela" en="Veal pica pau"
              desc="Carne de novilho apurada com alho, louro, vinho branco e pickles. Acompanha pão de massa mãe torrado"
              descEn="Beef with garlic, bay leaf, white wine, and pickles. Served with toasted sourdough bread" />
            <MenuItem pt="Camarão à guilho" en="Garlic shrimp"
              desc="Camarão salteado em azeite e alho, refrescado com vinho branco da região"
              descEn="Shrimp sautéed in olive oil and garlic, deglazed with local white wine" />
            <h4>Principal (Escolha seu prato)</h4>
            <MenuItem pt="Ribeye grelhado 250g" en="Grilled Ribeye 250g"
              desc="Entrecôte grelhado, legumes no grill e batata frita caseira"
              descEn="Grilled Angus entrecôte or flank steak, grilled vegetables, and homemade French fries" />
            <MenuItem pt="Espetinho do mar" en="Sea skewer"
              desc="Espetada de peixe fresco, camarão e vieira no grill, acompanhada por legumes assados, batata-doce assada com molho de ostras, ponzu, lima, e azeite"
              descEn="Grilled fish, shrimp, and scallop skewer, served with roasted vegetables, roasted sweet potato with an oyster, ponzu, lime and olive oil sauce" />
            <MenuItem pt="Paelha veggie" en="Veggie paella"
              desc="Tofu salteado, bimis, espargos verdes, cogumelos shiitake e tomate cereja assado"
              descEn="Sautéed tofu, bimi broccoli, green asparagus, shiitake mushrooms, and roasted cherry tomato" />
            <h4>Sobremesa</h4>
            <MenuItem pt="Mousse de manga" en="Mango mousse"
              desc="Sobremesa de fusão com manga, lima da região, pistácio crocante e nata vegan"
              descEn="Fusion dessert with mango, local lime, crunchy pistachio and vegan cream" />
          </MenuSection>

          <MenuSection title="Aditivos de Bebidas" titleEn="Beverage Additives" note="Apenas durante o serviço de jantar (aprox. 2h) · Only during dinner service (approx. 2h)">
            <MenuItem pt="Opção 1" en="Option 1"
              desc="Bar aberto de: cervejas, vinho da casa, refrigerantes, águas e café"
              descEn="Open bar: beers, house wine, soft drinks, water and coffee"
              price="€ 20.00" />
            <MenuItem pt="Opção 2" en="Option 2"
              desc="Bar aberto de: sangria, cervejas, vinho da casa, refrigerantes, águas e café"
              descEn="Open bar: sangria, beers, house wine, soft drinks, water and coffee"
              price="€ 30.00" />
            <p className="menu-note">Exclusividade sob consulta · Exclusivity on request</p>
          </MenuSection>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="group-closing" src="/images/group/beach.jpg" alt="Foz do Lizandro beach at golden hour" />
        </AccordionItem>
      </Accordion>

      <h2 className="section-heading">MORE</h2>
      <Accordion>
        <LinkItem icon={<LocationIcon />} title="Localização | Location" href={LOCATION_URL} />
        <AccordionItem id="contact" icon={<PhoneIcon />} title="Contacte-nos | Contact Us" subtitle="Indigo Beach Club">
          <p className="contact-name">Indigo Beach Club</p>
          <a className="contact-row" href={`tel:${PHONE}`}>
            <PhoneIcon />
            <span>{PHONE}</span>
          </a>
        </AccordionItem>
        <LinkItem icon={<ReviewIcon />} title="Review your Experience" href={REVIEW_URL} />
        <LinkItem icon={<WebcamIcon />} title="Foz do Lizandro Beach Cam" href={BEACHCAM_URL} />
        <LinkItem icon={<InstagramIcon />} title="Instagram" subtitle="@indigo_beachclub" href={INSTAGRAM_URL} />
      </Accordion>

      <p className="legal">
        Preços incluem IVA à taxa legal em vigor.<br />
        <em>Prices include Value Added Tax at the legal rate in force.</em>
      </p>
    </main>
  );
}
