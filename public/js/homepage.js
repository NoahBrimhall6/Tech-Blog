$('.card').click(function (event) {
  const postId = $(this).attr('id');
  document.location.replace(`/post/${postId}`);
});



