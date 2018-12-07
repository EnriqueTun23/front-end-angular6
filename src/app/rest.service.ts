import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class RestService {
  urlToken = 'http://127.0.0.1:8000/api-token-auth/';
  url = 'http://localhost:8000/api/ejemplo/';
  constructor( public http: HttpClient ) {
  }
  postToken(user) {
  //   this.httpOptions = {
  //     headers: new HttpHeaders({
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //     })
  //   };
  //  return  this.http.post(this.urlToken, JSON.stringify(user), this.httpOptions).subscribe(data => {
  //    console.log(data);
  //  }, err => {
  //    console.log(err);
  //  });
  }
  example() {
    const body = {
      username: 'admin',
      password: 'qwerty231094'
    };
    this.http.post(this.urlToken, body).subscribe(data => {
      // console.log(JSON.stringify(data['token']));
      // console.log(data['token']);
      this.list(data['token']).then(list => {
        console.log(list);
      }, error => {
        alert('error en el servidor');
      })
    }, error => {
      alert('Usuario invalido');
      console.log(error);
    });
  }
  list(token) {
    return new Promise((resolve, reject) => {
      // const tokens_data = 'Token' + ' ' + token;
    // Authorization: tokens_data
    const headers = new HttpHeaders({
      Authorization: 'Token' + ' ' + token
     });
     // const options = {headers: headers};
     // console.log(options);
    this.http.get(this.url, {headers: headers}).subscribe(data => {
     resolve(data);
    }, error => {
     reject(error);
    });
    });
  }
}
