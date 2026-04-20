import { sql, type Kysely } from "kysely";

export async function up(db: Kysely<unknown>): Promise<void> {
    await sql`ALTER TABLE users ADD COLUMN is_admin INTEGER DEFAULT 0`.execute(db);
}
