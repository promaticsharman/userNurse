import { Component, OnInit } from '@angular/core';
import { WebServiceService } from 'src/shared/web-service.service';
import { ActivatedRoute } from '@angular/router';

declare var $;
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  examName: []
  ids
  chapterName: []
  chapter_id
  chapter_name
  topicName: []
  chName
  chapterID
  loaderShow = true;
  exam_id
  chapter
  type
  exmName
  constructor(private service: WebServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.exmName = this.route.snapshot.params.exam_name
    this.exam_id = this.route.snapshot.params.exam_id
    this.type = this.route.snapshot.params.type ? this.route.snapshot.params.type : 'Paid'
    console.log(this.exam_id)
    $(".menu_bar_btn").click(function () {
      $(".lms_sidebar").toggle();
    });

    $(".menu_bar_btn").click(function () {
      $(".br_rgt").toggleClass("custm_wid");
    });
    this.getChapterByExam()

    // this.service.getAllExamName().subscribe(data => {
    //   console.log(data);
    //   this.examName = data.data[0].examName
    //   this.ids = data.data[0]._id
    //   console.log("this._id: ", this.ids)

    //   this.service.getChapterByExamId(this.ids).subscribe(data => {
    //     console.log(data);
    //     this.chapterName = data.data[0].chapter
    //     this.chapter_name = data.data[0].chapter[0]._id;
    //     this.chapter_id = data.data[0].chapter[0].chapter;
    //   })
    // })
    // this.getExamName();
  }

  // getExamName() {
  //   this.service.getAllExamName().subscribe(data => {
  //     console.log(data);
  //     this.examName = data.data[0].examName
  //     this.ids = data.data[0]._id
  //     console.log("this._id: ", this.ids)

  //     this.service.getChapterByExamId(this.ids).subscribe(data => {
  //       console.log(data);
  //       this.chapterName = data.data
  //       console.log("ChapterName: ", this.chapterName)
  //       if (data.data[0]._id) {
  //         this.loaderShow = false;
  //         this.getTopics(data.data[0]._id, data.data[0].chapter);
  //       }
  //     })
  //   })
  // }

  // getTopics(id, name) {
  //   console.log('inside get topics');
  //   console.log(name);
  //   this.service.getTopicsByChapterId(id).subscribe(data => {
  //     console.log("Topic Data ", data);
  //     this.topicName = data.data
  //     this.chName = name;
  //     this.chapterID = id;
  //   })
  // }

  getTopics(id) {
    var obj = {
      id: id
    }
    this.service.getTopicByChapter_id(obj).subscribe(data => {
      console.log(data);
      this.topicName = data.data
      if (data.data.length > 0) {
        this.chName = data.data[0].chapter_id.chapter;
        this.chapterID = data.data[0].chapter_id._id;

      }
    })
  }

  getChapterByExam() {
    var obj = {
      id: this.exam_id
    }
    console.log("onjj", obj)
    this.service.getChapterByExam(obj).subscribe(data => {
      console.log(data);
      this.loaderShow = false;
      this.chapter = data.data
      if (this.chapter.length > 0) {
        this.getTopics(data.data[0]._id)
      }
    })
  }

}
