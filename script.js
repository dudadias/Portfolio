//scripts for scrool bar navigation

window.sr = ScrollReveal({ reset: true });
ScrollReveal({ distance: '20px' });
sr.reveal('.around', { duration: 2000, origin: 'right' });
sr.reveal('.eita', { duration: 2000, origin: 'left' });
sr.reveal('.aboutdisplay', { duration: 2000, origin: 'bottom' });
sr.reveal('.aboutdisplayy', { duration: 2000, origin: 'bottom' });
sr.reveal('.projectscontent', { duration: 2000, origin: 'bottom' });
sr.reveal('.skillscontent', { duration: 2000, origin: 'bottom' });
sr.reveal('.cardContact', { duration: 2000, origin: 'bottom' });
sr.reveal('.svg-wrapper', { duration: 2000, origin: 'left' });

$('nav a').click(function (e) {
  e.preventDefault();
  var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;

  $('html, body').animate(
    {
      scrollTop: targetOffset - 12,
    },
    500
  );
});
