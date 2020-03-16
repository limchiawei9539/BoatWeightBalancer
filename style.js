var input = document.getElementById("myFile");
var output = document.getElementById("output");
var leftsum=0;
var rightsum=0;
var leftvalues = [];

//if input exists
if(input){
//add onchange event listener
input.addEventListener("change", function () {
  if (this.files && this.files[0]) {
    var myFile = this.files[0];
    var reader = new FileReader();
    
    reader.addEventListener('load', function (e) {
        var lines=e.target.result.split("\n");
        for(var i=0;i<(lines.length)/2;i++){
            let line=lines[i].split("\+");
            let table = document.getElementById("content");
            var row=table.insertRow(-1);
            var cell=row.insertCell(0);
            cell.innerHTML=i+1;
            var cell1=row.insertCell(1);
            cell1.innerHTML='<select class="selectleft"></select>';
            var cell2=row.insertCell(2);
            cell2.innerHTML='<select class="selectright"></select>';
        }

        for(var j=0;j<lines.length;j++){
            let line1=lines[j].split("\t");
            $(".selectleft").append('<option value="'+line1[1]+'">'+line1[0]+' '+line1[1]+'</option>');
            $(".selectright").append('<option value="'+line1[1]+'">'+line1[0]+' '+line1[1]+'</option>');
        }
    });
    
    reader.readAsBinaryString(myFile);
  }   
});
}

$(document.body).on('change',".selectleft",function (e) {
    leftsum=0;
    $('.selectleft').each(function() { 
    leftsum+=parseInt($(this).val(),10);
    });
    let leftsumt=document.getElementById("leftsumtext");
    leftsumt.innerHTML="Left Sum: "+leftsum;
    if(leftsum-rightsum > 10 )
    {
        $("#left").css({"background-color":"red"});
        $("#right").css({"background-color":"white"});
    }
    else if(rightsum-leftsum > 10){
        $("#right").css({"background-color":"red"});
        $("#left").css({"background-color":"white"});
    }
    else{
        $("#right").css({"background-color":"green"});
        $("#left").css({"background-color":"green"});
    }
});

$(document.body).on('change',".selectright",function (e) {
    rightsum=0;
    $('.selectright').each(function() { 
    rightsum+=parseInt($(this).val(),10);
    });
    let rightsumt=document.getElementById("rightsumtext");
    rightsumt.innerHTML="Right Sum: "+rightsum;
    if(leftsum-rightsum > 10 )
    {
        $("#left").css({"background-color":"red"});
        $("#right").css({"background-color":"white"});
    }
    else if(rightsum-leftsum > 10){
        $("#right").css({"background-color":"red"});
        $("#left").css({"background-color":"white"});
    }
    else{
        $("#right").css({"background-color":"green"});
        $("#left").css({"background-color":"green"});
    }
});

$(document).ready(function(){
    leftsum=0;
    $('.selectleft').each(function() { 
    leftsum+=parseInt($(this).val(),10);
    });
rightsum=0;
    $('.selectright').each(function() { 
    rightsum+=parseInt($(this).val(),10);
    });
});
