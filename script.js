imageInput.onchange = function(e) {
    let formData = new FormDate()
    formDate.append(
'xxx',e.target.files[0])
    $.ajax(
        {
      url: 'yyy',
      data: formData,
      processData: false,
      contentType: false,
      type: 'POST',
    })
}