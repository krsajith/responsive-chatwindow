import { Component, Prop, h, State, Host } from '@stencil/core';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @State() visible: boolean = false;


  render() {
    return (
      <Host>
        <div class={{ 'hidden': !this.visible, 'rounded-md shadow-xl absolute right-3 bottom-3 p-2 main  bg-slate-100 flex flex-col h-96': this.visible }}>
        
        <div class="place-self-start">
      <div class="bg-white p-5 rounded-2xl rounded-tl-none">
        Hey, there! It's been a while!
      </div>
    </div>

    <div class="place-self-end text-right">
      <div class="bg-green-50 text-green-900 p-5 rounded-2xl rounded-tr-none">
        Hello how are you ?
      </div>
    </div>


          <button onClick={() => (this.visible = !this.visible)}>Close</button>
        </div>

        <span class={{ 'hidden': this.visible, 'cursor-pointer flex justify-end p-4 absolute right-3 bottom-3': !this.visible }}
        
         onClick={() => (this.visible = !this.visible)}>
          <svg class="w-8 h-8" viewBox="0 0 512 512">
            <path d="M144 208C126.3 208 112 222.2 112 239.1C112 257.7 126.3 272 144 272s31.1-14.25 31.1-32S161.8 208 144 208zM256 207.1c-17.75 0-31.1 14.25-31.1 32s14.25 31.1 31.1 31.1s31.1-14.25 31.1-31.1S273.8 207.1 256 207.1zM368 208c-17.75 0-31.1 14.25-31.1 32s14.25 32 31.1 32c17.75 0 31.99-14.25 31.99-32C400 222.2 385.8 208 368 208zM256 31.1c-141.4 0-255.1 93.12-255.1 208c0 47.62 19.91 91.25 52.91 126.3c-14.87 39.5-45.87 72.88-46.37 73.25c-6.624 7-8.373 17.25-4.624 26C5.818 474.2 14.38 480 24 480c61.49 0 109.1-25.75 139.1-46.25c28.87 9 60.16 14.25 92.9 14.25c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM256 400c-26.75 0-53.12-4.125-78.36-12.12l-22.75-7.125L135.4 394.5c-14.25 10.12-33.87 21.38-57.49 29c7.374-12.12 14.37-25.75 19.87-40.25l10.62-28l-20.62-21.87C69.81 314.1 48.06 282.2 48.06 240c0-88.25 93.24-160 207.1-160s207.1 71.75 207.1 160S370.8 400 256 400z" />
          </svg>
        </span>
      </Host>
    );
  }
}
