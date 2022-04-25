import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public singlenews:any;
  public page: any = 1;
  public pageSize: any = 3;
  public id: any;

  news = [
    {
      "id": 1,
      "title": "strawerry",
      "name": "You will vainly look for fruit on it in autumn",
      "date": "27 December, 2019",
      "image": "latest-news-bg news-bg-1"
    },

    {
      "id": 2,
      "title": "tomato",
     "name": "A man's worth has its season, like tomato.",
      "date": "21 April, 2022",
      "image": "latest-news-bg news-bg-2"
    },
    {
      "id": 3,
      "title": "berry juice",
      "name": "A man's worth has its season, like tomato.",
      "date": "16  August, 2017",
      "image": "latest-news-bg news-bg-3"
    },
    {
      "id": 4,
      "title": "Orange",
      "name": "Fall in love with the fresh orange",
      "date": "20 December, 2019",
      "image": "latest-news-bg news-bg-4"
    },

    {
      "id": 5,
      "title": "barries",
     "name": "Why the berries always look delecious",
      "date": "05 july, 2011",
      "image": "latest-news-bg news-bg-5"
    },
    {
      "id": 6,
      "title": "fruits Juice",
      "name": "Love for fruits are genuine of John Doe",
      "date": "19 Ocotber, 2011",
      "image": "latest-news-bg news-bg-6"
    },
    {
      "id": 7,
      "title": "strawerry",
      "name": "You will vainly look for fruit on it in autumn",
      "date": "27 December, 2019",
      "image": "latest-news-bg news-bg-1"
    },

    {
      "id": 8,
      "title": "tomato",
     "name": "A man's worth has its season, like tomato.",
      "date": "21 April, 2022",
      "image": "latest-news-bg news-bg-2"
    },
    {
      "id": 9,
      "title": "berry juice",
      "name": "A man's worth has its season, like tomato.",
      "date": "16  August, 2017",
      "image": "latest-news-bg news-bg-3"
    },
    {
      "id": 10,
      "title": "Orange",
      "name": "Fall in love with the fresh orange",
      "date": "20 December, 2019",
      "image": "latest-news-bg news-bg-4"
    },
  ]
  constructor(config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openScrollableContent(longContent: any, id: any) {
    debugger
    this.modalService.open(longContent, { scrollable: true });
    this.singlenews = this.news.find(i => i.id === id);
    if (typeof this.singlenews === 'undefined') {
      return null;
    }
    return this.singlenews;
  }

}
