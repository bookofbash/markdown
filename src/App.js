import React, { useState, useEffect} from 'react';
import marked from 'marked';
import './App.css';



function App(){
  const [input, setInput] = useState(`# Welcome to Bashir's React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
    
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  You can make really, really, really, really, really, really, really, really, really, really, really, long lines. 
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://bookofbash.github.io/home), and
  > Block Quotes!Block Quotes!Block Quotes!Block Quotes!
  Block Quotes!Block Quotes!Block Quotes!Block Quotes!
  Block Quotes!Block Quotes!Block Quotes!Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header  | Crazy Header  | Another Header?
  ------------ | ------------- | ------------- 
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
            - More?
  
  
  1. And there are numberd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, you can add embedded images:
  
  ![Unsplash Photo w/ Text](https://source.unsplash.com/random/320x240)
  Source: Unsplash.com
  `);

//Set options
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  breaks: true,
  smartLists: true,
  smartypants: false,
  sanitize:true,
})

  useEffect(() => {
    let preview = document.getElementById('preview');
    preview.innerHTML = marked(input);
  })

  //Sets innerHTML
  function createMarkup(){
    return     {__html: marked(input, {sanitize: true})};
  }

  return (
    <div>
      <div className='container'>
        <div id="preview" dangerouslySetInnerHTML={createMarkup()}></div>      

        <textarea id="editor" 
        type='text' 
        value={input}
        onChange={e =>setInput(e.target.value)}      
        ></textarea>
      </div>
    </div>
  );
}


export default App;
