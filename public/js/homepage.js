$('.card').click(function (event) {
  const postId = $(this).attr('id');
  console.log(postId);
  document.location.replace(`/post/${postId}`);
});



