import { Component, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PlyrComponent } from 'ngx-plyr';
import { WebServiceService } from 'src/shared/web-service.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { environment } from './../../environments/environment.prod';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';

declare var $;


@Component({
  selector: 'app-lms-introduction',
  templateUrl: './lms-introduction.component.html',
  styleUrls: ['./lms-introduction.component.scss'],
  template: `<plyr style="display: block; width: 640px;" plyrTitle="Video 1" [plyrSources]="videoSources" (plyrInit)="player = $event" (plyrPlay)="played($event)"></plyr>
	
	<button (click)="play()">Play</button>`,
  styles: [`h1 { font-family: Lato; }`]
})


export class LmsIntroductionComponent implements OnInit {
  userData=<any>{}
  topicName: []
  topicCount
  chName: []
  listTwo:[]
  listOne:[]
  chapterID
  studyMaterial: []
  pdfPath
  topic_id
  loaderShow = false;
  checkRadio = true;
  urlChapter_id
  urlTopic_id
  radio
  type
  allChapter: []
  exam_id
  exmName
  answerArray = []
  arr = [
    { item: 1 },
    { item: 1 },
    { item: 1 },
    { item: 1 },
    { item: 1 }

  ]
  QuesData: []
  constructor(private _sanitizer: DomSanitizer, private service: WebServiceService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.exmName = this.route.snapshot.params.exmName
    console.log("Path: ", this.route);
    this.exam_id = this.route.snapshot.params.exam_id
    this.urlChapter_id = this.route.snapshot.params.chapter_id    
    this.urlTopic_id = this.route.snapshot.params.topic_id
    this.type = this.route.snapshot.params.type
    this.userData = JSON.parse(localStorage['userData'])
    // this.getAllChapter()
    this.getChapterAndTopicsByExam()

    this.pdfPath = environment.PDFPATH

    const docElmWithBrowsersFullScreenFunctions = document.documentElement as HTMLElement & {
      mozRequestFullScreen(): Promise<void>;
      webkitRequestFullscreen(): Promise<void>;
      msRequestFullscreen(): Promise<void>;
    };

    const docWithBrowsersExitFunctions = document as Document & {
      mozCancelFullScreen(): Promise<void>;
      webkitExitFullscreen(): Promise<void>;
      msExitFullscreen(): Promise<void>;
    };

    $(".menu_bar_btn").click(function () {
      $(".lms_sidebar").toggle();
    });

    $(".menu_bar_btn").click(function () {
      $(".br_rgt").toggleClass("custm_wid");
    });

    // this.service.getChapterNameById(this.route.snapshot.params.chapter_id).subscribe(data => {
    //   console.log(data);
    //   this.chName = data.data[0].chapter
    // })

    // this.service.getTopicsByChapterId(this.route.snapshot.params.chapter_id).subscribe(data => {
    //   console.log("All Topics By Chapter Id : ",data)
    //   this.topicName = data.data
    //   this.topicCount = data.data.length
    //   this.topic_id = data.data[0]._id
    //   if(this.topic_id){
    //     this.loaderShow = false;
    //     this.getStudyMaterial(this.topic_id)
    //   }  
    // })

    // this.service.getChapterByExamId(this.ids).subscribe(data => {
    //   console.log(data);
    //   this.allChapter = data.data[0].chapter
    // })


    // this.getTopics(this.route.snapshot.params.chapter_id);

    //alert(this.indexes)
    // if(this.urlChapter_id || this.urlTopic_id || this.indexes){
    //   this.service.getTopicsByChapterId(this.urlChapter_id).subscribe(data => {
    //     console.log("All Topics By Chapter Id : ",data)
    //     this.topicName = data.data
    //     this.topicCount = data.data.length
    //     if(this.urlTopic_id){
    //       this.loaderShow = false;
    //       this.checkRadio = true;
    //       this.getStudyMaterial(this.urlTopic_id)
    //       this.getAllChapter();
    //     }  
    //   })
    // }
    // if(!this.urlTopic_id){
    //   this.service.getTopicsByChapterId(this.route.snapshot.params.chapter_id).subscribe(data => {
    //     console.log("All Topics By Chapter Id : ",data)
    //     this.topicName = data.data
    //     this.topicCount = data.data.length
    //     this.topic_id = data.data[0]._id
    //     if(this.topic_id){
    //       this.loaderShow = false;
    //       this.getStudyMaterial(this.topic_id)
    //       this.getAllChapter();
    //     }  
    //   })
    // }
  }



  transform(v: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(v);
  }

