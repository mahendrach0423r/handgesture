prediction=" ";

Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    png_quality:90


});

 camera =document.getElementById("camera");

  Webcam.attach('#camera');

function take_snapshot(){

 Webcam.snap(function(data_uri){
     document.getElementById('result').value = '<img src="captured_image" src="'+data_uri+'"/>'
 });
}
 console.log('ml5.version:',ml5.version);

 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yxhFWuw-j/",modelLoded)

 function modelLoded(){
    console.log('ModelLoded!')
 }

 function check()                                                     
 {
     img=document.getElementById("results")
     classifiy.classifier(img,gotResults)
 }

  function gotResults(error , results)
  {
     if(error)
     {
         console.log(error);
     }
     else
     {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speck();
        if(results[0].label == "best")
        {
            document.getElementById("update_emoji").innerhtml = "&#128077;";
        }
        if(results[0].label == "victory")
        {
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }
        if(result[0].label == "amazing")
        {
            document.getElementById("update_emoji").innerHTMl = "&#128076;";
        }
        
     }
  }
 

 