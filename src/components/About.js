import React from 'react'

export default function About(props) { 
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    }
    
    return (
        <div className="container">
            <h1 className="my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>About TextUtils</h1>
            
            <div className="accordion" id="accordionExample">
                 
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                             <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils gives you a way to analyze your text quickly and efficiently. 
                           It counts words, characters, and also lets you summarize your text for quick insights.
                        </div>
                    </div>
                </div>

        
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a free character counter and text editing tool. 
                            You can convert text to uppercase or lowercase, remove extra spaces, copy text to clipboard, 
                            and make changes instantly without any cost. It is useful for students, bloggers, and professionals.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils works in all modern web browsers like Chrome, Firefox, Safari, Edge, and Opera. 
                            It also allows you to download your text as a PDF for offline use. 
                            Whether it’s essays, blogs, or professional reports, TextUtils adapts to your workflow.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
