import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  count = 0;
  btnClick = [];
  paragraphState = false;

  onBtnClick() {
    this.count += 1;
    this.btnClick.push(this.count);
    this.paragraphState = !this.paragraphState;
  }
}
