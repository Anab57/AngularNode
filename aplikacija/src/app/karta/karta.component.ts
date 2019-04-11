import { Component, OnInit } from "@angular/core";
import { PostsService } from "../posts.service";

@Component({
  selector: "app-karta",
  templateUrl: "./karta.component.html",
  styleUrls: ["./karta.component.css"]
})
export class KartaComponent implements OnInit {
  posts: any = [];
  constructor(private postsService: PostsService) {}

  ngOnInit() {
    console.log("ana");
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      console.log("this.posts: ", this.posts);
    });
  }
}
