import {useEffect, useState} from 'react'
import client from '../client.js'

function Footer() {
  const [settings, setSettings] = useState(null)
  useEffect(() => {
      client.fetch(`*[_type == "siteSettings"][0] {...}`)
        .then((response) => setSettings(response))
    }, []
  )

  if (!settings) {
    return (<p>Loading ...</p>)
  }
  return (
    <footer
      className='Footer'
      itemScope itemType='http://schema.org/WPFooter'
    >
      <span itemScope itemType='http://schema.org/Organization'>
        –
        <p>
          <strong itemProp='name'>{settings.title}</strong><br />
          <span itemProp='address' itemScope='' itemType='http://schema.org/PostalAddress'>
            <span itemProp='streetAddress'>{settings.address.address}</span><br />
            <span itemProp='postalCode'>{settings.address.zipCode}</span>&nbsp;
            <span itemProp='addressLocality'>{settings.address.city}</span>
          </span>
        </p>
        <p>
          <a href={`http://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=${settings.organizationNumber}`}
             title='Oppføring i Brønnøysundregistret'>
            {settings.organizationNumber} MVA
          </a>
        </p>
        <p>
          <strong>Generelle henvendelser</strong><br />
          <a href={`tel:+47${settings.phone}`} itemProp='telephone' title='Ring til Gamle3Hus'>{settings.phone}</a><br />
          <a href={`mailto:${settings.email}`} itemProp='email' title='Send e-post til Gamle3Hus'>{settings.email}</a>
        </p>
        <p>
          <strong>Følg oss på</strong><br />
          <a href={`${settings.socialUri.instagramUri}`} title='Instagram'>Instagram</a><br />
          <a href={`${settings.socialUri.facebookUri}`} title='Facebook'>Facebook</a><br />
        </p>
      </span>
    </footer>
  )
}

export default Footer