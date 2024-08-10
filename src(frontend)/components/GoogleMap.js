import React, { useEffect, useRef } from 'react';

const GoogleMap = () => {
  const mapRef = useRef(null);
  const inputRef = useRef(null);
  const infowindowContentRef = useRef(null);

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initMap = () => {
      if (!window.google) {
        console.error("Google Maps JavaScript API not loaded.");
        return;
      }

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: -33.8688, lng: 151.2195 },
        zoom: 13,
      });

      const input = inputRef.current;
      const autocomplete = new window.google.maps.places.Autocomplete(input, {
        fields: ['place_id', 'geometry', 'formatted_address', 'name'],
      });

      autocomplete.bindTo('bounds', map);
      map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);

      const infowindow = new window.google.maps.InfoWindow();
      infowindow.setContent(infowindowContentRef.current);

      const marker = new window.google.maps.Marker({ map: map });
      marker.addListener('click', () => {
        infowindow.open(map, marker);
      });

      autocomplete.addListener('place_changed', () => {
        infowindow.close();
        const place = autocomplete.getPlace();

        if (!place.geometry || !place.geometry.location) {
          return;
        }

        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }

        marker.setPlace({
          placeId: place.place_id,
          location: place.geometry.location,
        });
        marker.setVisible(true);

        document.getElementById('place-name').textContent = place.name;
        document.getElementById('place-id').textContent = place.place_id;
        document.getElementById('place-address').textContent = place.formatted_address;
        infowindow.open(map, marker);
      });
    };

    if (!window.google) {
      loadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&libraries=places&v=weekly`)
        .then(() => {
          initMap();
        })
        .catch((error) => console.error('Error loading Google Maps API:', error));
    } else {
      initMap();
    }
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        id="pac-input"
        className="controls"
        type="text"
        placeholder="Enter a location"
        style={{ display: 'none' }}
      />
      <div ref={mapRef} id="map" style={{ height: '400px', width: '100%' }}></div>
      <div ref={infowindowContentRef} id="infowindow-content" style={{ display: 'none' }}>
        <span id="place-name" className="title"></span><br />
        <strong>Place ID:</strong> <span id="place-id"></span><br />
        <span id="place-address"></span>
      </div>
    </div>
  );
};

export default GoogleMap;
