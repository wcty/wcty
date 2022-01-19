type Post = {
  created_at: String
  id: number
  initiative_id: String
  message: String
  modified_at: String
  thread_id: String
  type: String
  user_avatar: String
  user_id: String
  user_name: String
}

export type NewPost = {
  id: string|number,
  created_at: Date|string,
  trigger: {
      name: string
  },
  table: {
      schema: string,
      name: string
  },
  event: {
    session_variables: {
      'x-hasura-role'?: string,
      'x-hasura-allowed-roles'?: string[],
      'x-hasura-user-id'?: string
    },
    op: string,
    data: {
      old: string|null,
      new: Post
    }
  }
}