type File = {
  id: string
  name: string
  content: string
  active: boolean
  status: 'editing' |'saving' | 'saved'
}

export const files: File[] = [
  {
    id: 'jahklfsajfhlk12rt90h120t03hf',
    name: 'README',
    content: '## Markee App',
    active: false,
    status: 'saved',
  },
  {
    id: 'ajfo19rj1fp1ojf1-u901f',
    name: 'CONTRIBUTING',
    content: '## Tutorial on how to contribute to the project',
    active: false,
    status: 'saved',
  },
  {
    id: 'j1ropj1onf190fh111-14401j-1341f',
    name: 'LICENSE',
    content: '## MIT License',
    active: false,
    status: 'saved',
  },
  {
    id: 'afjaojfq-aofhjaojf',
    name: 'Links',
    content: '## Some important links',
    active: false,
    status: 'saved',
  },
  {
    id: 'a1ri1fj1-114104-120t03hf',
    name: 'roadmap',
    content: '## Bootcamp Brainn Co.',
    active: true,
    status: 'editing',
  },
]
