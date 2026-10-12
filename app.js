const missions = [
  { id: 'earth', icon: '◉', name: 'Earth observation', detail: 'Capture images and map changing landscapes.', payload: 'camera', title: 'Earth observation satellite', description: 'Capture images of Earth for mapping and environmental monitoring.' },
  { id: 'communications', icon: '⌁', name: 'Communications', detail: 'Relay data between distant locations.', payload: 'radio', title: 'Communications satellite', description: 'Relay messages and data across a wide service area.' },
  { id: 'science', icon: '✧', name: 'Space science', detail: 'Collect measurements with onboard instruments.', payload: 'camera', title: 'Space science satellite', description: 'Carry an imaging instrument to collect useful measurements.' }
];

// A product catalogue of published hardware specs. It is not a compatible bill of materials.
const components = [
  { id: 'bus-light', name: 'NanoAvionics M6P Light', group: 'Satellite bus', choiceGroup: 'bus', icon: '🛰️', payloadMass: 7.5, payloadPower: 18, downlinkMbps: 3, payloadVolume: 3, payloadVolumeWithPropulsion: 2, detail: '18 W payload power · 7.5 kg payload · 3 Mbps downlink · 16 kg max spacecraft mass', source: 'https://nanoavionics.com/small-satellite-buses/6u-cubesat-nanosatellite-m6p/', sourceLabel: 'NanoAvionics product specs' },
  { id: 'bus-mid', name: 'NanoAvionics M6P Mid', group: 'Satellite bus', choiceGroup: 'bus', icon: '🛰️', payloadMass: 7, payloadPower: 15, downlinkMbps: 140, payloadVolume: 3, payloadVolumeWithPropulsion: 2, detail: '15 W payload power · 7 kg payload · 140 Mbps downlink · 16 kg max spacecraft mass', source: 'https://nanoavionics.com/small-satellite-buses/6u-cubesat-nanosatellite-m6p/', sourceLabel: 'NanoAvionics product specs' },
  { id: 'bus-max', name: 'NanoAvionics M6P Max', group: 'Satellite bus', choiceGroup: 'bus', icon: '🛰️', payloadMass: 7, payloadPower: 13, downlinkMbps: 140, payloadVolume: 2.5, payloadVolumeWithPropulsion: 1.5, detail: '13 W payload power · 7 kg payload · 0.01° AKE · 16 kg max spacecraft mass', source: 'https://nanoavionics.com/small-satellite-buses/6u-cubesat-nanosatellite-m6p/', sourceLabel: 'NanoAvionics product specs' },
  { id: 'battery-bpx-4s2p', name: 'GomSpace NanoPower BPX · 4S2P', group: 'Battery packs', choiceGroup: 'battery', icon: '▰', capacity: 89, capacityBasis: 'typical', massMin: 0.5, massMax: 0.5, detail: '89 Wh typical · 14.4 V nominal · approx. 500 g · 93 × 86 × 41 mm', source: 'https://gomspace.com/wp-content/uploads/2026/01/gs-ds-NanoPower-BPX-100-Wh-DS-1076870-1-1.0-1.pdf', sourceLabel: 'GomSpace technical datasheet' },
  { id: 'battery-bpx-8s1p', name: 'GomSpace NanoPower BPX · 8S1P', group: 'Battery packs', choiceGroup: 'battery', icon: '▰', capacity: 87, capacityBasis: 'typical', massMin: 0.5, massMax: 0.5, detail: '87 Wh typical · 28.8 V nominal · approx. 500 g · 93 × 86 × 41 mm', source: 'https://gomspace.com/wp-content/uploads/2026/01/gs-ds-NanoPower-BPX-100-Wh-DS-1076870-1-1.0-1.pdf', sourceLabel: 'GomSpace technical datasheet' },
  { id: 'battery-bp8', name: 'GomSpace NanoPower BP8 · 100 Wh', group: 'Battery packs', choiceGroup: 'battery', icon: '▰', capacity: 100, capacityBasis: 'nominal', massMin: 0.486, massMax: 0.486, detail: '100 Wh nominal · 28.8 V · 486 g · designed to pair with NanoPower P80', source: 'https://gomspace.com/product/nanopower-bp8/', sourceLabel: 'GomSpace product specs' },
  { id: 'solar-6u-panel', name: 'EnduroSat 6U Solar Panel', group: 'Solar hardware', choiceGroup: 'solar', icon: '▤', solarPower: 19.2, massMin: 0.392, massMax: 0.392, detail: 'Up to 19.2 W in LEO · 392 g · 29%+ end-of-life efficiency', source: 'https://www.endurosat.com/products/6u-solar-panel/', sourceLabel: 'EnduroSat product specs' },
  { id: 'solar-6u-deployable', name: 'EnduroSat 6U Deployable Solar Array', group: 'Solar hardware', choiceGroup: 'solar', icon: '▤', solarPower: 38.4, massMin: 0.655, massMax: 1.065, detail: 'Up to 38.4 W in LEO · 655–1065 g depending on configuration', source: 'https://www.endurosat.com/products/6u-deployable-solar-array/', sourceLabel: 'EnduroSat product specs' },
  { id: 'solar-8u-panel', name: 'EnduroSat 8U Solar Panel', group: 'Solar hardware', choiceGroup: 'solar', icon: '▤', solarPower: 24, massMin: 0.545, massMax: 0.545, detail: 'Up to 24 W in LEO · 545 g · 29%+ end-of-life efficiency', source: 'https://www.endurosat.com/products/8u-solar-panel/', sourceLabel: 'EnduroSat product specs' },
  { id: 'reaction-wheels', name: 'GomSpace NanoTorque GSW-600', group: 'Attitude control', icon: '⊕', massMin: 0.94, massMax: 0.94, detail: 'Four-wheel pyramid · 940 g · 2 mNm torque · 19 mNms momentum', source: 'https://gomspace.com/product/reaction-wheels/', sourceLabel: 'GomSpace product specs' },
  { id: 'propulsion-cgp3', name: 'GomSpace NanoProp CGP3', group: 'Propulsion', icon: '✧', massMin: 0.3, massMax: 0.35, detail: 'Butane cold-gas system · 300/350 g dry/wet · 1 mN thrust · 40 Ns total impulse', status: 'Product flyer reference · current availability unverified', source: 'https://gomspace.com/UserFiles/Subsystems/flyer/gomspace_nanoprop_cgp3.pdf', sourceLabel: 'GomSpace product flyer' },
  { id: 'camera', name: 'GomSpace NanoCam C1U', group: 'Payload', choiceGroup: 'payload', icon: '◎', massMin: 0.169, massMax: 0.277, detail: '3 MP color camera · up to 2 GB storage · 169–277 g depending on lens', status: 'Legacy product · phased out', source: 'https://gomspace.com/product/nanocam-c1u/', sourceLabel: 'GomSpace product page' },
  { id: 'radio', name: 'EnduroSat S-Band Transceiver', group: 'Communications', choiceGroup: 'radio', icon: '⌁', massMin: 0.246, massMax: 0.246, maxDraw: 11, detail: 'Full duplex · up to 125 kbps · 246 g · 1.2 W idle / 11 W max', source: 'https://www.endurosat.com/products/s-band-transceiver/', sourceLabel: 'EnduroSat product specs' },
  { id: 'radio-max', name: 'EnduroSat S-Band Transceiver Max', group: 'Communications', choiceGroup: 'radio', icon: '⌁', massMin: 0.38, massMax: 0.38, maxDraw: 11, detail: 'Full duplex · 0.5–4 Msps · 380 g · 3 W idle / 11 W max', source: 'https://www.endurosat.com/products/s-band-transceiver-max/', sourceLabel: 'EnduroSat product specs' },
  { id: 'antenna-xband', name: 'EnduroSat X-Band Patch Antenna', group: 'Antennas', icon: '⌁', detail: '8.025–8.4 GHz · circular polarization · up to 4 W RF handling', source: 'https://www.endurosat.com/products/x-band-patch-antenna/', sourceLabel: 'EnduroSat product specs' },
  { id: 'antenna-uhf', name: 'GomSpace NanoCom ANT-6F', group: 'Antennas', icon: '⌁', detail: 'Deployable omnidirectional UHF/VHF antenna · designed for GomSpace 6U structures', source: 'https://gomspace.com/product/nanocom-ant-6f/', sourceLabel: 'GomSpace product specs' }
];

