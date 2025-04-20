// Google Analytics Event Tracking

function trackPageView(pageName) {
    gtag('event', 'page_view', {
      page_title: pageName,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  }
  
  function trackOutboundLink(selector, eventName, label) {
    const links = document.querySelectorAll(selector);
    links.forEach(link => {
      link.addEventListener('click', function () {
        gtag('event', eventName, {
          event_category: 'outbound',
          event_label: label,
          transport_type: 'beacon'
        });
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    trackOutboundLink('a[href*="resume"]', 'resume_click', 'Resume Link');
    trackOutboundLink('a[href*="linkedin.com"]', 'linkedin_click', 'LinkedIn Link');
    trackOutboundLink('a[href*="github.com"]', 'github_click', 'GitHub Link');
    trackOutboundLink('a[href*="roomform.ai"]', 'roomform_click', 'Roomform Link');
    trackOutboundLink('a[href*="platecalculator.xyz"]', 'platecalculator_click', 'Plate Calculator Link');
  
    if (window.location.pathname.includes('/other/skills/')) {
      trackPageView('Skills Page');
    }
  });
  