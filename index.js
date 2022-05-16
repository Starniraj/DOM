console.log("hello")

// 1.

const element1 = document.getElementById("text");
console.log(element1.innerText);

// 2.


var element2 = document.getElementsByTagName("h1")
console.log(element2[0].innerText);
console.log(element2[1].innerText);

// 3.
const element3 = document.getElementsByClassName("class1")
console.log(element3[0].innerText);

// 4.

const element4 = document.getElementsByTagName("h1");
element4[2].innerText = "Hello World";
console.log(element4[2].innerText);

// 5.
function flexChange(){
    const element5 = document.getElementsByClassName("container");
    element5[0].style.flexDirection = "column";
}
// 6. 
var element5 = document.getElementsByTagName("h1");
element5[2].setAttribute('id','h2Tag')
element5[2].style.color = "red";

// 7.
function textChange(){
    const element7 = document.getElementsByClassName("textChange");
    element7[0].innerText = "Welcome to Elevation academy";
}
function startTime() {
    const today = new Date();
    let h = today.getHours()> 12 ? today.getHours() - 12 : today.getHours();
    var am_pm = today.getHours() >= 12 ? "PM" : "AM";
    h = h < 10 ? "0" + h : h;
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("time").innerHTML =  h +":"+ m + ":" + s + am_pm;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }



8. // Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

function printValue(){
    const element = document.querySelector("#year");
    const element1 = element.value;
    document.querySelector("#printValue").append(element1);
}

// 9.
function form1(){
    var form = document.createElement("form")
    form.setAttribute("method","get")
    form.setAttribute("action","submit")
    var name = document.createElement("input");
    name.setAttribute("type","text");
    name.setAttribute("name","Fullname");
    name.setAttribute("placeholder","Fullname");
    // name.setAttribute("required");

    var email = document.createElement("input");
    email.setAttribute("type","email");
    email.setAttribute("name","email");
    email.setAttribute("placeholder","email@prepbyte.com");
    email.setAttribute("pattern","[a-zA-Z0-9]+@prepbyte.com");
    
    var phoneNo = document.createElement("input");
    phoneNo.setAttribute("type","tel");
    phoneNo.setAttribute("name","phoneNo");
    phoneNo.setAttribute("placeholder","+91");
    phoneNo.setAttribute("pattern","[91]{2}[0-9]{10}");
    // phoneNo.setAttribute("required");

    var DOB = document.createElement("input");
    DOB.setAttribute("type","date");
    DOB.setAttribute("name","DOB");
    DOB.setAttribute("placeholder","DOB");
    DOB.setAttribute("min","1995-01-01");
    // DOB.setAttribute("required");

    var submit = document.createElement("input")
    submit.setAttribute("type","submit")
    submit.setAttribute("value","submit")
    form.appendChild(name);
    form.appendChild(email);
    form.appendChild(phoneNo);
    form.appendChild(DOB);
    form.appendChild(submit);

    document.getElementsByClassName("form")[0]
    .appendChild(form);
   
}
form1();


