"use client";

import { useState } from "react";

type Product = {
  id: string;
  pt: string;
  en: string;
  desc: string;
  descEn: string;
  price: string;
  allergens: string[];
  active: boolean;
  bestseller?: boolean;
};

type Category = {
  id: string;
  label: string;
  count: number;
};

const CATEGORIES: Category[] = [
  { id: "breakfast", label: "Pequeno-Almoço · Breakfast", count: 14 },
  { id: "coffee", label: "Café · Coffee", count: 28 },
  { id: "food", label: "Comida · Food", count: 38 },
  { id: "drinks", label: "Bebidas · Drinks", count: 36 },
  { id: "wine", label: "Carta de Vinhos · Wine List", count: 35 },
  { id: "group", label: "Menus de Grupo · Group Menus", count: 4 },
];

const SAMPLE_BY_CATEGORY: Record<string, Product[]> = {
  breakfast: [
    { id: "br-1", pt: "Ovos mexidos com abacate", en: "Scrambled eggs with avocado", desc: "Ovos mexidos biológicos, abacate laminado e pão rústico e integral de massa mãe.", descEn: "Scrambled organic eggs, sliced avocado, and rustic and whole wheat sourdough bread", price: "9.80", allergens: ["gluten", "eggs"], active: true, bestseller: true },
    { id: "br-2", pt: "Bacon e ovo", en: "Bacon & egg", desc: "Bacon tostado, croissant, ovo estrelado biológico e panquecas artesanais", descEn: "Toasted bacon, croissant, fried organic egg, and artisanal pancakes", price: "8.90", allergens: ["gluten", "eggs", "dairy"], active: true },
    { id: "br-3", pt: "Panquecas com fruta", en: "Pancakes with fruit", desc: "Panquecas artesanais, morangos frescos, banana, mel regional e frutos secos", descEn: "Artisanal pancakes, fresh strawberries, banana, regional honey, and nuts", price: "8.50", allergens: ["gluten", "eggs", "nuts", "dairy"], active: true },
    { id: "br-4", pt: "Brunch Indigo", en: "Indigo Brunch", desc: "Pão de massa mãe, ovos mexidos biológicos, bacon, panquecas com mel e doce, abacate, fruta, mini gaufre, scone e iogurte. Inclui sumo de laranja e café", descEn: "Sourdough bread, organic scrambled eggs, bacon, pancakes with honey and jam, avocado, fruit, mini waffle, scone, and yogurt. Includes orange juice and coffee", price: "14.00", allergens: ["gluten", "eggs", "nuts", "dairy"], active: true, bestseller: true },
    { id: "br-5", pt: "Mousse de manga", en: "Mango mousse", desc: "Sobremesa de fusão com manga, lima da região, pistácio crocante e nata vegan", descEn: "Fusion dessert with mango, local lime, crunchy pistachio and vegan cream", price: "8.00", allergens: ["nuts"], active: true },
  ],
  coffee: [
    { id: "co-1", pt: "Espresso", en: "Espresso", desc: "", descEn: "", price: "2.00", allergens: [], active: true },
    { id: "co-2", pt: "Cappuccino", en: "Cappuccino", desc: "", descEn: "", price: "4.50", allergens: ["dairy"], active: true },
    { id: "co-3", pt: "Flat White", en: "Flat White", desc: "Meia de Leite", descEn: "Flat White", price: "4.50", allergens: ["dairy"], active: true },
    { id: "co-4", pt: "V60 Single", en: "V60 Single", desc: "Filter brew, 2 cups", descEn: "Filter brew, 2 cups", price: "6.00", allergens: [], active: true },
    { id: "co-5", pt: "Matcha Latte", en: "Matcha Latte", desc: "", descEn: "", price: "5.50", allergens: ["dairy"], active: true },
    { id: "co-6", pt: "Iced Spirulina Latte", en: "Iced Spirulina Latte", desc: "", descEn: "", price: "6.00", allergens: ["dairy"], active: false },
  ],
  food: [
    { id: "fo-1", pt: "Couvert", en: "Couvert", desc: "Crackers de sementes, queijo e cebola, pão de massa mãe, hummus, manteiga de ouriço-do-mar e maionese de gambas", descEn: "Seed crackers, cheese and onion crackers, toast, sourdough bread, hummus, sea urchin butter, and prawn mayonnaise", price: "7.00", allergens: ["gluten", "eggs", "dairy", "sesame", "crustaceans", "mollusks"], active: true },
    { id: "fo-2", pt: "Hambúrguer angus Indigo", en: "Indigo Angus burger", desc: "Pão brioche, carne Angus, cebola caramelizada, queijo cheddar, bacon, tomate e alface", descEn: "Brioche bun, Angus beef, caramelized onion, cheddar cheese, bacon, tomato, and lettuce", price: "18.50", allergens: ["gluten", "eggs", "dairy"], active: true, bestseller: true },
    { id: "fo-3", pt: "Paelha negra", en: "Black paella", desc: "Choco, camarão e mexilhão em meia concha (30 min · 2 pax)", descEn: "Cuttlefish, shrimp, and mussels on the half shell", price: "37.00", allergens: ["gluten", "eggs", "nuts", "sulphites", "crustaceans", "mollusks"], active: true },
    { id: "fo-4", pt: "Indigo satay", en: "Indigo satay", desc: "Tiras de frango marinadas em gergelim, legumes locais, molho picante de amendoim e ostra, arroz jasmim e caju torrado", descEn: "Sesame-marinated chicken strips, local vegetables, spicy peanut and oyster sauce, jasmine rice, and toasted cashews", price: "23.90", allergens: ["nuts", "sesame", "peanuts", "soja", "mollusks"], active: true },
  ],
  drinks: [
    { id: "dr-1", pt: "Indigo Spritz", en: "Indigo Spritz", desc: "Vodka Grey Goose, Licor St. Germain, Sumo de Limão, Martini Prosecco e Bitter de Toranja", descEn: "Grey Goose Vodka, St. Germain Liqueur, Fresh Lemon Juice, Martini Prosecco and Grapefruit Bitters", price: "12.00", allergens: [], active: true, bestseller: true },
    { id: "dr-2", pt: "Passion Mojito", en: "Passion Mojito", desc: "Rum, lima, menta fresca, maracujá e bitter", descEn: "Rum, lime, fresh mint, passion fruit and bitter", price: "14.00", allergens: [], active: true },
    { id: "dr-3", pt: "Índigo Lemonade", en: "Indigo Lemonade", desc: "Sumo de limão fresco, gengibre fresco, hortelã e agave", descEn: "Fresh lemon juice, fresh ginger juice, mint and agave", price: "8.00", allergens: [], active: true },
  ],
  wine: [
    { id: "wi-1", pt: "Indigo por Adega Mãe Branco", en: "Indigo by Adega Mãe White", desc: "Lisboa · House white", descEn: "Lisboa region", price: "21.00", allergens: ["sulphites"], active: true },
    { id: "wi-2", pt: "Filipa Pato 3B Rosé", en: "Filipa Pato 3B Rosé", desc: "Espumante · Sparkling", descEn: "Sparkling rosé", price: "38.00", allergens: ["sulphites"], active: true },
  ],
  group: [
    { id: "gr-1", pt: "Menu € 30", en: "Menu €30", desc: "Couvert, entradas, paelha negra, mousse de manga", descEn: "Couvert, starters, black paella, mango mousse", price: "30.00", allergens: [], active: true },
    { id: "gr-2", pt: "Menu € 60", en: "Menu €60", desc: "Couvert, 2 entradas, prato principal à escolha, sobremesa", descEn: "Couvert, 2 starters, choice of main, dessert", price: "60.00", allergens: [], active: true },
  ],
};

