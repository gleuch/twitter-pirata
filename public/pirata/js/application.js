$(document).ready(function() {
  var chars_left = function() {
    var val = $(this).val(), limit = (140-val.length), klass = (limit < 10 ? 'hot' : (limit < 20 ? 'warm' : ''));
    $('#chars_left span').removeClass().addClass(klass).html(limit);
    $('#tweet_submit').attr('disabled', (limit >= 140 || limit <= 0 ? 'disabled' : false)).removeClass('disabled').addClass(limit >= 140 || limit <= 0 ? 'disabled' : false);
  };

  $('textarea#tweet').bind('chars_left', chars_left).bind('keyup', chars_left).bind('change', chars_left).bind('blur', chars_left).trigger('chars_left');
});





