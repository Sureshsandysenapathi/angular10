import { Component,OnInit, OnChanges, OnDestroy, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-demo.component.html',
  styleUrl: './lifecycle-demo.component.css'
})
export class LifecycleDemoComponent implements OnInit, OnChanges, OnDestroy{
  @Input() data!: string; // Input property to observe changes
  
  constructor() {
    console.log('Constructor: Component is being constructed.');
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component initialized.');
    // Initialization logic like fetching data
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: Input properties changed.', changes);
    // Respond to input property changes
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Component is being destroyed.');
    // Cleanup logic like unsubscribing observables
  }
}
