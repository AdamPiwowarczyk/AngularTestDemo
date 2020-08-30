import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;
  let debugElement: DebugElement;

  let data = {
    message: null
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule,
        MatIconModule 
      ],
      declarations: [ FirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('pusta wiadomość - chat-bubble_outline', () => {
    fixture.detectChanges();
    const ikona = debugElement.query(By.css('.checklist-comment-icon'));
    const nativeElement = ikona.nativeElement;
    const textContent = nativeElement.textContent.trim();
    expect(textContent).toEqual('chat_bubble_outline');
  });

  test('pełna wiadomość - message', () => {
    component = fixture.componentInstance;
    component.data = data;
    data.message = 'ads';
    fixture.detectChanges();

    const komentarz = debugElement.query(By.css('.checklist-comment'));
    const ikona = komentarz.query(By.css('.checklist-comment-icon'));
    
    const nativeElement = ikona.nativeElement;
    const textContent = nativeElement.textContent.trim();

    expect(textContent).toEqual('message');
  });

  test('ostatni - chat-bubble_outline', () => {
    fixture.detectChanges();
    const ikona = debugElement.query(By.css('.checklist-comment-icon'));
    const nativeElement = ikona.nativeElement;
    const textContent = nativeElement.textContent.trim();
    expect(textContent).toEqual('chat_bubble_outline');
  });
});
