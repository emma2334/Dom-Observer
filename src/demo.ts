import prettier from 'prettier/standalone'
import htmlParser from 'prettier/parser-html'

export default prettier.format(
  `
  <div>
    <h1>Hi i'm Emma</h1>
    <a href="https://github.com/emma2334">It's my GitHub</a>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus facilisis magna id ultrices. In placerat pharetra bibendum. Nulla facilisis, mi vel varius finibus, lorem leo tincidunt eros, eget congue tortor mi lobortis quam. Donec pulvinar diam nec nunc consequat condimentum. Nunc viverra, leo vitae varius feugiat, lorem sapien dignissim tortor, nec elementum nunc sem nec metus. Sed gravida ligula eget enim accumsan elementum. Fusce quis est vel ligula dictum imperdiet. Phasellus ut placerat odio. Praesent quis iaculis ante, at vehicula erat. Sed eget tristique orci. Duis mollis nec massa eu dictum.</p>
    <img src="./emma-bear.png" style="width: 300px;">
  </div>
  `,
  { parser: 'html', plugins: [htmlParser] },
)
