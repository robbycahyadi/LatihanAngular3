import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  constructor(private router: Router) {
  }

  login(username: string, password: string) {
    this.loggedIn = (username === 'ABC' && password === '123');
    if (this.loggedIn) {
      alert('Autentikasi sukses');
      this.router.navigate(['/anggota']);
    } else {
      alert('Autentikasi gagal');
    }
  }

  logout() {
    this.loggedIn = false;
    this.router.navigate(['/home']);
  }

  isAuthenticated() {
    const promise = new Promise(
      ((resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 100);
      })
    );
    return promise;
  }
}
