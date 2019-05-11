var theContent = $('#content2');
 
$('#save').on('click', function(){
  var editedContent   = theContent.html();
  localStorage.newContent = editedContent;
});
