/**
 * Created by MagdyElsayyad on 15/07/16.
 */
import { AfterViewChecked, Directive } from '@angular/core';
declare var componentHandler: any;

@Directive({
  selector: '[mdl]',
  standalone: true
})
export class MDL implements AfterViewChecked {
  ngAfterViewChecked() {
    componentHandler.upgradeAllRegistered();
  }
}
