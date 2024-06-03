import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private apiUrl = 'https://192.168.10.182:7265/api/training';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  deleteParticipant(trainingId: number, participantId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${trainingId}/participantes/${participantId}`);
  }

  getParticipants(trainingId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${trainingId}/participantes`);
  }

  addParticipant(trainingId: number, participantName: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${trainingId}/participantes`, participantName);
  }
}
