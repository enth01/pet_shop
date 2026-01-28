import { DB } from '@/lib/db-types';
import { hashPassword } from '../src/lib/hashing';
import { randomInt } from 'crypto';
import type { Kysely } from 'kysely'

export async function seed(db: Kysely<DB>): Promise<void> {
	await db.deleteFrom("favorite_products").execute();
	await db.deleteFrom("session").execute();
	await db.deleteFrom("users").execute();
	await db.deleteFrom("products").execute();

	await db.insertInto("users")
		.values({
			username: "admin",
			email: "admin",
			password: await hashPassword("admin"),
			is_admin: 1
		})
		.executeTakeFirst();
	
	const names = ["Jack", "Adam", "Filip", "John", "Mike", "Tom", "Bart", "Sally", "Jill", "Bob"];

	for (let i = 0; i < names.length; i++) {
		await db.insertInto("users")
			.values({
				username: names[i],
				email: names[i] + "@gmail.com",
				password: await hashPassword(names[i])
			})
			.executeTakeFirst();
	}

	const product_names = ["dog food", "cat food", "dog toy", "cat toy", "hamster food"]
	const product_descriptions = [
		"delicious food for dogs",
		"the best food for cats",
		"your dog will love this toy",
		"a beautiful cat toy",
		"the best thing for hamsters"
	]
	const images = ["dogfood.webp", "catfood.webp", "dogtoy.webp", "cattoy.webp", "hamsterfood.webp"];

	for (let i = 0; i < product_names.length; i++) {
		await db.insertInto("products")
			.values({
				name: product_names[i],
				description: product_descriptions[i],
				category: "-",
				price: randomInt(5, 20),
				image: images[i]
			})
			.executeTakeFirst();
	}

	const users = await db.selectFrom("users").selectAll().execute();
	const product_ids = await db.selectFrom("products").select("id").execute();

	for (let i = 0; i < users.length; i++) {
		await db.insertInto("favorite_products")
			.values({
				user_id: users[i].id,
				product_id: randomInt(1, product_ids.length)
			})
	}
}
