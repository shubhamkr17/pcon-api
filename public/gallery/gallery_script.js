
$.get("/api/images", function(data, status){
  console.log(data);
  $("#lightgallery").mirandajs(data);
});
