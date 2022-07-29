var email = createLabel("label", "for", "email", "Email");
var box = createInput("input", "type", "email", "id", "email", "content");
var br = createBreak("br");
var fName = createLabel("label", "for", "firstname", "Firstname");
var box1 = createInput("input", "type", "text", "id", "firstname", "content");
var lName = createLabel("label", "for", "lastname", "Lastname");
var box2 = createInput("input", "type", "text", "id", "lastname", "content");
var pass = createLabel("label", "for", "password", "Password");
var box3 = createInput("input","type","password","id","password","content");
var number = createLabel("label", "for", "phonenumber", "PhoneNumber");
var box4 = createInput("input","type","number","id","phonenumber","content");
var br1 = createBreak("br");
var br2 = createBreak("br");
var br3 = createBreak("br");
var br4 = createBreak("br");
var br5 = createBreak("br");
var br6 = createBreak("br");
var br7 = createBreak("br");
var br8 = createBreak("br");
var br9 = createBreak("br");
var button = createLabel("button", "type", "button", "CLICKME");
document.body.append(fName,br,box1,br1,lName,br2,box2,br3,email,br4,box,br5,pass, br6,box3,br7,number,br8, box4,br9,button);

function createLabel(tagname, attrname, attrvalue, content) {
  var labe = document.createElement(tagname);
  labe.setAttribute(attrname, attrvalue);
  labe.innerHTML = content;
  return labe;
}
function createInput(tagname,attrname,attrvalue,attrname1,attrvalue1,content) {
  var input = document.createElement(tagname);
  input.setAttribute(attrname, attrvalue);
  input.setAttribute(attrname1, attrvalue1);
  input.innerHTML = content;
  return input;
}
function createBreak(tagname) {
  var breakline = document.createElement(tagname);
  return breakline;
}