let activeMission = 'earth';
const selected = new Set(['bus-mid', 'battery-bpx-4s2p', 'solar-6u-panel', 'reaction-wheels', 'camera', 'radio']);
let zoom = 1;
let rotation = 0;
const $ = id => document.getElementById(id);
const choiceGroups = ['bus', 'battery', 'solar', 'payload', 'radio'];
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));

function renderMissions() {
  $('mission-list').innerHTML = missions.map(mission => `<button class="mission-option ${mission.id === activeMission ? 'active' : ''}" data-mission="${mission.id}" aria-pressed="${mission.id === activeMission}"><span class="mission-icon">${mission.icon}</span><span class="mission-copy"><strong>${mission.name}</strong><small>${mission.detail}</small></span><span class="mission-radio"></span></button>`).join('');
  document.querySelectorAll('[data-mission]').forEach(button => button.addEventListener('click', () => chooseMission(button.dataset.mission)));
}

function chooseMission(id) {
  activeMission = id;
  $('mission-title').textContent = missions.find(item => item.id === id).title;
  $('mission-description').textContent = missions.find(item => item.id === id).description;
  $('preview-mission').textContent = missions.find(item => item.id === id).name.toUpperCase();
  renderMissions();
  updateDesign();
}

function customSpec(chosen, group, key) {
  const groups = Array.isArray(group) ? group : [group];
  return [...chosen].reverse().find(item => item.custom && groups.includes(item.group) && Number.isFinite(item[key]));
}

