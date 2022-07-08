import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ThanOS';

  loading = false;

  glove: string = 'infinity'
  snap: string = 'hide'

  constructor(private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.load()
  }

  ngAfterViewChecked() {
    this.cd.detectChanges();
  }

  load() {
    if (this.loading) {
      let audio = new Audio();
      audio.src = "../assets/audio/thanos_snap_sound.mp3";
      audio.load();
      audio.play();
      this.glove = 'hide';
      this.snap = 'snap';

      setTimeout(() => {
        this.glove = 'infinity';
        this.snap = "hide";
        this.loading = false;
      }, 2500)
    }
  }
}
