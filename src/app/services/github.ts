import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Github {
  http = inject(HttpClient);
  user = "JuanDChaves";
  githubApi = "https://api.github.com/users/";
  githubUser = signal<any | null>(null);

  getGithubUser() {
    const query = this.http.get<any>(this.githubApi + this.user)

    const subscription = query.subscribe((data) => {
      if(data) {
        console.log(data);
        this.githubUser.set(data);
      }

      subscription.unsubscribe();
    });
  }
}
