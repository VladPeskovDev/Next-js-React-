'use client';

import React, { useEffect } from 'react';

declare global {
  interface Window {
    ymaps: any;
    ymapsLoaded: boolean;
  }
}

export default function YandexMap() {
  useEffect(() => {
    const loadYandexMaps = () => {
      return new Promise<void>((resolve, reject) => {
        if (window.ymapsLoaded) {
          resolve(); // API уже загружен, просто инициализируем карту
          return;
        }

        const script = document.createElement('script');
        script.src = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YANDEX_API}&lang=ru_RU`;
        script.async = true;
        script.onload = () => {
          window.ymapsLoaded = true;
          window.ymaps.ready(resolve);
        };
        script.onerror = () => reject(new Error('Ошибка загрузки Яндекс.Карт'));

        document.body.appendChild(script);
      });
    };

    const initMap = () => {
      const mapContainer = document.getElementById('map');
      if (mapContainer && !mapContainer.hasChildNodes()) {
        const map = new window.ymaps.Map(mapContainer, {
          center: [55.751574, 37.573856],
          zoom: 10,
        });

        const officeCoordinates = [55.798127, 37.495710];
        const placemark = new window.ymaps.Placemark(officeCoordinates, {
          hintContent: 'Офис адвоката по уголовным делам',
          balloonContent: 'г. Москва, ул. Маршала Рыбалко 2, корп.6, оф.408',
        }, {
          preset: 'islands#icon',
          iconColor: '#1f1fcc',
        });

        map.geoObjects.add(placemark);
      }
    };

    loadYandexMaps()
      .then(initMap)
      .catch((error) => console.error('Ошибка инициализации Яндекс.Карт:', error));
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px', borderRadius: '8px' }} />;
}
