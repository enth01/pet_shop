import { DB } from '@/lib/db-types';
import { hashPassword } from '../src/lib/hashing';
import { randomInt } from 'crypto';
import type { Kysely } from 'kysely'

export async function seed(db: Kysely<DB>): Promise<void> {
	await db.deleteFrom("favorite_products").execute();
	await db.deleteFrom("session").execute();
	await db.deleteFrom("orders").execute();
	await db.deleteFrom("order_product").execute();
	await db.deleteFrom("user_address").execute();
	await db.deleteFrom("users").execute();
	await db.deleteFrom("products").execute();

	const products = [
		// psy
		{ name: "Trixie Zubná Pasta pre Psy", description: "Pasta s mätovou príchuťou pre svieži dych.", category: "psy,starostlivosť" },
		{ name: "Royal Canin Medium Adult", description: "Kompletné krmivo pre dospelé psy stredných plemien.", category: "psy,krmivo" },
		{ name: "Pedigree Dentastix Medium", description: "Dentálna pochúťka pre ústnu hygienu psov.", category: "psy,maškrty" },
		{ name: "Brit Care Dog Show Champion", description: "Hypoalergénne granule pre psy vo výstavnej kondícii.", category: "psy,krmivo" },
		{ name: "Trixie Plyšový macko", description: "Mäkká hračka pre psov všetkých vekových kategórií.", category: "psy,hračky" },
		{ name: "Purina Pro Plan Small and Mini Adult", description: "Krmivo vyvinuté pre potreby malých a trpasličích plemien.", category: "psy,krmivo" },
		{ name: "Kong Classic Gumená Hračka", description: "Legendárna odolná hračka z prírodného kaučuku na plnenie maškrtami.", category: "psy,hračky" },
		{ name: "Julius-K9 IDC Postroj", description: "Profesionálny ergonomický postroj pre aktívne psy.", category: "psy,venčenie" },
		{ name: "Advantix Pipety pre psy", description: "Účinná ochrana proti kliešťom, blchám a komárom.", category: "psy,lekáreň" },
		{ name: "Brit Training Snacks L", description: "Chutné tréningové maškrty pre veľké plemená.", category: "psy,maškrty" },
		{ name: "Pedigree Junior Kapsička Hovädzia", description: "Šťavnaté mäsové kúsky v omáčke pre šteňatá.", category: "psy,krmivo" },
		{ name: "Trixie Chladniaca Podložka", description: "Podložka na reguláciu telesnej teploty počas horúcich dní.", category: "psy,doplnky" },
		{ name: "Chuckit Ultra Ball", description: "Vysoko odolná loptička s výborným odrazom pre aportovanie.", category: "psy,hračky" },
		{ name: "Hill's Science Plan Adult Light", description: "Krmivo s nízkym obsahom kalórií pre menej aktívne psy.", category: "psy,krmivo" },
		{ name: "Flexi New Classic Vodítko", description: "Samonavíjacie lanko s dĺžkou 5 metrov pre voľnosť pohybu.", category: "psy,venčenie" },

		// macky
		{ name: "Savic Záchod pre Mačky Nestor", description: "Krytá toaleta s filtrom proti zápachu.", category: "mačky" },
		{ name: "Royal Canin Kitten", description: "Špeciálne granule pre mačiatka v druhej fáze rastu.", category: "mačky,krmivo" },
		{ name: "Whiskas Kapsičky Klasický Výber", description: "Multipack kapsičiek s rôznymi druhmi mäsa v šťave.", category: "mačky,krmivo" },
		{ name: "Felix Fantastic s Kuracím", description: "Lahodné kúsky mäsa v želé, ktoré skvele voňajú.", category: "mačky,krmivo" },
		{ name: "Purina One Sterilcat", description: "Granule navrhnuté špeciálne pre kastrované mačky.", category: "mačky,krmivo" },
		{ name: "Brit Care Cat Grain-Free Sterilized", description: "Bezobilné krmivo pre citlivé kastrované mačky.", category: "mačky,krmivo" },
		{ name: "Trixie Škrabadlo Zaragoza", description: "Viacúrovňové škrabadlo s odpočívadlami a hračkou.", category: "mačky" },
		{ name: "Catit Fontána na Vodu Flower", description: "Automatická fontánka podporujúca pitný režim mačky.", category: "mačky,doplnky" },
		{ name: "GimCat Malt-Soft Pasta Professional", description: "Pasta na prirodzený odchod prehltnutých chlpov.", category: "mačky,lekáreň" },
		{ name: "Ever Clean Litter Podstielka", description: "Prémiová hrudkujúca podstielka s aktívnym uhlím.", category: "mačky" },
		{ name: "Animonda Carny Adult Hovädzie", description: "Kvalitná konzerva s vysokým obsahom čerstvého mäsa.", category: "mačky,krmivo" },
		{ name: "Royal Canin Urinary SO pre Mačky", description: "Veterinárna diéta pri ochoreniach močových ciest.", category: "mačky,krmivo" },
		{ name: "Sheba Selection v Omáčke", description: "Exkluzívne receptúry pre náročné mačacie jazýčky.", category: "mačky,krmivo" },
		{ name: "Cosma Nature Tuniak", description: "Doplnkové krmivo s 75% podielom čistého mäsa z tuniaka.", category: "mačky,krmivo" },

		// hlodavce
		{ name: "Versele-Laga Cuni Complete", description: "Extrudované krmivo pre králiky zabraňujúce selektívnemu kŕmeniu.", category: "hlodavce,krmivo" },
		{ name: "Brit Animals Rabbit Junior", description: "Superprémiové krmivo pre mladé králiky.", category: "hlodavce,krmivo" },
		{ name: "Trixie Drevený Domček", description: "Prírodný domček z borovicového dreva pre škrečky.", category: "hlodavce,doplnky" },
		{ name: "Vitakraft Kräcker Tyčinky", description: "Chrumkavé tyčinky s medom a špaldou pre králiky.", category: "hlodavce,maškrty" },
		{ name: "Savic Klietka pre Škrečka", description: "Priestranná klietka s tunelmi a kolotočom.", category: "hlodavce,klietky" },
		{ name: "Beaphar Care+ pre Potkany", description: "Veľmi chutné a vyvážené prémiové krmivo pre potkany.", category: "hlodavce,krmivo" },

		// akvaristika
		{ name: "TetraMin Vločkové Krmivo", description: "Zmes siedmich druhov vločiek pre zdravie a energiu rýb.", category: "akvaristika,krmivo" },
		{ name: "Eheim Vnútorný Filter Pickup", description: "Kompaktný a tichý filter pre akváriá do 60 litrov.", category: "akvaristika,technika" },
		{ name: "Sera Aquatan Kondicionér", description: "Prípravok na úpravu vodovodnej vody na bezpečnú vodu.", category: "akvaristika" },
		{ name: "Fluval LED Osvetlenie", description: "Moderné LED osvetlenie s nastaviteľným spektrom.", category: "akvaristika,technika,svetlá" },
		{ name: "Tetra Weekend Krmivo", description: "Kŕmne tablety, ktoré vydržia počas vašej neprítomnosti.", category: "akvaristika,krmivo" },
		{ name: "JBL ProNovo Bel Flakes", description: "Základné krmivo pre všetky spoločenské akváriové ryby.", category: "akvaristika,krmivo" },
		{ name: "Dennerle Nano DeponitMix", description: "Výživný substrát pre rastlinky v nano akváriách.", category: "akvaristika" },
		{ name: "Juvel Bioflow Filtračná vata", description: "Vata na zachytávanie hrubých nečistôt v akváriu.", category: "akvaristika,technika" },

		// vtaky
		{ name: "Versele-Laga Prestige Loro Parque", description: "Zmes semien obohatená o vitamíny pre papagáje.", category: "vtáky,krmivo" },
		{ name: "Vitakraft Menu pre Andulky", description: "Tradičné krmivo s jódom a minerálmi pre zdravie.", category: "vtáky,krmivo" },
		{ name: "Trixie Kúpeľnička pre Vtáky", description: "Plastová kúpeľnička s možnosťou zavesenia na klietku.", category: "vtáky,doplnky" },
		{ name: "Ferplast Klietka pre Kanáriky", description: "Elegantná klietka s výbavou (pítka, bidielka).", category: "vtáky,klietky" },
		{ name: "JR Farm Klasy Senegalského Prosa", description: "Obľúbená prírodná pochúťka pre všetky druhy vtákov.", category: "vtáky,maškrty" },
	];

	// zapis
	for (const product of products) {
		const imageName = product.name
			.toLowerCase()
			.replaceAll(' ', '_') + ".webp";

		await db.insertInto("products")
			.values({
				name: product.name,
				description: product.description,
				category: product.category,
				price: Math.round((randomInt(2, 80) + 0.99) * 100),
				image: imageName
			})
			.execute();
	}

	await db.insertInto("users")
		.values({
			username: "admin",
			email: "admin@petshop.sk",
			password: await hashPassword("admin123"),
			is_admin: 1
		})
		.execute();
}
