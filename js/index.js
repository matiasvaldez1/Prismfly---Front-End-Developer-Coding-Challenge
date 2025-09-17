    // Only load carousel scripts on mobile devices
    if (window.innerWidth <= 768) {
      var jqueryScript = document.createElement('script');
      jqueryScript.src = '//code.jquery.com/jquery-1.11.0.min.js';
      document.head.appendChild(jqueryScript);

      jqueryScript.onload = function() {
        var migrateScript = document.createElement('script');
        migrateScript.src = '//code.jquery.com/jquery-migrate-1.2.1.min.js';
        document.head.appendChild(migrateScript);

        migrateScript.onload = function() {
          var slickScript = document.createElement('script');
          slickScript.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
          document.head.appendChild(slickScript);

          slickScript.onload = function() {
            $(document).ready(function(){
              $('.mobile-carousel').slick({
                dots: true,
                infinite: true,
                speed: 600,
                fade: true,
                cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
                autoplay: false,
                arrows: false,
                pauseOnHover: false,
                pauseOnFocus: false
              });

              // Custom dot click animation
              $('.slick-dots li').on('click', function() {
                const $dot = $(this);
                $dot.addClass('clicked');
                
                const $button = $dot.find('button');
                $button.css('box-shadow', '0 0 0 8px rgba(255, 107, 53, 0.1)');
                
                setTimeout(() => {
                  $dot.removeClass('clicked');
                  $button.css('box-shadow', '');
                }, 400);
              });
            });
          };
        };
      };
    }