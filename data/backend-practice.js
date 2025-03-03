const xhr = new XMLHttpRequest();

xhr.addEventlistener('load',() => {
  console.log(xhr.response);
});
XPathResult.open('GET','https://supersimplebackend.dev');
xhr.send();

