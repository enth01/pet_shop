import { sql, type Kysely } from "kysely";

export async function up(db: Kysely<unknown>): Promise<void> {
	await sql`CREATE TABLE order_product (
		id integer primary key autoincrement not null,
		product_id integer not null,
		order_id integer not null,
		quantity integer not null default 1,
		foreign key(product_id) references products(id),
		foreign key(order_id) references orders(id)
	) STRICT`.execute(db);
}
