import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import "rxjs/add/operator/map";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http.get("/posts").pipe(
      map(posts => {
        console.log("posts: ", posts);
        return posts;
      })
    );
  }
}

//return this.http.get(this.baseUrl, { responseType: 'text' }).pipe(
/*    map(res => res),
    catchError(<T>(error: any, result?: T) => {
        console.log(error);
        return of(result as T);
    })
);
} */
