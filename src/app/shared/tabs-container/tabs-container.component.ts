import { AfterContentInit, Component, ContentChildren, QueryList, } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit {
  constructor() {

  }
  
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList()




  ngAfterContentInit(): void {
  }

}
