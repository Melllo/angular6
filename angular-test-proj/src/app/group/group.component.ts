import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  @Input() group;
  @Output() dataChange = new EventEmitter();
  showInfo = false;

  constructor() {}

  ngOnInit() {}

  isOld() {
    return +this.group.number.toString()[0] > 2;
  }

  onChange() {
    this.dataChange.emit(new Date());
  }
}
