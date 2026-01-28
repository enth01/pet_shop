// lib/types.ts
import type { Selectable, Insertable } from "kysely";
import type { Users, Orders, Products, UserAddress } from "@/lib/db-types";

export type UserRow = Selectable<Users>;
export type OrderRow = Selectable<Orders>;
export type ProductRow = Selectable<Products>;
export type AddressRow = Selectable<UserAddress>;

export type AddressForm = Omit<
  Insertable<UserAddress>,
  "id" | "user_id"
>;
