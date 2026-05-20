// Use an absolute path from the website root for browser module loading.
const dashboardModule = '/public/components/src/Domain/Dashboard.js';

// GeoIntel live project data with real coordinates
const GEOINTEL_PROJECTS = [
  {
    id: 1,
    position: { lat: -15.4167, lng: 28.2833 },
    title: "Lusaka Urban Mapping",
    type: "Urban Planning",
    status: "Active",
    health: "92%",
    client: "Lusaka City Council",
    description: "AI-powered land-use change detection and infrastructure mapping"
  },
  {
    id: 2,
    position: { lat: -12.9667, lng: 28.6333 },
    title: "Copperbelt Crop Monitor",
    type: "Precision Agriculture",
    status: "Active",
    health: "87%",
    client: "Ministry of Agriculture",
    description: "NDVI crop health monitoring and AI-powered yield forecasting"
  },
  {
    id: 3,
    position: { lat: -13.1333, lng: 32.9333 },
    title: "Petauke Flood Zone",
    type: "Disaster Management",
    status: "Monitoring",
    health: "Alert",
    client: "DMMU Zambia",
    description: "Real-time flood zone mapping with early warning alerts"
  },
  {
    id: 4,
    position: { lat: -17.8252, lng: 25.8655 },
    title: "Southern Province Survey",
    type: "Agricultural Survey",
    status: "Active",
    health: "79%",
    client: "Regional Development Fund",
    description: "Comprehensive irrigation network and soil moisture analysis"
  }
];