document.querySelector('.top-nav').addEventListener('click', event => {
  const tab = event.target.closest('[data-page]');
  if (tab) setTopTab(tab.dataset.page);
});

function renderComponents() {
  const groups = ['Satellite bus', 'Battery packs', 'Solar hardware', 'Attitude control', 'Propulsion', 'Payload', 'Communications', 'Antennas', 'Other'];
  $('component-groups').innerHTML = groups.filter(group => components.some(item => item.group === group)).map(group => {
    const parts = components.filter(item => item.group === group);
    return `<section class="component-group"><div class="group-title"><span>${group}</span><i></i></div>${parts.map(part => {
      const enabled = selected.has(part.id);
      const name = part.custom ? escapeHtml(part.name) : part.name;
      const detail = part.custom ? escapeHtml(part.detail) : part.detail;
      const status = part.custom ? escapeHtml(part.status) : part.status;
      const source = part.source
        ? `<a class="component-source" href="${part.custom ? escapeHtml(part.source) : part.source}" target="_blank" rel="noopener noreferrer">${part.custom ? 'USER SOURCE' : part.sourceLabel} ↗</a>`
        : `<span class="component-source component-custom-label">${part.custom ? 'CUSTOM · NOT VERIFIED' : ''}</span>`;
      return `<div class="component-option"><button class="component-item ${enabled ? 'selected' : ''}" data-component="${part.id}" aria-pressed="${enabled}"><span class="component-symbol">${part.icon || '🔧'}</span><span class="component-text"><strong>${name}${status ? `<small class="required-label">${status}</small>` : ''}</strong><small>${detail}</small></span><span class="component-toggle">${enabled ? '✓' : '+'}</span></button>${source}</div>`;
    }).join('')}</section>`;
  }).join('');
  document.querySelectorAll('[data-component]').forEach(button => button.addEventListener('click', () => {
    const component = components.find(item => item.id === button.dataset.component);
    if (component.choiceGroup) {
      components.filter(item => item.choiceGroup === component.choiceGroup).forEach(item => selected.delete(item.id));
      selected.add(component.id);
    } else selected.has(component.id) ? selected.delete(component.id) : selected.add(component.id);
    renderComponents(); updateDesign();
  }));
}

