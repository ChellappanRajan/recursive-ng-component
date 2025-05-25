import {
  afterNextRender,
  AfterViewChecked,
  Component,
  OnInit,
  signal,
} from "@angular/core";

@Component({
  selector: "toast",
  templateUrl: "./toast.html",
  styleUrl: "./toast.style.scss",
})
export class ToastComponent {
  mounted = signal(false);

  constructor() {
    setTimeout(() => {
      this.mounted.set(true);
    });
  }
}