// Google Maps dark theme matching GeoIntel branding
const MAP_THEME = [
  { elementType: "geometry", stylers: [{ color: "#0A1628" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0A1628" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#8D9FB5" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#1565C0" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#0D2B6B" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0D2044" }] },
  { featureType: "administrative.country", elementType: "geometry.stroke", stylers: [{ color: "#1976D2" }] }
];

function loadGoogleMaps(apiKey) {
  if (!apiKey) return Promise.resolve();
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps) return resolve();
    
    const callbackName = 'geointelInitMaps_' + Math.random().toString(36).substr(2, 9);
    
    window[callbackName] = function() {
      console.log('Google Maps API loaded via callback');
      resolve();
      delete window[callbackName];
    };
    
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${callbackName}`;
    script.async = true;
    script.onerror = () => {
      console.error('Failed to load Google Maps script');
      reject(new Error('Failed to load Google Maps script'));
    };
    
    console.log('Loading Google Maps with API key:', apiKey.substring(0, 10) + '...');
    document.head.appendChild(script);
  });
}

// Initialize interactive map after Google Maps loads
function initializeInteractiveMap() {
  const container = document.querySelector('.map-placeholder-bg');
  
  if (!container) {
    console.error('Map container .map-placeholder-bg not found');
    return;
  }
  
  if (!window.google || !window.google.maps) {
    console.error('Google Maps API not loaded. window.google:', window.google);
    return;
  }

  console.log('Starting map initialization...');
  
  // Clear placeholder content
  container.innerHTML = '';

  try {
    const map = new google.maps.Map(container, {
      zoom: 7,
      center: { lat: -13.1339, lng: 27.8493 }, // Center on Zambia
      styles: MAP_THEME,
      mapTypeControl: true,
      fullscreenControl: true,
      zoomControl: true
    });
    
    console.log('Google Maps instance created successfully');

    // Track currently open info window
    let currentInfoWindow = null;

    // Add markers for each project
    GEOINTEL_PROJECTS.forEach(project => {
      // Create custom marker with health status color
      const markerColor = project.health === 'Alert' ? 'FF6B6B' : project.status === 'Active' ? '4CAF50' : 'FFD700';
      const marker = new google.maps.Marker({
        position: project.position,
        map: map,
        title: project.title,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: `#${markerColor}`,
          fillOpacity: 0.9,
          strokeColor: '#FFFFFF',
          strokeWeight: 2
        }
      });

      // Create info window with project details
      const infoContent = `
        <div style="
          font-family: 'Space Grotesk', sans-serif;
          padding: 12px;
          max-width: 280px;
          color: #eef2ff;
          background: rgba(8, 18, 31, 0.95);
          border: 1px solid rgba(21, 101, 192, 0.4);
          border-radius: 12px;
        ">
          <div style="font-weight: 700; font-size: 14px; margin-bottom: 6px; color: #42A5F5;">
            ${project.title}
          </div>
          <div style="font-size: 11px; color: #8D9FB5; margin-bottom: 8px;">
            <div><strong>Type:</strong> ${project.type}</div>
            <div><strong>Client:</strong> ${project.client}</div>
            <div><strong>Status:</strong> ${project.status}</div>
            <div style="margin-top: 6px; color: ${project.health === 'Alert' ? '#FF6B6B' : '#4CAF50'};">
              <strong>Health:</strong> ${project.health}
            </div>
          </div>
          <div style="font-size: 10px; color: #cbd5e1; line-height: 1.5; margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(148, 163, 184, 0.2);">
            ${project.description}
          </div>
          <div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid rgba(148, 163, 184, 0.2);">
            <button style="
              background: #1565C0;
              color: white;
              border: none;
              padding: 6px 12px;
              border-radius: 6px;
              font-size: 10px;
              cursor: pointer;
              transition: background 0.2s;
            " onmouseover="this.style.background='#1E88E5'" onmouseout="this.style.background='#1565C0'">
              View Details →
            </button>
          </div>
        </div>
      `;

      const infoWindow = new google.maps.InfoWindow({
        content: infoContent
      });

      // Open info window on marker click
      marker.addListener('click', () => {
        if (currentInfoWindow) currentInfoWindow.close();
        infoWindow.open(map, marker);
        currentInfoWindow = infoWindow;
      });
    });

    console.log(`✅ Successfully initialized interactive map with ${GEOINTEL_PROJECTS.length} projects`);
  } catch (error) {
    console.error('Error initializing map:', error);
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  try {
    // Check if env is generated
    console.log('Page loaded. Checking for Google Maps API key...');
    const key = window.__ENV__ && window.__ENV__.GOOGLE_MAPS_API_KEY;
    
    if (!key) {
      console.error('❌ GOOGLE_MAPS_API_KEY not found in window.__ENV__');
      console.error('Make sure assets/js/env.js is loaded. Run: node generate-env.js');
      return;
    }
    
    console.log('✅ API key found:', key.substring(0, 10) + '...');
    
    try {
      await loadGoogleMaps(key);
      console.log('✅ Google Maps SDK loaded successfully');
      // Initialize the interactive map once SDK is ready
      setTimeout(initializeInteractiveMap, 100);
    } catch (e) {
      console.error('❌ Google Maps failed to load:', e);
      console.error('Possible causes:');
      console.error('1. API key is invalid or restricted');
      console.error('2. Maps JavaScript API not enabled in Google Cloud Console');
      console.error('3. API key restricted to different domain');
    }

    const module = await import(dashboardModule);
    module.renderDashboard('dashboard-root');
  } catch (err) {
    console.error('Failed to load dashboard module:', err);
  }

  // Smooth reveal on scroll
  const cards = document.querySelectorAll('.service-card, .metric-card, .service-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 80);
      }
    });
  }, { threshold: 0.12 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(12px)';
    card.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    observer.observe(card);
  });

  // Map pin tooltip (delegated)
  document.querySelectorAll('.map-pin').forEach(pin => {
    pin.addEventListener('mouseenter', function() {
      const label = this.getAttribute('title');
      if (!label) return;
      const tip = document.createElement('div');
      tip.textContent = label;
      tip.style.cssText = 'position:absolute;background:#0D2044;border:1px solid #1565C0;color:#42A5F5;font-size:11px;padding:6px 10px;border-radius:6px;white-space:nowrap;pointer-events:none;z-index:10;font-family:Space Grotesk,sans-serif;transform:translate(-50%,-110%);left:50%;top:0;';
      tip.id = 'maptip';
      this.appendChild(tip);
    });
    pin.addEventListener('mouseleave', function() {
      const tip = this.querySelector('#maptip');
      if (tip) tip.remove();
    });
  });

  // After loadGoogleMaps succeeds, initialize the map
  async function initMapContainer() {
    const container = document.querySelector('.map-placeholder-bg');
    const map = new google.maps.Map(container, {
      zoom: 7,
    center: { lat: -13.1339, lng: 27.8493 }, // Zambia
    styles: [/* Dark theme */]
  });
  
  // Add real project markers
  PROJECTS.forEach(p => {
    new google.maps.Marker({
      position: p.position,
      map: map,
      title: p.title
    });
  });
  }})