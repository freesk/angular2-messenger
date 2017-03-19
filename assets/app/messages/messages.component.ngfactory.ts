/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './messages.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './message-input.component';
import * as import11 from './message-list.component';
import * as import12 from './message-input.component.ngfactory';
import * as import13 from './message.service';
import * as import14 from './message-list.component.ngfactory';
var renderType_MessagesComponent_Host:import0.RenderComponentType = (null as any);
class _View_MessagesComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _MessagesComponent_0_4:import3.MessagesComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MessagesComponent_Host0,renderType_MessagesComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-messages',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MessagesComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MessagesComponent_0_4 = new import3.MessagesComponent();
    this._appEl_0.initComponent(this._MessagesComponent_0_4,[],compView_0);
    compView_0.create(this._MessagesComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.MessagesComponent) && (0 === requestNodeIndex))) { return this._MessagesComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_MessagesComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_MessagesComponent_Host === (null as any))) { (renderType_MessagesComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_MessagesComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const MessagesComponentNgFactory:import9.ComponentFactory<import3.MessagesComponent> = new import9.ComponentFactory<import3.MessagesComponent>('app-messages',viewFactory_MessagesComponent_Host0,import3.MessagesComponent);
const styles_MessagesComponent:any[] = [];
var renderType_MessagesComponent:import0.RenderComponentType = (null as any);
class _View_MessagesComponent0 extends import1.AppView<import3.MessagesComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  /*private*/ _appEl_3:import2.AppElement;
  _MessageInputComponent_3_4:import10.MessageInputComponent;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  /*private*/ _appEl_10:import2.AppElement;
  _MessageListComponent_10_4:import11.MessageListComponent;
  _text_11:any;
  _text_12:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MessagesComponent0,renderType_MessagesComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','row');
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'app-message-input',(null as any));
    this._appEl_3 = new import2.AppElement(3,1,this,this._el_3);
    var compView_3:any = import12.viewFactory_MessageInputComponent0(this.viewUtils,this.injector(3),this._appEl_3);
    this._MessageInputComponent_3_4 = new import10.MessageInputComponent(this.parentInjector.get(import13.MessageService));
    this._appEl_3.initComponent(this._MessageInputComponent_3_4,[],compView_3);
    compView_3.create(this._MessageInputComponent_3_4,[],(null as any));
    this._text_4 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_6 = this.renderer.createElement(parentRenderNode,'hr',(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_8 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_8,'class','row');
    this._text_9 = this.renderer.createText(this._el_8,'\n      ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_8,'app-message-list',(null as any));
    this._appEl_10 = new import2.AppElement(10,8,this,this._el_10);
    var compView_10:any = import14.viewFactory_MessageListComponent0(this.viewUtils,this.injector(10),this._appEl_10);
    this._MessageListComponent_10_4 = new import11.MessageListComponent(this.parentInjector.get(import13.MessageService));
    this._appEl_10.initComponent(this._MessageListComponent_10_4,[],compView_10);
    compView_10.create(this._MessageListComponent_10_4,[],(null as any));
    this._text_11 = this.renderer.createText(this._el_8,'\n    ',(null as any));
    this._text_12 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.MessageInputComponent) && (3 === requestNodeIndex))) { return this._MessageInputComponent_3_4; }
    if (((token === import11.MessageListComponent) && (10 === requestNodeIndex))) { return this._MessageListComponent_10_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._MessageInputComponent_3_4.ngOnInit(); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._MessageListComponent_10_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_MessagesComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.MessagesComponent> {
  if ((renderType_MessagesComponent === (null as any))) { (renderType_MessagesComponent = viewUtils.createRenderComponentType('/Users/Dmitry/Documents/Programming/typescript/lessons/angular2-messenger/assets/app/messages/messages.component.ts class MessagesComponent - inline template',0,import8.ViewEncapsulation.None,styles_MessagesComponent,{})); }
  return new _View_MessagesComponent0(viewUtils,parentInjector,declarationEl);
}