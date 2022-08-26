

  function formsubmit(){
   
    const appointmen =document.querySelector("input#appointmen").value;
    
    let seldate=new Date(appointmen);
    let day = seldate.getDay();
    //alert(day);
    if(day!=0){
        document.getElementById("message").removeAttribute("class");
        return true;
    } else {
        document.getElementById("message").setAttribute("class", "hidden");
        var resultHtml = '<p>Firstname: '+document.querySelector("input#firstname").value+'</p>';
        resultHtml += '<p>Lastname: '+document.querySelector("input#lastname").value+'</p>';
        resultHtml += '<p>Email: '+document.querySelector("input#email").value+'</p>';
        resultHtml += '<p>Date: '+seldate+'</p>';
        resultHtml += '<p>Comment: '+document.querySelector("#subject").value+'</p>';
        
      
        
        document.getElementById("result").removeAttribute("class");
        document.querySelector("#result").innerHTML=resultHtml;
       
    }
    
   
  }