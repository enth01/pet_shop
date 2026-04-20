import { sql, type Kysely } from "kysely";

export async function up(db: Kysely<unknown>): Promise<void> {
    await sql`DROP TABLE IF EXISTS user_address`.execute(db);

    await sql`CREATE TABLE user_address (
        id integer primary key autoincrement,
        user_id integer not null unique,
        street text not null,
        house_number text not null,
        city text not null,
        zip_code text not null,
        country text not null,
        phone_number text,
        name text,
        surname text,
        foreign key (user_id) references users(id) on delete cascade
  ) STRICT`.execute(db);
}
