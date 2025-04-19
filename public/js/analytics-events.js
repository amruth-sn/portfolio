// Google Analytics Event Tracking

// Track outbound links (like resume downloads)
function trackOutboundLink(url, label) {
  gtag('event', 'click', {
    'event_category': 'outbound',
    'event_label': label,
    'transport_type': 'beacon',
    'event_callback': function() {
      if (url) {
        document.location = url;
      }
    }
  });
  return false;
}

// Track page views for specific pages
function trackPageView(pageName) {
  gtag('event', 'page_view', {
    'page_title': pageName,
    'page_location': window.location.href,
    'page_path': window.location.pathname
  });
}

function setupTrackedLinks(selector, label) {
  const links = document.querySelectorAll(selector);
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      trackOutboundLink(this.href, label);
    });
  });
}

// Add event tracking to all links with data-track attribute
document.addEventListener('DOMContentLoaded', function() {
  // Track resume clicks
  setupTrackedLinks('a[href*="drive.google.com"]', 'resume_click');
  setupTrackedLinks('a[href*="github.com"]', 'github_click');
  setupTrackedLinks('a[href*="linkedin.com"]', 'linkedin_click');
  setupTrackedLinks('a[href*="roomform.ai"]', 'roomform_click');
  setupTrackedLinks('a[href*="platecalculator.xyz"]', 'platecalculator_click');
  // Track current page view
  if (window.location.pathname.includes('/other/skills/')) {
    trackPageView('Skills Page');
  }
}); 