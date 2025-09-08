import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private api = 'http://localhost:5000/api/movies';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Movie[]> { return this.http.get<Movie[]>(this.api); }
  getById(id: string) { return this.http.get<Movie>(${this.api}/${id}); }
}