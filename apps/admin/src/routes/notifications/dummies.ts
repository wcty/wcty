export const NewPostDummy = {
  id: 40,
  created_at: '2020-10-23T12:33:46.647+00:00',
  trigger: {
      name: 'new-post'
  },
  table: {
      schema: 'public',
      name: 'initiative_posts'
  },
  event: {
    op: 'INSERT',
    data: {
      old: null,
      new: {
        created_at: '2020-10-23T12:33:46.647+00:00',
        id: 40,
        initiative_id: '912c90ae-83f0-49c9-b888-2000655e82e1',
        message: 'Всім привіт!',
        modified_at: '2020-10-23T12:33:46.647+00:00',
        thread_id: 'main',
        type: 'message',
        user_avatar: 'https://lh3.googleusercontent.com/a-/AOh14GgJdRYQ_RpYgNZxRCUxB5aN3g3Rn81wWZbyf72Scw=s96-c',
        user_id: '7eed5e00-c163-4d2c-ac9b-4f8fbce22966',
        user_name: 'German Mitish'
      }
    }
  }
}