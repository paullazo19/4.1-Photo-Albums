$(function(){
  // Code here!

  var albumOne = [
    {
      title: "tiger",
      src: "assets/tiger.jpg"
    },
    {
      title: "fox",
      src: "assets/fox.jpg"
    },
    {
      title: "deer",
      src: "assets/deer.jpg"
    }
  ]

  //variables
  var $photoList = $("[data-js= photo_list]");
  var $modalTiger = $("[data-js= modal_tiger]");
  var $modalFox = $("[data-js= modal_fox]");
  var $modalDeer = $("[data-js= modal_deer]");
  var $backButton = $("[data-js= back_button]");

  albumOne.forEach(function(image){
    //create parent element
    var imageContainer = $(`<li class='image__container'>${image.title}</li>`);

    //create image tag with needed attributes from image var
    var newImage = $("<img class='image'>").attr("src", image.src);

    //place image in container
    imageContainer.append(newImage);

    //place container with image in document
    $photoList.append(imageContainer);
  });

    // modal screens
    // $photoList.on("click", "li:first-child", function(){
    //   $modalTiger.toggleClass("modal__hide--tiger")
    // })
    //
    // $photoList.on("click", "li:nth-child(2)", function(){
    //   $modalFox.toggleClass("modal__hide--fox")
    // })
    //
    // $backButton.on("click", function(){
    //   $modalTiger.toggleClass("modal__hide--tiger modal__hide--fox")
    // })
    //
    // $backButton.on("click", function(){
    //   $modalFox.toggleClass("modal__hide--tiger modal__hide--fox")
    // })

    $photoList.on("click", "li:first-child", function(){
      $modalTiger.show("modal__hide--tiger")
    })

    $photoList.on("click", "li:nth-child(2)", function(){
      $modalFox.show("modal__hide--fox")
    })

    $photoList.on("click", "li:nth-child(3)", function(){
      $modalDeer.show("modal__hide--deer")
    })

    $backButton.on("click", function(){
      $modalTiger.hide("modal__hide--tiger")
    })

    $backButton.on("click", function(){
      $modalFox.hide("modal__hide--fox")
    })

    $backButton.on("click", function(){
      $modalDeer.hide("modal__hide--deer")
    })




});