function updateDesign() {
  const chosen = components.filter(component => selected.has(component.id));
  const bus = chosen.find(item => item.choiceGroup === 'bus');
  const battery = chosen.find(item => item.choiceGroup === 'battery');
  const solar = chosen.find(item => item.choiceGroup === 'solar');
  const customBus = customSpec(chosen, 'Satellite bus', 'payloadPower');
  const customBattery = customSpec(chosen, 'Battery packs', 'capacity');
  const customSolar = customSpec(chosen, 'Solar hardware', 'solarPower');
  const customPayload = customSpec(chosen, ['Satellite bus', 'Payload'], 'payloadMass');
  const mission = missions.find(item => item.id === activeMission);
  const name = $('satellite-name').value.trim() || 'Your satellite';
  $('mass-value').innerHTML = customPayload ? `${customPayload.payloadMass} <small>kg custom payload limit</small>` : bus ? `${bus.id === 'bus-light' ? '7.5' : '7'} <small>kg payload max</small>` : '—';
  const payloadPower = customBus?.payloadPower ?? (bus ? (bus.id === 'bus-light' ? 18 : bus.id === 'bus-mid' ? 15 : 13) : null);
  $('power-value').innerHTML = Number.isFinite(payloadPower) ? `${payloadPower} <small>W payload${customBus ? ' · custom' : ''}</small>` : '—';
  $('power-tag').textContent = 'BUS SPEC';
  const batteryCapacity = customBattery?.capacity ?? battery?.capacity;
  $('battery-value').innerHTML = Number.isFinite(batteryCapacity) ? `${batteryCapacity} <small>Wh ${customBattery ? 'custom' : battery.capacityBasis}</small>` : 'Not listed';
  const solarOutput = customSolar?.solarPower ?? solar?.solarPower;
  $('cost-value').innerHTML = Number.isFinite(solarOutput) ? `${solarOutput} <small>W${customSolar ? ' custom' : ' max*'}</small>` : '—';
  renderSatelliteStats(chosen, bus, battery, solar, mission);
  renderSatelliteRating(chosen, mission);
  $('system-count').textContent = `${chosen.length} products`;
  const checks = [[!!bus, 'Published satellite bus selected'], [!!battery, 'Published battery selected'], [!!solar, 'Published solar hardware selected'], [!!chosen.find(item => item.choiceGroup === 'radio'), 'Published radio selected']];
  $('design-checks').innerHTML = checks.map(([ok, text]) => `<div class="check-row ${ok ? 'passed' : ''}"><span>${ok ? '✓' : '○'}</span>${text}</div>`).join('');
  $('summary-copy').textContent = `${name} is a concept using published hardware references for ${mission.name.toLowerCase()}. Product compatibility and mission-level engineering are not verified.`;
  const model = $('satellite-model');
  for (const id of ['camera', 'reaction-wheels', 'propulsion-cgp3', 'antenna-xband', 'antenna-uhf']) model.classList.toggle(`has-${id}`, selected.has(id));
  model.classList.toggle('has-radio', chosen.some(item => item.choiceGroup === 'radio'));
  model.classList.toggle('has-transponder', mission.id === 'communications');
  model.classList.toggle('has-custom-module', chosen.some(item => item.custom));
  for (const variant of ['light', 'mid', 'max']) model.classList.toggle(`bus-${variant}`, selected.has(`bus-${variant}`));
  for (const variant of ['bpx-4s2p', 'bpx-8s1p', 'bp8']) model.classList.toggle(`battery-${variant}`, selected.has(`battery-${variant}`));
  for (const variant of ['6u-panel', '6u-deployable', '8u-panel']) model.classList.toggle(`solar-${variant}`, selected.has(`solar-${variant}`));
  const mark = ($('satellite-name').value.trim() || 'SAT').replace(/[^a-z0-9]/gi, '').slice(0, 4).toUpperCase();
  $('satellite-mark').textContent = mark;
  $('review-name').textContent = name;
  $('review-copy').textContent = `${mission.title} · ${chosen.length} real product references selected.`;
  const payload = chosen.find(item => item.choiceGroup === 'payload');
  const displayName = item => item ? (item.custom ? escapeHtml(item.name) : item.name) : 'Not selected';
  $('review-stats').innerHTML = `<div><span>BUS REFERENCE</span><strong>${displayName(bus)}</strong></div><div><span>BATTERY REFERENCE</span><strong>${battery ? `${displayName(battery)} · ${battery.capacity} Wh ${battery.capacityBasis}` : 'Not selected'}</strong></div><div><span>SOLAR REFERENCE</span><strong>${solar ? `${displayName(solar)} · ${solar.solarPower} W max` : 'Not selected'}</strong></div><div><span>PAYLOAD REFERENCE</span><strong>${displayName(payload)}</strong></div><div><span>OTHER REFERENCES</span><strong>${chosen.filter(item => !choiceGroups.includes(item.choiceGroup)).map(displayName).join(', ') || 'None selected'}</strong></div>`;
}

