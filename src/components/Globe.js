import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Globe() {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    // Creazione della scena
    const scene = new THREE.Scene();

    // Creazione della camera
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Creazione del renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Creazione del globo
    const globeGeometry = new THREE.SphereGeometry(1, 32, 32);
    const globeMaterial = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load('/img/aka-image-card.png'),
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Aggiornamento della scena
    function animate() {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.005;
      renderer.render(scene, camera);
    }
    animate();

    // Pulizia della scena quando il componente viene smontato
    return () => {
      scene.remove(globe);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} />;
}
