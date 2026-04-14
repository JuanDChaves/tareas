import { Component, inject } from '@angular/core';
import { Github } from '../../services/github';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  gitHub = inject(Github);

  ngOnInit() {
    this.gitHub.getGithubUser();
  }
}