const ALL_ALLERGENS = ["gluten", "eggs", "dairy", "peanuts", "lupin", "soja", "sulphites", "mustard", "nuts", "crustaceans", "mollusks", "fish", "sesame"];

export default function AdminPanel() {
  const [activeCat, setActiveCat] = useState("breakfast");
  const [editing, setEditing] = useState<Product | null>(null);
  const [adding, setAdding] = useState(false);

  const products = SAMPLE_BY_CATEGORY[activeCat] ?? [];
  const blank: Product = { id: "new", pt: "", en: "", desc: "", descEn: "", price: "", allergens: [], active: true, bestseller: false };
  const form = editing ?? (adding ? blank : null);

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Indigo" />
          <div>
            <div className="admin-brand-name">Indigo</div>
            <div className="admin-brand-sub">Admin · Prototype</div>
          </div>
        </div>

        <nav className="admin-nav">
          <div className="admin-nav-label">Catálogo</div>
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              className={`admin-nav-item ${c.id === activeCat ? "active" : ""}`}
              onClick={() => { setActiveCat(c.id); setEditing(null); setAdding(false); }}
              type="button"
            >
              <span>{c.label}</span>
              <span className="admin-pill">{c.count}</span>
            </button>
          ))}

          <div className="admin-nav-label">Site</div>
          <a className="admin-nav-item" href="/">
            <span>Pré-visualizar site</span>
            <span className="admin-nav-arrow">↗</span>
          </a>
        </nav>

        <div className="admin-footer">
          <span className="admin-dot" /> Prototype · não ligado
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div>
            <div className="admin-crumb">Catálogo / {CATEGORIES.find(c => c.id === activeCat)?.label}</div>
            <h1 className="admin-title">{CATEGORIES.find(c => c.id === activeCat)?.label}</h1>
          </div>
          <div className="admin-actions">
            <input className="admin-search" placeholder="Procurar produtos..." />
            <button className="admin-btn ghost" type="button">Importar PDF</button>
            <button className="admin-btn primary" type="button" onClick={() => { setAdding(true); setEditing(null); }}>+ Novo produto</button>
          </div>
        </header>

        <section className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: "28%" }}>Nome (PT / EN)</th>
                <th>Descrição</th>
                <th style={{ width: 90 }}>Preço</th>
                <th style={{ width: 110 }}>Mais vendido</th>
                <th style={{ width: 150 }}>Alergénios</th>
                <th style={{ width: 90 }}>Estado</th>
                <th style={{ width: 90 }}>Acções</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id}>
                  <td>
                    <div className="admin-name">{p.pt}</div>
                    <div className="admin-name-en">{p.en}</div>
                  </td>
                  <td>
                    <div className="admin-desc">{p.desc || "—"}</div>
                  </td>
                  <td>€ {p.price}</td>
                  <td>
                    <button
                      type="button"
                      className={`admin-bestseller-toggle ${p.bestseller ? "on" : "off"}`}
                      aria-pressed={!!p.bestseller}
                      aria-label="Mais vendido"
                      onClick={() => {/* mock toggle */}}
                    >
                      <span className="admin-bestseller-dot" />
                      {p.bestseller ? "Sim" : "Não"}
                    </button>
                  </td>
                  <td>
                    <div className="admin-tags">
                      {p.allergens.length === 0 && <span className="admin-tag muted">nenhum</span>}
                      {p.allergens.slice(0, 3).map(a => <span key={a} className="admin-tag">{a}</span>)}
                      {p.allergens.length > 3 && <span className="admin-tag muted">+{p.allergens.length - 3}</span>}
                    </div>
                  </td>
                  <td>
                    <span className={`admin-status ${p.active ? "on" : "off"}`}>
                      <span className="admin-status-dot" />
                      {p.active ? "Ativo" : "Oculto"}
                    </span>
                  </td>
                  <td>
                    <button className="admin-link" type="button" onClick={() => { setEditing(p); setAdding(false); }}>Editar</button>
                    <button className="admin-link danger" type="button">Apagar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="admin-table-footer">
            <span>{products.length} produtos · alterações guardadas há 2 min (mock)</span>
            <span>1 — {products.length} de {products.length}</span>
          </div>
        </section>
      </main>

      {form && (
        <aside className="admin-drawer" role="dialog" aria-modal="true">
          <div className="admin-drawer-head">
            <div>
              <div className="admin-crumb">{adding ? "Novo produto" : "Editar"}</div>
              <h2 className="admin-drawer-title">{adding ? "Novo produto" : form.pt || "Sem nome"}</h2>
            </div>
            <button className="admin-icon-btn" type="button" onClick={() => { setEditing(null); setAdding(false); }} aria-label="Close">✕</button>
          </div>

          <form className="admin-form" onSubmit={e => { e.preventDefault(); setEditing(null); setAdding(false); }}>
            <div className="admin-grid-2">
              <label>
                <span>Nome (Português)</span>
                <input defaultValue={form.pt} placeholder="ex. Ovos mexidos com abacate" />
              </label>
              <label>
                <span>Name (English)</span>
                <input defaultValue={form.en} placeholder="e.g. Scrambled eggs with avocado" />
              </label>
            </div>

            <label>
              <span>Descrição (Português)</span>
              <textarea rows={3} defaultValue={form.desc} placeholder="Ingredientes e detalhes..." />
            </label>
            <label>
              <span>Description (English)</span>
              <textarea rows={3} defaultValue={form.descEn} placeholder="Ingredients and details..." />
            </label>

            <div className="admin-grid-2">
              <label>
                <span>Preço (€)</span>
                <input defaultValue={form.price} placeholder="9.80" />
              </label>
              <label>
                <span>Categoria</span>
                <select defaultValue={activeCat}>
                  {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                </select>
              </label>
            </div>

            <fieldset className="admin-fieldset">
              <legend>Alergénios · Allergens</legend>
              <div className="admin-checkgrid">
                {ALL_ALLERGENS.map(a => (
                  <label key={a} className="admin-check">
                    <input type="checkbox" defaultChecked={form.allergens.includes(a)} />
                    <span>{a}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="admin-toggle">
              <input type="checkbox" defaultChecked={form.active} />
              <span>Visível no site público</span>
            </label>

            <label className="admin-toggle">
              <input type="checkbox" defaultChecked={!!form.bestseller} />
              <span>Marcar como &ldquo;Mais vendido&rdquo; (mostra estrela no site)</span>
            </label>

            <div className="admin-form-footer">
              {!adding && <button type="button" className="admin-btn danger-ghost">Apagar produto</button>}
              <div className="admin-form-footer-right">
                <button type="button" className="admin-btn ghost" onClick={() => { setEditing(null); setAdding(false); }}>Cancelar</button>
                <button type="submit" className="admin-btn primary">{adding ? "Criar produto" : "Guardar alterações"}</button>
              </div>
            </div>

            <p className="admin-form-hint">Protótipo · alterações não são guardadas.</p>
          </form>
        </aside>
      )}
    </div>
  );
}
