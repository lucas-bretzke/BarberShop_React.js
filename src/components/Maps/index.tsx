import React, { useEffect } from 'react'

declare global {
  interface Window {
    google: any // Ajuste esse tipo de acordo com os tipos reais do Google Maps
  }
}

interface MapsProps {
  latitude: number
  longitude: number
}

const Maps: React.FC<MapsProps> = ({ latitude, longitude }) => {
  useEffect(() => {
    const loadGoogleMapScript = () => {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA3wKA5tq5FxPAvKq7id3LU-Yu5IMMUj7s&callback=initMap`
      script.defer = true
      script.async = true

      script.addEventListener('load', () => {
        if (window.google) {
          initMap()
        } else {
          console.error(
            'Erro: A API do Google Maps não está carregada corretamente.'
          )
        }
      })

      script.addEventListener('error', error => {
        console.error('Erro ao carregar o script da API do Google Maps:', error)
      })

      document.head.appendChild(script)
    }

    const initMap = () => {
      if (window.google && window.google.maps) {
        const mapOptions = {
          center: { lat: latitude, lng: longitude },
          zoom: 15
        }

        const map = new window.google.maps.Map(
          document.getElementById('google-map'),
          mapOptions
        )

        const marker = new window.google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: map,
          title: 'Barbearia Ropela'
        })
      } else {
        console.error(
          'Erro: A API do Google Maps não está carregada corretamente.'
        )
      }
    }

    loadGoogleMapScript()

    return () => {
      const script = document.querySelector(
        'script[src^="https://maps.googleapis.com/maps/api/js"]'
      )
      if (script) {
        script.remove()
      }
    }
  }, [latitude, longitude])

  return <div id='google-map' style={{ height: '400px', width: '100%' }}></div>
}

export default Maps
