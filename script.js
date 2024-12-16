



$(document).ready(function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false, // Disable default navigation
      dots: true, // Enable dots if needed
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: false // Keep nav false, since we have custom buttons
        }
      }
    });

    $(".owl-item").css("width", "506.04px");


    // Add click events to custom arrow buttons
    document.querySelector('.left-arrow').addEventListener('click', function () {
      $(".owl-carousel1").trigger('prev.owl.carousel');
    });

    document.querySelector('.right-arrow').addEventListener('click', function () {
      $(".owl-carousel1").trigger('next.owl.carousel');
    });
  });



//   let currentTestimonial = 0;
//   const testimonials = document.querySelectorAll('.testimonial');

//   function showTestimonial(index) {
//       testimonials.forEach((testimonial, i) => {
//           testimonial.classList.remove('active');
//           if (i === index) {
//               testimonial.classList.add('active');
//           }
//       });
//   }

//   function nextTestimonial() {
//       currentTestimonial = (currentTestimonial + 1) % testimonials.length;
//       showTestimonial(currentTestimonial);
//   }

//   function prevTestimonial() {
//       currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
//       showTestimonial(currentTestimonial);
//   }

//   // Initialize first testimonial as active
//   showTestimonial(currentTestimonial);