  openfullscreen() {
    console.log("open fu")
    // Trigger fullscreen
    const docElmWithBrowsersFullScreenFunctions = document.documentElement as HTMLElement & {
      mozRequestFullScreen(): Promise<void>;
      webkitRequestFullscreen(): Promise<void>;
      msRequestFullscreen(): Promise<void>;
    };

    if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
      docElmWithBrowsersFullScreenFunctions.requestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
      docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
    } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
      docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
    }
    //this.isfullscreen = true;
  }

  closefullscreen() {
    const docWithBrowsersExitFunctions = document as Document & {
      mozCancelFullScreen(): Promise<void>;
      webkitExitFullscreen(): Promise<void>;
      msExitFullscreen(): Promise<void>;
    };
    if (docWithBrowsersExitFunctions.exitFullscreen) {
      docWithBrowsersExitFunctions.exitFullscreen();
    } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
      docWithBrowsersExitFunctions.mozCancelFullScreen();
    } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      docWithBrowsersExitFunctions.webkitExitFullscreen();
    } else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
      docWithBrowsersExitFunctions.msExitFullscreen();
    }
    //this.isfullscreen = false;
  }

  @ViewChild(PlyrComponent)
  plyr: PlyrComponent;

  // or get it from plyrInit event
  player: Plyr;

  videoSources: Plyr.Source[] = [
    {
      src: 'bTqVqk7FSmY',
      provider: 'youtube',
    },
  ];

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }

  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }

  stop(): void {
    this.player.stop(); // or this.plyr.player.play()
  }

  // getTopics(id) {
  //   this.service.getTopicsByChapterId(id).subscribe(data => {
  //     console.log("Topic Data ", data);
  //     this.topicName = data.data
  //     // this.topicCount = data.count;
  //     this.chName = name;
  //     this.chapterID = id;
  //   })
  // }

  getStudyMaterial(id) {
    this.service.getStudyMaterialByTopicID(id).subscribe(data => {
      console.log("Study Material Data : ", data);
      this.urlTopic_id = id
      this.studyMaterial = data.data
      this.getOuesByTopic(id)
    })
  }

  shuffleArray(array, item) {

    var m = array.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  matchAnswer(item) {
    if(item.answer_type=='FillUp'){
      var flag=false;
      item.selectedAnswer.forEach(element => {
        if(item.answer[0].correctOptions[element.index]!=element.value){
          flag=true;
      }});

      console.log('1', flag);
      console.log('2', item.answer[0].correctOptions);
      console.log('3', item.selectedAnswer);
   
      item.wrongAnswer = flag;
 
    }

    if(item.answer_type=='Multiple') {

    console.log(item.answer[0].correct_options);

    var found = false;
    for (var i = 0; i < item.answer.length; i++) {
      if (item.answer[i].correct_answer == false && item.answer[i].isChecked) {
        found = true;
        break;
      }
    }

    item.wrongAnswer = found;
   
  }

  if(item.answer_type=='DragDrop'){
    console.log('asd');
   console.log(item.answer[0].appropriate_steps)
   item.wrongAnswer=false;
   item.answer[0].appropriate_steps.forEach(element => {
        if(item.answer[0].correctOptions[element.index]!=element.value){
          item.wrongAnswer = true;
      }});
      console.log('asdasd');
      console.log(item.wrongAnswer);
      console.log(item.answer[0].correctOptions);
      console.log( item.selectedAnswer);
      
  }
  item.checkAnswer = true;
  console.log('final check');
  console.log(item.wrongAnswer);
  }

  pushAnswer(item, ques) {
    ques.checkAnswer = false;
    console.log(item);
  }

 
  
  getOuesByTopic(id) {
    var obj = {
      topic_id: id,
      type: this.type ? this.type : 'Paid'
    }
    console.log("---oues obj", obj)
    this.service.getQuestionsByTopic(obj).subscribe(data => {
      console.log("Ques Data : ", data);
      this.QuesData = data.data
      data.data.forEach(async (element, index) => {
        if (element.answer_type == "FillUp") {
          var arr = []
          // element.answer[0].correctOptions = Object.assign({}, element.answer[0].fillups_options);
          element.answer[0].correctOptions = await Object.assign([], element.answer[0].fillups_options);
          arr = await this.shuffleArray(element.answer[0].fillups_options, element.answer[0])
          element.answer[0].store_ans = await arr
          element.answer[0].shuffledOptions = await this.shuffleArray(element.answer[0].fillups_options, element.answer[0])
          // Object.assign(element.answer[0].correct_options, element.answer[0]);
        }
        if (element.answer_type == "DragDrop") {
          element.basket=[];
          element.answer[0].correctOptions = await Object.assign([], element.answer[0].appropriate_steps);
          element.answer[0].appropriate_steps = this.shuffleArray(element.answer[0].appropriate_steps, element.answer[0].appropriate_steps)
        }
      });
      console.log("==shuffle",this.QuesData)
    })
  }

  storeAnswer(item,index,ques) {
    /*console.log("===check",item,index,ques)
    ques.answer[0].store_ans[index] = item
    ques.checkAnswer = false;
    console.log(ques); */

    console.log('ques is ', ques);
    if(typeof ques.selectedAnswer === "undefined"){
      ques.selectedAnswer=[];
    }
   var objIndex = ques.selectedAnswer.findIndex((obj => obj.index == index));
    if(objIndex!=-1){
      ques.selectedAnswer[index]={index:index, value:item};
    }else{
      ques.selectedAnswer.push({index:index, value:item});
    }
    // console.log(ques);
  }
  // getAllChapter(){
  //   this.service.getAllChapter().subscribe(data => {
  //     console.log(data);
  //     this.allChapter = data.data
  //   })
  // }

  // getAllChapter() {
  //   var obj= {
  //     id: this.exam_id
  //   }
  //   this.service.getChapterByExam(obj).subscribe(data => {
  //     console.log(data);
  //     this.allChapter = data.data
  //     this.urlTopic_id = data.data[0].topics[0]._id
  //     this.getStudyMaterial(data.data[0].topics[0]._id)
  //   })
  // }

  getChapterAndTopicsByExam() {
    var obj = {
      exam_id: this.exam_id
    }
    console.log("====oj", obj)
    this.loaderShow = true
    this.service.getChapterAndTopicsByExam(obj).subscribe(data => {
      console.log(data);
      this.loaderShow = false
      this.allChapter = data.data
      if (this.allChapter.length > 0 && data.data[0].topics.length > 0) {
        this.urlChapter_id = this.urlChapter_id ? this.urlChapter_id : data.data[0]._id
        this.urlTopic_id = this.urlTopic_id ? this.urlTopic_id : data.data[0].topics[0]._id
        this.getStudyMaterial(this.urlTopic_id)
      }
    })
  }

  // getTopicsByChapter(id){
  //   this.service.getTopicsByChapterId(id).subscribe(data => {
  //     console.log("All Topics By Chapter Id : ",data)
  //     this.topicName = data.data
  //     this.topicCount = data.data.length
  //     if(this.urlTopic_id){
  //       this.loaderShow = false;
  //       this.checkRadio = true;
  //       this.getStudyMaterial(this.urlTopic_id)
  //       // this.getAllChapter();
  //     }  
  //   })
  // }
  items = [
    'Step1',
    'Step2',
    'Step3',
    'Step4',
    'Step5'
  ];

  basket = [

  ];
  showCorrectAnswer(item){
    item.basket = item.answer[0].correctOptions
  }
  drop(event: CdkDragDrop<string[]>, ques) {
    console.log('aesdrfasdasda');
    console.log(ques);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log('Gubla');
      console.log(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      
        console.log(event.container.data, event.previousIndex, event.currentIndex);
    }

    console.log(ques.basket);
    console.log(ques.answer[0].correctOptions);

    var is_same = (ques.basket.length == ques.answer[0].correctOptions.length) && ques.basket.every(function(element, index) {
      return element === ques.answer[0].correctOptions[index]; 
  });
  ques.isWrong=!is_same;
  ques.checkAnswer=false;
  console.log(is_same);
  }

  getQuestionsByID(data) {
    this.service.getQuestionsByID(data).subscribe(data => {
      console.log("Question Data: ", data)
      if (data.data.answer_type == "Multiple") {
        this.answerArray = data.data.answer
        console.log("Answers Array : ", this.answerArray)
      }
    })
  }
  saveAnswer(questionItem){
    console.log('quesssssssssss', questionItem, this.userData._id);
    let element: HTMLElement = document.getElementsByClassName('carousel-control-next')[0] as HTMLElement;
    console.log(element,"eleememeenf");
    // let answers = [];
    var flag=false;
    questionItem.selectedAnswer.forEach(element => {
      if(questionItem.answer[0].correctOptions[element.index]!=element.value){
        flag=true;
    }});
    let answer = {
                  exam_id: this.exam_id,
                  question_id: questionItem.id,
                  question_correct: flag,
                  topic_id: questionItem.topic_id,
                  user_id: this.userData._id,
                }
    console.log('anseeee', answer);            
    this.service.saveAnswer(answer).subscribe(response => {
      console.log("response Data: ", response)
      element.click();
      // if (data.data.answer_type == "Multiple") {
      //   this.answerArray = data.data.answer
      //   console.log("Answers Array : ", this.answerArray)
      // }
    })          
    // answers.push(answer);
  }
}