function renderSatelliteStats(chosen, bus, battery, solar, mission) {
  const massParts = chosen.filter(part => Number.isFinite(part.massMin) && Number.isFinite(part.massMax));
  const massMin = massParts.reduce((sum, part) => sum + part.massMin, 0);
  const massMax = massParts.reduce((sum, part) => sum + part.massMax, 0);
  const missingMass = chosen.length - massParts.length;
  const massLabel = massMin === massMax ? `${massMin.toFixed(2)} kg` : `${massMin.toFixed(2)}–${massMax.toFixed(2)} kg`;
  const payload = chosen.find(part => part.choiceGroup === 'payload');
  const radio = chosen.find(part => part.choiceGroup === 'radio');
  const hasPropulsion = chosen.some(part => part.id === 'propulsion-cgp3');
  const volume = bus ? (hasPropulsion ? bus.payloadVolumeWithPropulsion : bus.payloadVolume) : null;
  const customBattery = customSpec(chosen, 'Battery packs', 'capacity');
  const customSolar = customSpec(chosen, 'Solar hardware', 'solarPower');
  const customBusPower = customSpec(chosen, 'Satellite bus', 'payloadPower');
  const customDownlink = customSpec(chosen, ['Satellite bus', 'Communications'], 'downlinkMbps');
  const customPayload = customSpec(chosen, ['Satellite bus', 'Payload'], 'payloadMass');
  const capabilities = [payload ? 'Imaging' : '', radio ? 'Radio' : '', chosen.some(part => part.id === 'reaction-wheels') ? 'Attitude' : '', hasPropulsion ? 'Propulsion' : ''].filter(Boolean);
  const vendors = [...new Set(chosen.filter(part => !part.custom).map(part => part.name.startsWith('NanoAvionics') ? 'NanoAvionics' : part.name.startsWith('EnduroSat') ? 'EnduroSat' : 'GomSpace'))];
  const customCount = chosen.filter(part => part.custom).length;
  const enteredPowerDraw = chosen.filter(part => part.custom && Number.isFinite(part.powerDraw)).reduce((sum, part) => sum + part.powerDraw, 0);
  const axes = [
    { label: 'BATTERY', value: customBattery?.capacity ?? battery?.capacity, unit: 'Wh', max: 100 },
    { label: 'SOLAR OUTPUT', value: customSolar?.solarPower ?? solar?.solarPower, unit: 'W', max: 38.4 },
    { label: 'DATA LINK', value: customDownlink?.downlinkMbps ?? bus?.downlinkMbps, unit: 'Mbps', max: 140 },
    { label: 'PAYLOAD VOLUME', value: volume, unit: 'U', max: 3 },
    { label: 'PAYLOAD LIMIT', value: customPayload?.payloadMass ?? bus?.payloadMass, unit: 'kg', max: 7.5 },
    { label: 'BUS POWER', value: customBusPower?.payloadPower ?? bus?.payloadPower, unit: 'W', max: 18 }
  ];
  renderSatelliteRadar(axes);
  const capabilityText = capabilities.join(' · ') || 'No mission equipment selected';
  const massNote = missingMass ? `known parts only · ${missingMass} selected weight${missingMass === 1 ? '' : 's'} missing` : 'all selected part masses published';
  const detailCards = `<div><span>MASS</span><strong>${massParts.length ? massLabel : '—'}</strong><small>${massNote}</small></div><div><span>MISSION KIT</span><strong>${capabilityText}</strong><small>${mission.name} configuration</small></div><div><span>FIT</span><strong>${vendors.length} supplier${vendors.length === 1 ? '' : 's'}${customCount ? ` · ${customCount} custom` : ''} · check needed</strong><small>${enteredPowerDraw ? `Custom power draw entered: ${enteredPowerDraw} W · ` : ''}Interfaces and physical fit are unverified</small></div><div><span>COST</span><strong>${chosen.length ? 'Quote' : '—'}</strong><small>No verified combined price for ${chosen.length} selected products</small></div>`;
  $('sat-stats-details').innerHTML = detailCards;
}

function renderSatelliteRating(chosen, mission) {
  const hasBus = chosen.some(part => part.choiceGroup === 'bus' || (part.custom && part.group === 'Satellite bus'));
  const hasBattery = chosen.some(part => part.choiceGroup === 'battery' || (part.custom && part.group === 'Battery packs'));
  const hasSolar = chosen.some(part => part.choiceGroup === 'solar' || (part.custom && part.group === 'Solar hardware'));
  const hasRadio = chosen.some(part => part.choiceGroup === 'radio' || (part.custom && part.group === 'Communications'));
  const hasPayload = chosen.some(part => part.choiceGroup === mission.payload || (part.custom && part.group === (mission.payload === 'radio' ? 'Communications' : 'Payload')));
  const hasAttitude = chosen.some(part => part.id === 'reaction-wheels' || (part.custom && part.group === 'Attitude control'));
  const powerPoints = (hasBattery ? 0.5 : 0) + (hasSolar ? 0.5 : 0);
  const criteria = [
    { label: 'Satellite bus', points: hasBus ? 1 : 0, text: hasBus ? 'Selected' : 'Add a bus' },
    { label: 'Power system', points: powerPoints, text: powerPoints === 1 ? 'Complete' : powerPoints ? 'Partially selected' : 'Add battery + solar' },
    { label: 'Mission equipment', points: hasPayload ? 1 : 0, text: hasPayload ? 'Selected' : 'Add payload' },
    { label: 'Communication', points: hasRadio ? 1 : 0, text: hasRadio ? 'Selected' : 'Add radio' },
    { label: 'Attitude control', points: hasAttitude ? 1 : 0, text: hasAttitude ? 'Selected' : 'Add control' }
  ];
  const score = criteria.reduce((total, item) => total + item.points, 0);
  const roundedScore = Math.round(score * 10) / 10;
  $('satellite-rating-value').textContent = roundedScore.toFixed(1);
  $('rating-stars-fill').style.width = `${(roundedScore / 5) * 100}%`;
  $('rating-stars').setAttribute('aria-label', `Satellite rating: ${roundedScore} out of 5`);
  $('satellite-rating-label').textContent = roundedScore === 5 ? 'Complete set' : roundedScore >= 4 ? 'Strong setup' : roundedScore >= 3 ? 'Developing' : roundedScore >= 2 ? 'Early build' : 'Needs core systems';
  $('rating-criteria').innerHTML = criteria.map(item => {
    const className = item.points === 1 ? 'met' : item.points > 0 ? 'partial' : '';
    const symbol = item.points === 1 ? '✓' : item.points > 0 ? '½' : '·';
    return `<div class="rating-criterion ${className}"><i>${symbol}</i><span>${item.label}</span><span>${item.text}</span></div>`;
  }).join('');
}

