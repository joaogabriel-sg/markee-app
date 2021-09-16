export type File = {
  id: string
  name: string
  content: string
  active: boolean
  status: 'editing' |'saving' | 'saved'
}
