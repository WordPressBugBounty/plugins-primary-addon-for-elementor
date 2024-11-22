jQuery(document).ready(function($) {
  "use strict";
  
  //Napae Hover Script
  $('.napae-aboutus-item, .napae-aboutme-item, .napae-service-item, .napae-news-item, .napae-gallery-item, .napae-contact-item, .napae-mate-item, .napae-video-wrap, .napae-history-item').hover (
    function() {
      $(this).addClass('napae-hover');
    },
    function() {
      $(this).removeClass('napae-hover');
    }
  );

  // Match Height Script
  $('.napae-item').matchHeight();

  // Napae Masonry Script
  $('.masonry-wrap').each(function(i, gridContainer) {
    var $gridContainer = $(gridContainer);
    var $grid = $gridContainer.find('.napae-masonry').imagesLoaded(function() {
      $grid.isotope ({
        itemSelector: '.masonry-item',
        // layoutMode: 'packery',
        percentPosition: true,
        isFitWidth: true,
      })
    });
    $grid.packery({
      itemSelector: '.masonry-item'
    });
    $gridContainer.find('.masonry-filters.normal-filter').on('click', 'li a', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope ({
        filter: filterValue,
      });
    });
  });
  $('.masonry-filters').each( function( i, buttonGroup ) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on( 'click', 'li a', function() {
      $buttonGroup.find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });

  //Napae Popup Picture Script
  $('.napae-popup').magnificPopup ({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    closeMarkup:'<div class="mfp-close" title="%title%"></div>',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
      }
    },
    gallery: {
      enabled: true,
      arrowMarkup:'<div title="%title%" class="mfp-arrow mfp-arrow-%dir%"></div>',
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function(element) {
        return element.find('*');
      }
    }
  });

  //Napae Magnific Popup Video Script
  $('.napae-popup-video').magnificPopup ({
    mainClass: 'mfp-fade',
    type: 'iframe',
    closeMarkup:'<div class="mfp-close" title="%title%"></div>',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/', 
          id: function(url) {        
            var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
            if ( !m || !m[1] ) return null;
            return m[1];
          },
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/', 
          id: function(url) {        
            var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
            if ( !m || !m[5] ) return null;
            return m[5];
          },
          src: 'https://player.vimeo.com/video/%id%?autoplay=1'
        },
        dailymotion: {
          index: 'dailymotion.com/',
          id: function(url) {        
            var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
            if ( !m || !m[2] ) return null;
            return m[2];
          },
          src: 'https://iframespot.blogspot.com/ncr/?m=0&type=dv&url=https%3A%2F%2Fwww.dailymotion.com%2Fembed%2Fvideo%2F%id%%3Fapi%3D0%26autoplay%3D1%26info%3D0%26logo%3D0%26social%3D0%26related%3D0'
        }
      }
    }
  });
  if ($('div').hasClass('napae-popup')) {
    $('.napae-popup').find('a').attr("data-elementor-open-lightbox","no");
  }
  //Napae Add Class In Previous Items
  $('.napae-process-item').hover(function() {
    $(this).prevAll('.napae-process-item').toggleClass('process-done');
  });

  var RSilderIndex = $('.closed-time').length;
  $('.flick-carousel').attr('data-initialindex', RSilderIndex);
  //Flickity Carousel Slider Script
  $('.flick-carousel').each( function() {
    var $Flick = $(this);
    $Flick.flickity  ({
      draggable : ($Flick.data('draggable') !== undefined) ? $Flick.data('draggable') : false,
      freeScroll : ($Flick.data('freescroll') !== undefined) ? $Flick.data('freescroll') : false,
      freeScrollFriction : ($Flick.data('freescrollfriction') !== undefined) ? $Flick.data('freescrollfriction') : 0.075,
      wrapAround : ($Flick.data('wraparound') !== undefined) ? $Flick.data('wraparound') : true,
      groupCells : ($Flick.data('groupcells') !== undefined) ? $Flick.data('groupcells') : '',
      autoPlay : ($Flick.data('autoplay') !== undefined) ? $Flick.data('autoplay') : '',
      pauseAutoPlayOnHover : ($Flick.data('pauseautoplayonhover') !== undefined) ? $Flick.data('pauseautoplayonhover') : false,
      adaptiveHeight : ($Flick.data('adaptiveheight') !== undefined) ? $Flick.data('adaptiveheight') : false,
      dragThreshold : ($Flick.data('dragthreshold') !== undefined) ? $Flick.data('dragthreshold') : '',
      selectedAttraction : ($Flick.data('selectedattraction') !== undefined) ? $Flick.data('selectedattraction') : 0.025,
      friction : ($Flick.data('friction') !== undefined) ? $Flick.data('friction') : 0.28,
      initialIndex : ($Flick.data('initialindex') !== undefined) ? $Flick.data('initialindex') : '',
      accessibility : ($Flick.data('accessibility') !== undefined) ? $Flick.data('accessibility') : true,
      setGallerySize : ($Flick.data('setgallerysize') !== undefined) ? $Flick.data('setgallerysize') : true,
      resize : ($Flick.data('resize') !== undefined) ? $Flick.data('resize') : true,
      cellAlign : ($Flick.data('cellalign') !== undefined) ? $Flick.data('cellalign') : 'center',
      contain : ($Flick.data('contain') !== undefined) ? $Flick.data('contain') : false,
      rightToLeft : ($Flick.data('righttoleft') !== undefined) ? $Flick.data('righttoleft') : false,
      prevNextButtons : ($Flick.data('prevnextbuttons') !== undefined) ? $Flick.data('prevnextbuttons') : false,
      pageDots : ($Flick.data('pagedots') !== undefined) ? $Flick.data('pagedots') : false,
    });
  });

  // Pro Link
  $('.elementor-element').each( function() {
    if ($(this).data('nich-link')!==undefined) {
      $(this).append( "<a href='"+$(this).data('nich-link')+"' target='_blank' class='napae-btn napae-prle-btn'>"+$(this).data('nich-text')+"</a>" );
    }
  });

  // Counter Script
  if ($('span').hasClass('napae-counter')) {
    $('.napae-counter').counterUp ({
      delay: 1,
      time: 1000,
    });
  }

  
  
});