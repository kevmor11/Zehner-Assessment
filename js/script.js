$(document).ready(() => {
  $('#shop-link').mouseenter(function() {
    $(this).addClass('opened');
    $('#shop-dropdown').slideDown();
  });

  $('#page-content').mouseenter(() => {
    $('#shop-link').removeClass('opened');
    $('#shop-dropdown').slideUp();
  });

  setHover('pick', 1);
  setHover('pick', 2);
  setHover('pick', 3);
  setHover('pick', 4);

  setHover('location', 1);
  setHover('location', 2);
  setHover('location', 3);
  setHover('location', 4);

  function setHover(section, id) {
    $(`#${section}-${id}`).hover(() => {
      $(`#${section}-overlay-${id}`).css('display','flex');
    });

    $(`#${section}-${id}`).mouseleave(() => {
      $(`#${section}-overlay-${id}`).hide();
    });
  }
})