import { sql, type Kysely } from "kysely";

export async function up(db: Kysely<unknown>): Promise<void> {
	await sql`CREATE TABLE user_address (
		id integer primary key autoincrement,
		user_id integer not null unique,
		street text not null,
		house_number text not null,
		city text not null,
		zip_code text not null,
		country text not null,
		foreign key (user_id) references users(id) on delete cascade
	) STRICT`.execute(db);
}
