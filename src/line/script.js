function getTooltip() {
  var svg = document.querySelector('svg');
  var tooltip = svg.querySelector('.tooltip');
  return tooltip;
}

function getTooltipBg() {
  var svg = document.querySelector('svg');
  var tooltipBg = svg.querySelector('.tooltip-bg');
  return tooltipBg;
}

function showTooltip(e) {
  var target = e.target;
  var cx = parseFloat(target.getAttributeNS(null, 'cx'), 10);
  var cy = parseFloat(target.getAttributeNS(null, 'cy'), 10);

  var value = e.target.getAttribute('data-value');
  var tooltip = getTooltip();
  tooltip.setAttributeNS(null,'x', cx + 12);
  tooltip.setAttributeNS(null,'y', cy + 27);
  tooltip.firstChild.data = value;
  tooltip.setAttributeNS(null,'visibility','visible');

  var length = tooltip.getComputedTextLength();
  var tooltipBg = getTooltipBg();
  tooltipBg.setAttributeNS(null, 'width', length + 8);
  tooltipBg.setAttributeNS(null, 'x', cx + 8);
  tooltipBg.setAttributeNS(null, 'y', cy + 14);
  tooltipBg.setAttributeNS(null, 'visibility', 'visibile');
}

function hideTooltip(e) {
  var tooltip = getTooltip();
  var tooltipBg = getTooltipBg();
  tooltip.setAttributeNS(null, 'visibility', 'hidden');
  tooltipBg.setAttributeNS(null, 'visibility', 'hidden');
}
