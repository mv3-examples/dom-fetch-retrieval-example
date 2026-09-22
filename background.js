// example
var lookupUrl = "https://www.w3schools.com/html/html_paragraphs.asp";

async function innerTextFromFetch() {
  let response = await fetch(lookupUrl, {
    method: "GET",
    //credentials: "include",
  });
  let text = await response.text();
  const document = new DOMParser().parseFromString(text, "text/html")
  
  var strTestCase = document.getElementsByClassName('w3-example')[0].childNodes[3].innerText;
  console.log(strTestCase);
}

browser.menus.create({
  title: "Test DOM fetch",
  contexts: ["selection"],
  onclick: (info, tab) => innerTextFromFetch()
});
