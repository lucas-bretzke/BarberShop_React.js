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
      if (!document.querySelector('script[src*="maps.googleapis.com"]')) {
        const script = document.createElement('script')
        script.src =
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyA3wKA5tq5FxPAvKq7id3LU-Yu5IMMUj7s&callback=initMap'
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
          console.error(
            'Erro ao carregar o script da API do Google Maps:',
            error
          )
        })

        document.head.appendChild(script)
      }
    }

    function initMap() {
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

    const cleanup = () => {
      const script = document.querySelector(
        'script[src^="https://maps.googleapis.com/maps/api/js"]'
      )
      if (script) {
        script.remove()
      }
    }

    loadGoogleMapScript()

    setTimeout(() => cleanup, 100)
  }, [latitude, longitude]) 

  return (
    <div
      id='google-map'
      style={{ height: '100%', width: '100%', border: 'none' }}
    ></div>
  )
}

export default Maps
