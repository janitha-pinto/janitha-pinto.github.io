// Ceylon Spice Catering — shared site behaviour

document.addEventListener('DOMContentLoaded', function () {
  initMobileNav();
  initGalleryFilter();
  initLightbox();
  initContactForm();
  setFooterYear();
});

function initMobileNav() {
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    var isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initGalleryFilter() {
  var buttons = document.querySelectorAll('.filter-btn');
  var items = document.querySelectorAll('.gallery-item');
  if (!buttons.length || !items.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      var filter = btn.getAttribute('data-filter');

      items.forEach(function (item) {
        var category = item.getAttribute('data-category');
        var show = filter === 'all' || filter === category;
        item.hidden = !show;
      });
    });
  });
}

function initLightbox() {
  var lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;

  var titleEl = lightbox.querySelector('.lightbox__title');
  var descEl = lightbox.querySelector('.lightbox__desc');
  var closeBtn = lightbox.querySelector('.lightbox__close');

  document.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {
      var title = item.getAttribute('data-title') || '';
      var desc = item.getAttribute('data-desc') || '';
      if (titleEl) titleEl.textContent = title;
      if (descEl) descEl.textContent = desc;
      lightbox.hidden = false;
    });
  });

  function close() {
    lightbox.hidden = true;
  }

  if (closeBtn) closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
}

function initContactForm() {
  var form = document.querySelector('.form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = form.querySelector('#name');
    var email = form.querySelector('#email');
    var message = form.querySelector('#message');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      return;
    }

    // No backend on GitHub Pages: compose a mailto with the form details.
    // Replace this with a form service (e.g. Formspree) for a no-reload experience.
    var subject = encodeURIComponent('Catering enquiry from ' + name.value.trim());
    var eventType = form.querySelector('#eventType');
    var guestCount = form.querySelector('#guestCount');
    var eventDate = form.querySelector('#eventDate');

    var bodyLines = [
      'Name: ' + name.value.trim(),
      'Email: ' + email.value.trim(),
      eventType ? 'Event type: ' + eventType.value : '',
      guestCount ? 'Estimated guests: ' + guestCount.value : '',
      eventDate ? 'Event date: ' + eventDate.value : '',
      '',
      message.value.trim()
    ].filter(Boolean);

    var body = encodeURIComponent(bodyLines.join('\n'));
    var mailtoAddress = form.getAttribute('data-mailto') || 'hello@example.com';

    window.location.href = 'mailto:' + mailtoAddress + '?subject=' + subject + '&body=' + body;

    var success = document.querySelector('.form-success');
    if (success) {
      success.classList.add('is-visible');
      success.focus();
    }
  });
}

function setFooterYear() {
  var el = document.querySelector('[data-year]');
  if (el) el.textContent = new Date().getFullYear();
}