function renderSatelliteRadar(axes, targetId = 'satellite-radar') {
  const cx = 170, cy = 123, radius = 65;
  const angles = [-90, -30, 30, 90, 150, 210].map(angle => angle * Math.PI / 180);
  const pointsFor = scale => angles.map(angle => `${(cx + Math.cos(angle) * radius * scale).toFixed(1)},${(cy + Math.sin(angle) * radius * scale).toFixed(1)}`).join(' ');
  const labelPositions = [
    { x: 170, y: 14, anchor: 'middle' },
    { x: 247, y: 69, anchor: 'start' },
    { x: 247, y: 166, anchor: 'start' },
    { x: 170, y: 215, anchor: 'middle' },
    { x: 93, y: 166, anchor: 'end' },
    { x: 93, y: 69, anchor: 'end' }
  ];
  const grid = [0.2, 0.4, 0.6, 0.8, 1].map(level => `<polygon class="radar-gridline" points="${pointsFor(level)}" />`).join('');
  const spokes = angles.map(angle => `<line class="radar-spoke" x1="${cx}" y1="${cy}" x2="${(cx + Math.cos(angle) * radius).toFixed(1)}" y2="${(cy + Math.sin(angle) * radius).toFixed(1)}" />`).join('');
  const values = axes.map(axis => Number.isFinite(axis.value) ? Math.max(0, Math.min(1, axis.value / axis.max)) : 0);
  const dataPoints = angles.map((angle, index) => `${(cx + Math.cos(angle) * radius * values[index]).toFixed(1)},${(cy + Math.sin(angle) * radius * values[index]).toFixed(1)}`).join(' ');
  const valueLabels = axes.map((axis, index) => {
    const position = labelPositions[index];
    const value = Number.isFinite(axis.value) ? `${axis.value} ${axis.unit}` : 'Not listed';
    return `<text class="radar-label" x="${position.x}" y="${position.y}" text-anchor="${position.anchor}">${axis.label}</text><text class="radar-value" x="${position.x}" y="${position.y + 15}" text-anchor="${position.anchor}">${value}</text>`;
  }).join('');
  $(targetId).innerHTML = `<svg viewBox="0 0 340 232" role="img" aria-label="Live chart of selected satellite specifications"><g>${grid}${spokes}<polygon class="radar-data" points="${dataPoints}" />${valueLabels}</g></svg>`;
}
function openReview() { updateDesign(); $('review-dialog').showModal(); }
const customDialog = $('custom-component-dialog');
$('add-custom-component').addEventListener('click', () => { $('custom-form-error').textContent = ''; customDialog.showModal(); });
$('close-custom-component').addEventListener('click', () => customDialog.close());
$('cancel-custom-component').addEventListener('click', () => customDialog.close());
$('custom-component-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const group = String(data.get('category') || 'Other');
  const rawMass = String(data.get('mass') || '').trim();
  const details = String(data.get('details') || '').trim();
  const rawSource = String(data.get('source') || '').trim();
  const error = $('custom-form-error');
  error.textContent = '';
  if (!name) { error.textContent = 'Add a name for this component.'; return; }
  const mass = rawMass === '' ? null : Number(rawMass);
  if (rawMass && (!Number.isFinite(mass) || mass < 0)) { error.textContent = 'Enter a valid mass of 0 kg or more.'; return; }
  const numericFields = [
    ['capacity', 'battery capacity'], ['solarPower', 'solar output'], ['payloadPower', 'payload power'],
    ['downlinkMbps', 'data rate'], ['payloadMass', 'payload limit'], ['powerDraw', 'power draw']
  ];
  const specs = {};
  for (const [field, label] of numericFields) {
    const rawValue = String(data.get(field) || '').trim();
    if (!rawValue) continue;
    const value = Number(rawValue);
    if (!Number.isFinite(value) || value < 0) { error.textContent = `Enter a valid ${label} of 0 or more.`; return; }
    specs[field] = value;
  }
  let source = '';
  if (rawSource) {
    try {
      const parsed = new URL(rawSource);
      if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error('Unsupported link');
      source = parsed.href;
    } catch { error.textContent = 'Use a valid web link beginning with http:// or https://.'; return; }
  }
  const id = `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const specLabels = [
    ['capacity', 'Wh battery'], ['solarPower', 'W solar'], ['payloadPower', 'W payload power'],
    ['downlinkMbps', 'Mbps data rate'], ['payloadMass', 'kg payload limit'], ['powerDraw', 'W draw']
  ];
  const specSummary = specLabels.filter(([key]) => Number.isFinite(specs[key])).map(([key, label]) => `${specs[key]} ${label}`);
  if (mass !== null) specSummary.unshift(`${mass} kg`);
  const componentDetail = [details, ...specSummary].filter(Boolean).join(' · ') || 'User-added component · no specs provided';
  components.push({
    id, name, group, icon: '🔧',
    detail: componentDetail,
    status: 'CUSTOM · NOT VERIFIED', custom: true,
    ...(mass !== null ? { massMin: mass, massMax: mass } : {}),
    ...specs,
    ...(source ? { source, sourceLabel: 'User-provided source' } : {})
  });
  selected.add(id);
  renderComponents();
  updateDesign();
  form.reset();
  customDialog.close();
});
document.querySelectorAll('#review-button, #design-button').forEach(button => button.addEventListener('click', openReview));
$('satellite-name').addEventListener('input', updateDesign);
$('rotate-view').addEventListener('click', () => { rotation += 24; $('satellite-model').style.transform = `translate(-50%,-50%) rotate(${rotation}deg) scale(${zoom})`; });
$('zoom-view').addEventListener('click', () => { zoom = zoom >= 1.25 ? 1 : zoom + .1; $('satellite-model').style.transform = `translate(-50%,-50%) rotate(${rotation}deg) scale(${zoom})`; });
$('reset-view').addEventListener('click', () => { rotation = 0; zoom = 1; $('satellite-model').style.transform = 'translate(-50%,-50%)'; });
$('export-design').addEventListener('click', exportDesignFile);
$('import-design').addEventListener('click', () => $('design-file-input').click());
$('design-file-input').addEventListener('change', importDesignFile);

function setTopTab(tab) {
  const isWorkspace = tab === 'workspace';
  const isAbout = tab === 'about';
  $('builder').classList.toggle('show-workspace-tab', isWorkspace);
  $('builder').hidden = isAbout;
  $('builder').style.display = isAbout ? 'none' : '';
  $('about-page').hidden = !isAbout;
  $('about-page').style.display = isAbout ? 'block' : 'none';
  $('workspace-tab').classList.toggle('active', isWorkspace);
  $('about-tab').classList.toggle('active', isAbout);
  $('builder-tab').classList.toggle('active', !isWorkspace && !isAbout);
  $('builder-tab').setAttribute('aria-selected', String(!isWorkspace && !isAbout));
  $('workspace-tab').setAttribute('aria-selected', String(isWorkspace));
  $('about-tab').setAttribute('aria-selected', String(isAbout));
}

function exportDesignFile() {
  const chosenCustom = components.filter(part => part.custom);
  const fileData = {
    format: 'SpaceSATBuild design',
    version: 1,
    design: {
      name: $('satellite-name').value.trim() || 'Your satellite',
      mission: activeMission,
      selectedComponentIds: [...selected],
      customComponents: chosenCustom.map(part => ({
        id: part.id, name: part.name, group: part.group, detail: part.detail,
        ...(Number.isFinite(part.massMin) ? { massMin: part.massMin, massMax: part.massMax } : {}),
        ...Object.fromEntries(['capacity', 'solarPower', 'payloadPower', 'downlinkMbps', 'payloadMass', 'powerDraw']
          .filter(key => Number.isFinite(part[key])).map(key => [key, part[key]])),
        ...(part.source ? { source: part.source } : {})
      }))
    },
    view: { tab: $('builder').classList.contains('show-workspace-tab') ? 'workspace' : 'builder', zoom, rotation }
  };
  const textFile = new Blob([JSON.stringify(fileData, null, 2)], { type: 'text/plain;charset=utf-8' });
  const downloadUrl = URL.createObjectURL(textFile);
  const link = document.createElement('a');
  const safeName = fileData.design.name.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase() || 'satellite-design';
  link.href = downloadUrl;
  link.download = `spacesatbuild-${safeName}.txt`;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
}

async function importDesignFile(event) {
  const file = event.currentTarget.files?.[0];
  event.currentTarget.value = '';
  if (!file) return;
  try {
    if (file.size > 2_000_000) throw new Error('That file is too large to import. Choose a SpaceSATBuild text file under 2 MB.');
    const fileData = JSON.parse(await file.text());
    if (fileData?.format !== 'SpaceSATBuild design' || fileData?.version !== 1 || !fileData.design) {
      throw new Error('This file is not a supported SpaceSATBuild design export.');
    }
    const design = fileData.design;
    const name = typeof design.name === 'string' ? design.name.trim() : '';
    if (!name || name.length > 22) throw new Error('The design name in this file is missing or too long.');
    if (!missions.some(mission => mission.id === design.mission)) throw new Error('The file contains an unknown mission.');
    if (!Array.isArray(design.selectedComponentIds) || !Array.isArray(design.customComponents) || design.customComponents.length > 200) {
      throw new Error('The file is missing its component selections or contains too many custom components.');
    }

    const allowedGroups = ['Satellite bus', 'Battery packs', 'Solar hardware', 'Attitude control', 'Propulsion', 'Payload', 'Communications', 'Antennas', 'Other'];
    const numberFields = ['massMin', 'massMax', 'capacity', 'solarPower', 'payloadPower', 'downlinkMbps', 'payloadMass', 'powerDraw'];
    const idMap = new Map();
    const importedCustom = design.customComponents.map((part, index) => {
      if (!part || typeof part.id !== 'string' || !part.id.startsWith('custom-') || idMap.has(part.id)) throw new Error('A custom component in this file has an invalid ID.');
      if (typeof part.name !== 'string' || !part.name.trim() || part.name.trim().length > 48) throw new Error('A custom component has a missing or invalid name.');
      if (!allowedGroups.includes(part.group)) throw new Error(`The category for “${part.name}” is not supported.`);
      const newId = `custom-import-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 6)}`;
      idMap.set(part.id, newId);
      const imported = {
        id: newId, name: part.name.trim(), group: part.group, icon: '🔧',
        detail: typeof part.detail === 'string' ? part.detail.slice(0, 500) : 'User-added component · no specs provided',
        status: 'CUSTOM · NOT VERIFIED', custom: true
      };
      for (const field of numberFields) {
        if (part[field] === undefined) continue;
        if (typeof part[field] !== 'number' || !Number.isFinite(part[field]) || part[field] < 0) throw new Error(`A custom component has an invalid ${field} value.`);
        imported[field] = part[field];
      }
      if ((imported.massMin === undefined) !== (imported.massMax === undefined)) throw new Error('A custom component mass range is incomplete.');
      if (part.source !== undefined) {
        if (typeof part.source !== 'string') throw new Error('A custom component source link is invalid.');
        const url = new URL(part.source);
        if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Custom component source links must use http or https.');
        imported.source = url.href;
        imported.sourceLabel = 'User-provided source';
      }
      return imported;
    });

    const staticIds = new Set(components.filter(part => !part.custom).map(part => part.id));
    const nextSelected = design.selectedComponentIds.map(id => {
      if (typeof id !== 'string') throw new Error('The component selection list is invalid.');
      if (staticIds.has(id)) return id;
      if (idMap.has(id)) return idMap.get(id);
      throw new Error('The file refers to an unknown component.');
    });
    if (new Set(nextSelected).size !== nextSelected.length) throw new Error('The component selection list contains duplicates.');
    const selectedChoiceGroups = new Set();
    for (const id of nextSelected) {
      const part = [...components.filter(item => !item.custom), ...importedCustom].find(item => item.id === id);
      if (part?.choiceGroup) {
        if (selectedChoiceGroups.has(part.choiceGroup)) throw new Error('The file selects more than one option for an exclusive component category.');
        selectedChoiceGroups.add(part.choiceGroup);
      }
    }

    const nextComponents = [...components.filter(part => !part.custom), ...importedCustom];
    components.splice(0, components.length, ...nextComponents);
    selected.clear();
    nextSelected.forEach(id => selected.add(id));
    $('satellite-name').value = name;
    activeMission = design.mission;
    renderMissions();
    renderComponents();
    updateDesign();
    if (fileData.view && ['builder', 'workspace'].includes(fileData.view.tab)) setTopTab(fileData.view.tab);
    if (fileData.view && Number.isFinite(fileData.view.zoom) && Number.isFinite(fileData.view.rotation)) {
      zoom = Math.max(1, Math.min(1.3, fileData.view.zoom));
      rotation = fileData.view.rotation % 360;
      $('satellite-model').style.transform = `translate(-50%,-50%) rotate(${rotation}deg) scale(${zoom})`;
    } else {
      zoom = 1; rotation = 0; $('satellite-model').style.transform = 'translate(-50%,-50%)';
    }
    alert('Design imported. Your mission, component selections, custom parts, and workspace view have been restored.');
  } catch (error) {
    alert(error instanceof SyntaxError ? 'This text file could not be read. Choose a SpaceSATBuild design export.' : error.message || 'The design could not be imported.');
  }
}

renderMissions();
renderComponents();
updateDesign();
