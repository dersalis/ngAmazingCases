import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // Zwraca wszystkie posty
  public getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts').pipe(
      retry(3) // Spróbuj 3x i pokaż error
    );
  }

  // Zwraca post na podstawie Id
  public getPost(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id).pipe(
      retry(3) // Spróbuj 3x i pokaż error
    );
  }

  // Zwraca wszystkie posty na podstawie Id usera
  public getPostsByUser(userId: number): Observable<Array<Post>> {
    const strId = userId.toString(); // id należy przekształcić na string
    const param = new HttpParams().set('userId', strId); // parametry - przekazujemy userId
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts', {params: param}).pipe(
      retry(3) // Spróbuj 3x i pokaż error
    );
  }

  // Dodaje nowy post
  public addPost(post: Post): Observable<Post> {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts/', post).pipe(
      retry(3) // Spróbuj 3x i pokaż error
    );
  }

  // Aktualizuje / podmienia post
  public updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>('https://jsonplaceholder.typicode.com/posts/' + post.id, post).pipe(
      retry(3) // Spróbuj 3x i pokaż error
    );
  }

  // Usuwa post
  public deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>('https://jsonplaceholder.typicode.com/posts/' + id).pipe(
      retry(3) // Spróbuj 3x i pokaż error
    );
  }

  // Aktualizuje / podmienia wartości post
  public patchPost(post: Post): Observable<Post> {
    return this.http.patch<Post>('https://jsonplaceholder.typicode.com/posts/' + post.id, post).pipe(
      retry(3) // Spróbuj 3x i pokaż error
    );
  }
}
