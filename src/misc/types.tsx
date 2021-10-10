import { Maybe, Users } from "generated";


export type User = Maybe<Pick<Users, "id" | "avatar_url" | "created_at" | "display_name">> | undefined
