import React from 'react'

export default function About(props) {
    // const [myStyle, setmyStyle] = useState(
    // {
    //     color : 'black',
    //     backgroundColor : 'white'
    // });

    let myStyle ={
        color : props.mode === 'dark'?'white':'#042743',
        backgroundColor : props.mode === 'dark'?'rgb(65 95 119)':'white',
        border :'1px solid'
    }
  return (
    <div className="container" style = {{color : props.mode === 'dark'?'white':'#042743'}}>
        <h2 className='my-3'>About Us</h2>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style = {myStyle}    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyse Your Text</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body"style = {myStyle}>
                    TextUtils is designed to be your go-to tool for analyzing and manipulating text. Whether you need to count words, characters, or convert text to different cases, our app has got you covered. With a user-friendly interface and powerful features, you can effortlessly explore the intricacies of your written content.
                    </div>
                </div>
            </div>

            <div className="accordion-item" >
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style = {myStyle}data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free To Use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style = {myStyle} >
                    We believe that access to quality tools should be available to everyone. That's why our web app is completely free to use, without any hidden costs or subscriptions. Simply visit our website, and you'll have a comprehensive text analysis toolkit at your fingertips, ready to enhance your writing experience.
                    </div>
                </div>
            </div>

            <div className="accordion-item" >
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style = {myStyle}data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatabile</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style = {myStyle}>
                    TextUtils is built with modern web technologies, ensuring seamless compatibility across a wide range of browsers. Whether you're using the latest version of Chrome, Firefox, Safari, or Edge, our app will work flawlessly, allowing you to analyze and manipulate text without any hassle or compatibility issues.
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
