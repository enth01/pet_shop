import { sql, type Kysely } from "kysely";

export async function up(db: Kysely<unknown>): Promise<void> {
	await sql`CREATE TABLE products (
		id integer primary key autoincrement not null,
		name text not null,
		description text not null,
		price integer not null,
		image text not null,
		category text not null
	) STRICT`.execute(db);

	await sql`CREATE TABLE users (
		id integer primary key autoincrement not null,
		username text not null unique,
		email text not null unique,
		password text not null
	) STRICT`.execute(db);

	await sql`CREATE TABLE favorite_products (
		id integer primary key autoincrement not null,
		user_id integer not null,
		product_id integer not null,
		foreign key(user_id) references users(id),
		foreign key(product_id) references products(id)
	) STRICT`.execute(db);
}
