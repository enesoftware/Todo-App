import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-app';

  work: string = "";
  updateWork: string = "";
  works: string[] = ["Deneme1", "Deneme2", "Deneme3"];
  isUpdateFormActive: boolean = false;
  index: number = 0;

  save() {
    this.works.push(this.work);
    this.work = "";
  }

  remove(index: number) {
    let result: boolean = confirm("Kaydı silmek istiyor musunuz?")
    if (result) {
      this.works.splice(index, 1);
    }
  }

  update() {
    this.works[this.index] = this.updateWork;
    this.cancel();

  }

  get(work: string, index: number) {
    this.updateWork = work;
    this.index = index;
    this.isUpdateFormActive = true;
  }

  cancel() {
    this.isUpdateFormActive = false;
  }

  changeInputClass() {
    if (this.work.length < 3)
      return "is-invalid"

    return "is-valid"
  }
}
