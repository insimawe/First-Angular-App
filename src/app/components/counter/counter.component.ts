import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
    //#region fields
        counterValue = signal(0);
    //#endregion


   //#region Methods
    increment(){
        //this.counterValue.set(this.counterValue() + 1);
        this.counterValue.update((val) => val + 1);
    }

    decrement(){
        this.counterValue.update((val) => val - 1);
    }
    reset(){
        this.counterValue.set(0);
    }
   //#endregion

}
