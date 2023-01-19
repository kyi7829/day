const toDoform = document.querySelector(".js-toDoForm"),
    toDoInput = toDoform.querySelector("input"),
    output = document.querySelector(".js-output");

function paint(text){
  
  var lastText = "";

  var textd = ""+ text;
  var year = textd.substring(0,4);
  var month = textd.substring(4,6);
  var day = textd.substring(6,8);

  var dd = year+"/"+month+"/"+day;
  
  var dateA = new Date(dd);

  var today = new Date().getTime();
  var gap = dateA - today;
  var day = Math.ceil(gap / (1000 * 60 * 60 * 24));

  if(day > 0){
    lastText = day + "일 남았습니다.";
  } else if(day == 0){
    lastText = "D-Day 당일";
  } else{
    lastText = day*-1 + "일 지났습니다.";
  }
  
  output.value = lastText;
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paint(currentValue);
    output.style.display = "";
    toDoInput.value = "";
}


function init() {
    output.style.display = 'none';
    toDoform.addEventListener("submit", handleSubmit)
}

init();
