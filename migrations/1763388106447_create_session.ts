import { sql, type Kysely } from "kysely";

export async function up(db: Kysely<unknown>): Promise<void> {
	await sql`CREATE TABLE session (
		id integer primary key autoincrement not null,
		user_id integer not null,
		session_id text not null,
		expiration integer not null,
		foreign key(user_id) references users(id)
	) STRICT`.execute(db);
}
