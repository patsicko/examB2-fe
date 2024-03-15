import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
ngOnInit(): void {
    this.animatedText()
}


sentence="😊👋 You’re most welcome! <br> This is Musanze secondary school management system. 👋 ";
displayText='';
welcome:boolean=false;

animatedText(){
  const sentenceArray=this.sentence.split('');
  let currentIndex=0;
  const intervalId=setInterval(()=>{
   this.displayText += sentenceArray[currentIndex];
   currentIndex++;

   if(currentIndex === sentenceArray.length){
    this.welcome=true;
    clearInterval(intervalId)
   }
  },50)
}

}
