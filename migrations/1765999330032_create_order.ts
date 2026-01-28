import { sql, type Kysely } from "kysely";

export async function up(db: Kysely<unknown>): Promise<void> {
  await sql`CREATE TABLE orders (
		id integer primary key autoincrement not null,
		name text not null,
		surname text not null,
		street text not null,
		house_number text not null,
		city text not null,
		country text not null,
		zip_code text not null,
		phone_number text not null,
		email text not null,
		confirmed integer not null,
		user_id integer not null,
		foreign key(user_id) references users(id)
	) STRICT`.execute(db);
}
