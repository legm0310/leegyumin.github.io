$(document).ready(function () { 
  var page_url = window.location.href; 
  var page_id = page_url.substring(page_url.lastIndexOf("#") + 1); 
  // alert(page_id); 
if (page_id == 'profile') { 
  $('html, body').animate({ 
      scrollTop: $('profile').offset().top 
  }, 0.35);
   } else if (page_id == 'portfolio') { 
       $('html, body').animate({ 
           scrollTop: $('portfolio').offset().top 
          }, 0.35); 
  } else if (page_id == 'teamproject') { 
       $('html, body').animate({ 
          scrollTop: $('teamproject').offset().top 
      }, 0.35); 
  } else if (page_id == 'introduction') { 
       $('html, body').animate({ 
          scrollTop: $('introduction').offset().top 
       }, 0.35);
   } else if (page_id == 'footer') { 
    $('html, body').animate({ 
       scrollTop: $('footer').offset().top 
    }, 0.35);
}
    });
   