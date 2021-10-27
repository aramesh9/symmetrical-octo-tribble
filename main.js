function startClassifaction(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/MKlNanbME/model.json',modelReady);

}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,results){
    console.log('got Result');
}
var dog = 0;
var cat = 0;

function gotResult(error,results){
  if(error){
      console.error(error);
  }
  else{
      console.log(results);
      random_number_r=Math.floor(Math.random()*255)+1;
      random_number_g=Math.floor(Math.random()*255)+1;
      random_number_b=Math.floor(Math.random()*255)+1;
      document.getElementById("result_label").innerHTML='I can hear - '+results[0].label;
      document.getElementById("result_confidence").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+"%";
      document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      img1=document.getElementById('ear')
      if(results[0].label=="cat"){
          img1.src='https://shravaripatil.github.io/Sound_controlled_animals/meow.gif';
      }
      else if(results[0].label=="dog"){
          img1.src='https://shravaripatil.github.io/Sound_controlled_animals/bark.gif';
      }
      else if(results[0].label=="lion"){
          img1.src='https://i.pinimg.com/originals/75/4c/e2/754ce202ab77d2db2f8c898826bfd41e.gif';
      }
      else if(results[0].label=="cow"){
          img1.src='https://media4.giphy.com/media/ZgUU4915HJ7snCN99b/giphy.gif'; 
      }
      else{
        img1.src='https://shravaripatil.github.io/Sound_controlled_animals/listen.gif';
      }
  }
}
