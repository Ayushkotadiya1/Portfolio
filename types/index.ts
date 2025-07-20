export interface Skill {
  name: string
  level: number
}

export interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  live: string
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  github: string
  linkedin: string
}

export interface PersonalInfo {
  name: string
  title: string
  description: string
  profileImage: string
  resume: string
}
