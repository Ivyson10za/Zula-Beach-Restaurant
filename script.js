const MENU = {
  breakfast: [{
    title: "Breakfast", items: [
      ["Morning After", "Chicken livers, red onion, secret spice, chillies, garlic, fresh thyme", 135],
      ["Standard Breakfast", "2 eggs, bacon, mushrooms, beef/pork sausage, cherry tomato, toast", 85],
      ["Breakfast Bun", "100g beef patty, tomato sheba, bacon, fried egg, caramelised onions, avocado, cheddar", 140],
      ["Breakfast Hash", "1 egg, 3 hash browns, bacon, jalapeño, avo, mushroom sauce, sweet chilli mayo", 95]
    ]}],
  mains: [{
    title: "The Mains", items: [
      ["Inkomazi Chicken Bunny Chow", "Chicken curry, tomato achar, butternut fennel chakalaka", 150],
      ["Chicken Schnitzel", "Panko-crusted chicken breast, mushroom sauce, seasonal salad", 145],
      ["Rooibos Chicken", "Grilled quarter chicken, rooibos glaze, wedges, brinjal and apricot relish", 145],
      ["Chicken Curry", "Curry chicken thighs, brown rice pilaf, tomato-chilli salsa", 185],
      ["Fish & Chips", "Tempura beer-battered hake, pickled cucumber, roasted garlic and lime aioli", 185],
      ["Whole Fish", "Fresh line fish with lemon garlic potatoes and jalapeño", 385],
      ["Kingklip", "250g fresh kingklip, garlic butter sauce, peas and mint puree", 240],
      ["Seafood Mix", "Mussels, prawns, calamari and hake served with a side of your choice", 260],
      ["Salt & Pepper Squid", "Fried squid with tomato achar, sprout slump, sesame salad", 130],
      ["Jalapeño Beef Rump", "Mashed potatoes and roasted cherry tomatoes with jalapeño chimichurri", 195],
      ["Beef Rump", "300g rump steak with a side option of your choice", 195],
      ["Lamb Cutlets", "Grilled lamb cutlets with a side option of your choice", 265],
      ["Lamb Chops", "300g grilled lamb chops with a side option of your choice", 220]
    ]}],
  drinks: [
    { title: "Beers", items: [
      ["Amstel",42],["Black Label",42],["Castle",42],["Castle Lite",42],["Castle Lite Draught",49],["Castle Milkstout",38],
      ["Corona",45],["Flying Fish Lemon",40],["Hansa Pilsener",37],["Heineken",44],["Heineken Zero",49],["Heineken Silver",49],
      ["Sol",49],["Stella Artois",42],["Stella Draught",55],["Windhoek Lager",42],["Windhoek Draught",45]]},
    { title: "Ciders", items: [
      ["Bernini Amber",42],["Bernini Blush",42],["Bernini Classic",42],["Brutal Fruit Ruby Apple",42],["Brutal Fruit Strawberry",42],
      ["Brutal Fruit Litchi",42],["Chateau Del Rei Red",42],["Chateau Del Rei White",42],["Hunters Dry",42],["Hunters Extreme",45],
      ["Hunters Gold",42],["Ice Tropez",165],["Savanna Dry",49],["Savanna Lite",49],["Smirnoff Pinetwist",42]]},
    { title: "Cool Drinks", items: [
      ["Appletiser",40],["Grapetiser",40],["Schweppes Coke",28],["Schweppes 200ml (Dry Lemon, Ginger Ale, Lemonade, Soda, Tonic)",27],
      ["Coke Zero",27],["Pink Tonic",27],["Cordial (Cola Tonic, Lime, Passion Fruit)",10],["Fountain Coke / Sprite",24],["Grenadine",10],
      ["Juice (Apple, Cranberry, Grenadilla, Mango, Orange, Strawberry, Tropical)",29],["Red Bull / Sugarfree / Watermelon",45],
      ["Valpre Sparkling / Still Water",30]]}
  ]
};

const box = document.getElementById("menu-content");
function render(tab) {
  box.innerHTML = '<div class="cols">' + MENU[tab].map(cat =>
    `<div class="cat"><h3>${cat.title}</h3>` + cat.items.map(i => {
      const [name, desc, price] = i.length === 3 ? i : [i[0], "", i[1]];
      return `<div class="item"><div><b>${name}</b>${desc ? `<em>${desc}</em>` : ""}</div><span class="price">R${price}</span></div>`;
    }).join("") + `</div>`).join("") + "</div>";
}
render("breakfast");

document.getElementById("tabs").addEventListener("click", e => {
  if (e.target.tagName !== "BUTTON") return;
  document.querySelectorAll("#tabs button").forEach(b => b.classList.remove("active"));
  e.target.classList.add("active");
  render(e.target.dataset.tab);
});

const nav = document.getElementById("nav");
addEventListener("scroll", () => nav.classList.toggle("solid", scrollY > 60));
const links = document.getElementById("links");
document.getElementById("burger").onclick = () => links.classList.toggle("open");
links.addEventListener("click", () => links.classList.remove("open"));

const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("in")), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();
