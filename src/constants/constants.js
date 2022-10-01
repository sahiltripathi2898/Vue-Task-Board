import { v4 } from 'uuid'

export const PERSONAL = {
  NAME: 'Sahil',
  TITLE: 'Tripathi'
}

export const PROFESSIONAL = {
  COMPANY: 'Netomi',
  SECTOR: 'IT'
}

export const tasks = [
  // Selected
  {
    id: v4(),
    status: 'selected',
    title: 'Font fix',
    description: 'We need to fix the font ize from 5 to 10px in NCW'
  },
  {
    id: v4(),
    status: 'selected',
    title: 'SVG not correct',
    description: 'Our speech generator is based on the most intelligent, smart,'
  },
  {
    id: v4(),
    status: 'selected',
    title: 'Cloudfront routing not working',
    description: 'Thank you for using my words in your work'
  },
  // In progress
  {
    id: v4(),
    status: 'progress',
    title: 'Asymmetric Auth',
    description: ' have never known a Jack that was in good enough shape to name bodybuilding after him'
  },
  {
    id: v4(),
    status: 'progress',
    title: 'NCW shows blank screen',
    description: 'A tagline for a car company that prides itself on its morals and ethics'
  },
  // Completed
  {
    id: v4(),
    status: 'completed',
    title: 'One click infra',
    description: 'Are there Out-of-Stock photos'
  }
]