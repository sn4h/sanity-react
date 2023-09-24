import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import siteSettings from './siteSettings'
import dayAndTime from './objects/dayAndTime'
import address from './objects/address'
import socialUri from './objects/socialUri'

export const schemaTypes = [
  dayAndTime,
  address,
  socialUri,
  siteSettings,
  post,
  author,
  category,
  blockContent
]
