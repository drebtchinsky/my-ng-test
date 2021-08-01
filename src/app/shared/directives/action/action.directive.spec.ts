import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActionModule } from './action.module';
import { ActionDirective } from './action.directive';
import { Component } from '@angular/core';

describe(ActionDirective.name, () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent> = null;
  let component: ActionDirectiveTestComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionDirectiveTestComponent],
      imports: [ActionModule],
    }).compileComponents();
    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const directive = new ActionDirective();
    expect(directive).toBeTruthy();
  });

  it('(D) (@Output appAction) should emit with payload when ENTER key is pressed', () => {
    const nativeElem: HTMLElement = fixture.nativeElement;
    const div: HTMLElement = nativeElem.querySelector('div');

    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    div.dispatchEvent(event);
    expect(component.hasEvent()).toBeTrue();
  });

  it('(D) (@Output appAction) should emit with payload when clicked', () => {
    const nativeElem: HTMLElement = fixture.nativeElement;
    const div: HTMLElement = nativeElem.querySelector('div');
    div.click();
    expect(component.hasEvent()).toBeTrue();
  });
});

@Component({
  template: `<div (appAction)="actionHandler($event)"></div>`,
})
class ActionDirectiveTestComponent {
  private event: Event = null;
  actionHandler(event: Event): void {
    this.event = event;
  }

  hasEvent(): boolean {
    return !!this.event;
  }
}
