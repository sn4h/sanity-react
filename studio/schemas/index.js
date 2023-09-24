import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import siteSettings from './siteSettings'
import dayAndTime from './objects/dayAndTime'
import address from './objects/address'
import socialUri from './objects/socialUri'
import gallery from './objects/gallery'

export const schemaTypes = [
  dayAndTime,
  address,
  gallery,
  socialUri,
  siteSettings,
  post,
  author,
  category,
  blockContent
]
