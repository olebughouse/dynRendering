import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, HostListener, HostBinding, ElementRef, Renderer} from '@angular/core';
import {ChildComponent} from "./child/child.component";
import {AnotherChildComponent} from "./another-child/another-child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app works!';
  childComponentHolder: any;
  wasClicked: boolean = false;

  @ViewChild('parent', {read: ViewContainerRef})
  parent: ViewContainerRef;
 
  constructor (private componentFactoryResolver: ComponentFactoryResolver, private el: ElementRef, private renderer: Renderer) {
    const childComponent = this.componentFactoryResolver.resolveComponentFactory(ChildComponent); 
    console.log("childComponent" + childComponent);
    console.log("parent");
    const anotherChildComponent = this.componentFactoryResolver.resolveComponentFactory(AnotherChildComponent)
    let anotherChildComponentHolder;
    
    
    setTimeout(()=>{
      // at this point we want the "child" component to be rendered into the app.component:
      //this.childComponentHolder = this.parent.createComponent(childComponent);
      this.parent.createComponent(childComponent);
      setTimeout(()=>{
      // at this point we want the "another-child" component to be rendered into the app.component:
      anotherChildComponentHolder = this.parent.createComponent(anotherChildComponent);
      setTimeout(()=> anotherChildComponentHolder.destroy(), 500)
      }, 1000);
    }, 1000);
  }

  removeChild(): void {
    //this.childComponentHolder.destroy();    
  }
  
  @HostBinding('style.color') color: string;

  @HostListener('click') 
  onClick(): void {
    if(!this.wasClicked) {
      this.color = "green";
      this.wasClicked = true;
      console.log("none");
      this.renderer.setElementStyle(this.el.nativeElement.children[0], 'visibility', 'hidden');
      
    }
    else {
      this.color = "black";
      this.wasClicked = false; 
      console.log("block");
      this.renderer.setElementStyle(this.el.nativeElement.children[0], 'visibility', 'visible');
    }
    console.log("click fired");
    window.alert("color changed to green");
    console.log("first Child: " + this.el.nativeElement.children[0].innerHTML);
    console.log("number of children: " + this.el.nativeElement.children.length);
    for(let i=0; i < this.el.nativeElement.children.length; i++) {
      console.log("child no. " + i + " : " + this.el.nativeElement.children[i].innerHTML);
    }

    
  }
}