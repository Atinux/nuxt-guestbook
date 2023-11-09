import { desc } from 'drizzle-orm'

export default eventHandler(async () => {
  return useDB().select().from(tables.comments).orderBy(desc(tables.comments.id))
})