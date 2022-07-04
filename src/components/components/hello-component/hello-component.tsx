import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hello-component',
  styleUrl: 'hello-component.css',
  shadow: true,
})
export class HelloComponent {

  hello(e,name){
    console.log('Hello',e.target,name);
  }
  render() {
    return (
      <Host>
        <slot>
          <button class="bg-indigo-500" onClick={(e) => this.hello(e,'James')}>Hello</button>
        </slot>
      </Host>
    );
  }

}
