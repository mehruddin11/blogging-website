import React, { useEffect, useState } from "react"
// import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// code by MD
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// code by MD

const CodeSnippets = () => {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setToggle(false);

        }, 1000);

    }, [toggle]);
    // SyntaxHighlighter.registerLanguage('jsx', jsx);
    const copytextHandler = (e) => {
        try {
            const text = document.getElementById('text');
            const codeBlock = text.innerHTML;

            navigator.clipboard.writeText(codeBlock).then(() => {

            }, () => {
                console.log("err wrting to the clipboard")

            })

        }
        catch (err) {
            console.log(err)
        }

    }

    const codeToBeColorized = 
`const addTwoNumber = (num, target)=>{
    console.time("start")
    for(let p1 =0; p1<num.length; p1++){
                
    const numberTofind = target - num[p1]
                                                            
    for(let p2 =p1+1; p2< num.length; p2++){
        if (num[p2] === numberTofind){
            return [p1,p2];
        }
    }
    }
return null
}                               
console.log(addTwoNumber(numArray, targetNumber));
console.timeEnd("start")`;

    return (

        <aside className="aside">
            <div className="container ">
                <p className="language">  javascript </p>
                <div className="code-wrapper">
                    {/* <pre> */}
                        {/* <code id='text' > */}
                            {/* {
                            `
                            const addTwoNumber = (num, target)=>{
                                console.time("start")
                                    for(let p1 =0; p1<num.length; p1++){
        
                                        const numberTofind = target - num[p1]
                                                    
                                        for(let p2 =p1+1; p2< num.length; p2++){
                                            if (num[p2] === numberTofind){
                                                return [p1,p2];
                                            }
                                        }
                                    }
                                    return null
                                }                               
                                console.log(addTwoNumber(numArray, targetNumber));
                                console.timeEnd("start")`
                        } */}

                            <SyntaxHighlighter language="javascript" className="codePrettified" style={docco}>
                                {codeToBeColorized}
                            </SyntaxHighlighter>

                        {/* </code > */}
                    {/* </pre> */}

                    <button id="copy-btn" onClick={() => {

                        copytextHandler();
                        setToggle(true);
                    }
                    } >Copy</button>


                </div>

                <span className={toggle ? 'copy-success  show-message' : 'copy-success'} >
                    code coppied
                </span>


            </div>


        </aside>

    )
}
export default CodeSnippets;


